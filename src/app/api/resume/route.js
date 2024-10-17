import { NextResponse } from 'next/server'
import OpenAI from 'openai' // Assuming you're using OpenAI for resume suggestions
import pdfParse from 'pdf-parse'

// Initialize OpenAI with the API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function GET() {
  return NextResponse.json({ message: 'Resume API GET route works!' })
}

export async function POST(req) {
  try {
    const formData = await req.formData()
    const resumeFile = formData.get('resume') // Get the uploaded file
    const jobDescription = formData.get('jobDescription') // Get the job description
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
    const resumeText = parsedData.text // Extracted text from the PDF

    // Call the OpenAI API to get resume suggestions
    // Now send the extracted text and job description to OpenAI to generate suggestions
    const completion = await openai.chat.completions.create({
      model: 'gpt-4', // You can use GPT-4 or GPT-3.5
      messages: [
        { role: 'system', content: 'You are a resume optimization assistant.' },
        {
          role: 'user',
          content: `Here is a resume: \n\n${resumeText}\n\nBased on this resume, provide up to 7 tailored suggestions for improvement considering the following job description:\n\n${jobDescription}`,
        },
      ],
    })

    const suggestionsText = completion.choices[0].message.content
    let suggestionsArray = suggestionsText.split('\n').filter(Boolean) // Split by newline, remove empty entries
    if (suggestionsArray.length > 7) {
      suggestionsArray = suggestionsArray.slice(0, 7) // Limit to 7 suggestions
    }

    // Return the suggestions as an array in the response
    return new Response(JSON.stringify({ suggestions: suggestionsArray }), {
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
