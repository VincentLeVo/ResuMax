import OpenAI from 'openai' // Assuming you're using OpenAI for resume suggestions
import pdfParse from 'pdf-parse'

// Initialize OpenAI with the API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req) {
  try {
    const formData = await req.formData()
    const resumeFile = formData.get('resume')
    const jobDescription = formData.get('jobDescription') || ''

    if (!resumeFile) {
      return new Response(JSON.stringify({ error: 'No resume uploaded' }), {
        status: 400,
      })
    }

    // Convert the file into an ArrayBuffer and then a Buffer
    const arrayBuffer = await resumeFile.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Parse the PDF resume using pdf-parse
    const parsedData = await pdfParse(buffer)
    const resumeText = parsedData.text

    // Construct a base prompt
    let prompt = `You are a resume analysis assistant. Analyze the following resume and provide the analysis in the following JSON format:

{
  "jobApplicantName": string, // The first name of the applicant who uploaded their resume.
  "matchScore": number, // Overall match score (you can base this on general best practices)
  "keywordMetrics": [ // If a job description is empty, please ignore this field. Otherwise, provide key terms identified in the job description and their match percentage.
    {
      "keyword": string, // A key term or keyword identified in the job description
      "matchPercent": number, // Estimated match percentage between job description and resume(0-100)
      "suggestion": string // Suggestion for improvement
    },
    // ... up to 7-10 keywords
  ],
  "breakdowns": [
    { "title": "Skills", "percentage": number },
    { "title": "Experience", "percentage": number },
    { "title": "Education", "percentage": number }
  ],
  "suggestions": [
    {
      "title": string, // Suggestion title (Maximum 35 Characters) 
      "description": string, // Suggestion in-depth description (Maximum 100 Characters)
      "priority": "High" | "Medium" | "Low",
      "type": "Add" | "Edit" | "Delete"
    },
    // ... up to 7 suggestions
  ],
  "strengths": [
    { "title": string },
    // ... list of strengths and pros of the resume. Each Strength should a string of 50-130 characters
  ]
}

Resume:

${resumeText}

`

    // If job description is provided, modify the prompt to include it
    if (jobDescription) {
      prompt += `Job Description:

${jobDescription}

Provide suggestions based on the match between the resume and the job description.
`
    } else {
      prompt += `
      
      Provide general suggestions based on the resume, without a specific job description.
      
      `
    }

    // Call OpenAI's API to generate suggestions
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content:
            'You are a helpful assistant that outputs data in JSON format only.',
        },
        { role: 'user', content: prompt },
      ],
    })

    const completionText = completion.choices[0].message.content

    // Extract the JSON part of the response
    const jsonMatch = completionText.match(/\{[\s\S]*\}/)

    if (!jsonMatch) {
      console.error('No JSON found in the OpenAI response:', completionText)
      return new Response(
        JSON.stringify({ error: 'No JSON found in OpenAI response' }),
        {
          status: 500,
        },
      )
    }

    const jsonString = jsonMatch[0]

    let analysisData
    try {
      analysisData = JSON.parse(jsonString)
    } catch (e) {
      console.error('Error parsing JSON:', e)
      console.error('JSON string:', jsonString)
      return new Response(
        JSON.stringify({ error: 'Error parsing JSON from OpenAI response' }),
        {
          status: 500,
        },
      )
    }

    // Return the analysis data as the API response
    return new Response(JSON.stringify(analysisData), {
      status: 200,
    })
  } catch (error) {
    console.error('Error processing resume:', error)
    return new Response(
      JSON.stringify({ error: 'Error processing the resume' }),
      { status: 500 },
    )
  }
}
