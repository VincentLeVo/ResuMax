'use client'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { OptionalJobDescription } from '@/components/OptionalJobDescription'
import { PaperClipIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import { useState, forwardRef } from 'react'
import { Card } from '@/components/Card'
import { Heading, Subheading } from '@/components/Text'
import { LoadingSpinner } from '@/components/LoadingSpinner'

const MAX_FILE_SIZE = 10485760 // 10MB in bytes

export const UploadResume = forwardRef((props, ref) => {
  const [resumeFile, setResumeFile] = useState(null)
  const [jobDescription, setJobDescription] = useState('')
  const [error, setError] = useState('') // To store error messages
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    if (!resumeFile) {
      return setError('No Resume Attached. Please upload a resume.')
    }
    try {
      const formData = new FormData()
      formData.append('resume', resumeFile)
      formData.append('jobDescription', jobDescription)

      // Make POST request to the API
      const response = await fetch('/api/resume', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      if (response.ok) {
        const analysisData = data
        // Store the analysis data in localStorage
        localStorage.setItem('analysisData', JSON.stringify(analysisData))
        router.push('/resume-analysis') // Redirect to analysis page
        setIsLoading(false)
        setError('')
      } else {
        setError('Error processing resume.')
        setIsLoading(false)
      }
    } catch (err) {
      setError('An error occurred while submitting the form.')
      setIsLoading(false)
      console.error(err)
    }
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

  if (isLoading && !error) {
    return (
      <Container className="py-52">
        <LoadingSpinner />
        <p className="mt-6 text-center text-sm text-gray-400">
          We are processing your resume. This may take up to 30 seconds.
          <br />
          Please hold on while we analyze the data.
        </p>
      </Container>
    )
  }

  return (
    <Card className="relative z-20 m-auto max-w-2xl shadow-xl">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <Heading className="text-center">Please Upload Your Resume</Heading>
          <p className="m-auto mt-3 max-w-lg text-center text-zinc-300">
            This application does an analysis of your resume. Once you upload
            your resume, you will be able to see suggestions on how to improve
            it.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mx-auto mt-6 flex flex-col justify-center">
          <div className="w-full self-center rounded-xl border border-dashed border-sky-200/80 py-20 text-center">
            <PaperClipIcon
              aria-hidden="true"
              className="mx-auto h-12 w-12 text-sky-400/60"
            />
            <div className="mt-4 flex items-center justify-center text-sm leading-6 text-zinc-300">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-sky-300/20 px-3 py-1 text-lg font-semibold text-zinc-200 focus-within:outline-none focus-within:ring-2 focus-within:ring-sky-600 focus-within:ring-offset-2 hover:text-sky-400"
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
            <p className="mt-2 text-xs leading-5 text-zinc-400">
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
          <p className="mt-3 text-center text-lg font-semibold text-red-400">
            {error}
          </p>
        )}

        <OptionalJobDescription
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
          className="mt-7"
        />
        <div ref={ref} className="flex justify-center">
          <Button type="submit" color="sky" size="large" className="mt-4">
            Submit
          </Button>
        </div>
      </form>
    </Card>
  )
})

UploadResume.displayName = 'UploadResume'
