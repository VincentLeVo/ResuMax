'use client'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { OptionalJobDescription } from '@/components/OptionalJobDescription'
import { PaperClipIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const MAX_FILE_SIZE = 10485760 // 10MB in bytes

export function UploadResume() {
  const [resumeFile, setResumeFile] = useState(null)
  const [jobDescription, setJobDescription] = useState('')
  const [error, setError] = useState('') // To store error messages
  const router = useRouter()

  // Handle form submission
  async function handleSubmit(e) {
    // e.preventDefault()
    // if (!resumeFile) {
    //   return setError('No Resume Attached. Please upload a resume.')
    // }
    // try {
    //   const formData = new FormData()
    //   formData.append('resume', resumeFile)
    //   formData.append('jobDescription', jobDescription)
    //   //Navigate to resume analysis page with loading state
    //   router.push('/resume-analysis?loading=true')
    //   // Make POST request to the API
    //   const response = await fetch('/api/resume', {
    //     method: 'POST',
    //     body: formData,
    //   })
    //   const data = await response.json()
    //   if (response.ok) {
    //     // Assuming the API response contains the entire analysis data
    //     const analysisData = data
    //     // Store the analysis data in localStorage
    //     localStorage.setItem('analysisData', JSON.stringify(analysisData))
    //     setError('')
    //     // Navigate to the analysis page
    //   } else {
    //     setError('Error processing resume.')
    //   }
    // } catch (err) {
    //   setError('An error occurred while submitting the form.')
    //   console.error(err)
    // }
  }

  async function handleFileChange(e) {
    const file = e.target.files[0]
    if (!file) {
      return
    }

    if (file.size > MAX_FILE_SIZE) {
      setError('File size is too large. Please upload a file up to 10MB.')
      return
    }

    setError('') // Clear any previous errors when file is valid
    setResumeFile(file)
  }

  return (
    <Container>
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
            Please Upload Your Resume
          </h2>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mx-auto mt-2 flex max-w-md flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="self-center text-center">
            <PaperClipIcon
              aria-hidden="true"
              className="mx-auto h-12 w-12 text-blue-400/50"
            />
            <div className="mt-4 flex items-center text-sm leading-6 text-slate-300">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-blue-300/20 px-3 py-1 font-semibold text-slate-200 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-blue-500"
              >
                Upload a file
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  onChange={handleFileChange}
                  className="sr-only"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              PDF File Up To 10MB
            </p>
          </div>
          {resumeFile && (
            <ul
              role="list"
              className="mt-3 divide-y divide-white/10 rounded-md border border-white/20"
            >
              <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                <div className="flex w-0 flex-1 items-center">
                  <PaperClipIcon
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                  />
                  <div className="ml-4 flex min-w-0 flex-1 gap-2">
                    <span className="truncate font-medium text-gray-400">
                      {resumeFile && resumeFile.name}
                    </span>
                    <span className="flex-shrink-0 text-gray-400">
                      {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB
                    </span>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <Button
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setResumeFile(null)
                    }}
                    color="red"
                    size="small"
                  >
                    Remove
                  </Button>
                </div>
              </li>
            </ul>
          )}
        </div>

        {/* Display Error Message */}
        {error && (
          <p className="my-4 text-center text-lg font-semibold text-red-400">
            {error}
          </p>
        )}

        <OptionalJobDescription
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
        />
        <div className="flex justify-center">
          <Button type="submit" color="blue" size="large" className="mt-4">
            Submit
          </Button>
        </div>
      </form>
    </Container>
  )
}
