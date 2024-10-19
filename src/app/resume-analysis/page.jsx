'use client'
import { Badge } from '@/components/Badge'
import { Container } from '@/components/Container'
import { KeyTermsMetrics } from '@/components/KeyTermsMetrics'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { ResumeBreakdown } from '@/components/ResumeBreakdown'
import { Strengths } from '@/components/Strengths'
import { Suggestions } from '@/components/Suggestions'
import { Summary } from '@/components/Summary'
import { Heading } from '@/components/Text'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function ResumeSuggestions() {
  const temporaryData = {
    jobApplicantFirstName: 'Person',
    matchScore: 75,
    keywordMetrics: [
      {
        keyword: 'Software Development',
        matchPercent: 85,
        suggestion:
          'Emphasize more direct experience with software development phases and methodologies',
      },
      {
        keyword: 'JavaScript',
        matchPercent: 70,
        suggestion:
          'Provide more specific examples of projects or tasks completed using JavaScript',
      },
      {
        keyword: 'React',
        matchPercent: 80,
        suggestion: 'Highlight React experience in more prominent position',
      },
      {
        keyword: 'RESTful APIs',
        matchPercent: 90,
        suggestion: 'None necessary, strong match',
      },
      {
        keyword: 'Git',
        matchPercent: 100,
        suggestion: 'None necessary, strong match',
      },
      {
        keyword: 'Agile Development',
        matchPercent: 0,
        suggestion:
          'Add relevant Agile development methodologies experience if any',
      },
      {
        keyword: 'Docker',
        matchPercent: 75,
        suggestion: 'Expand on experiences using Docker in past projects',
      },
      {
        keyword: 'Ci/CD pipelines',
        matchPercent: 10,
        suggestion: 'Add relevant experiences with CI/CD pipelines if any',
      },
      {
        keyword: 'Next.js',
        matchPercent: 0,
        suggestion: 'Add relevant experiences with Next.js if any',
      },
    ],
    breakdowns: [
      {
        title: 'Skills',
        percentage: 65,
      },
      {
        title: 'Experience',
        percentage: 85,
      },
      {
        title: 'Education',
        percentage: 90,
      },
    ],
    suggestions: [
      {
        title: 'Add Next.js skills',
        priority: 'Medium',
        type: 'Add',
      },
      {
        title: 'Highlight Agile experience',
        priority: 'High',
        type: 'Edit',
      },
      {
        title: 'Add CI/CD pipelines experience',
        priority: 'High',
        type: 'Add',
      },
    ],
    strengths: [
      {
        title: 'Strong Java, Python and JavaScript skill sets',
      },
      {
        title: 'Extensive experience with Git',
      },
      {
        title: 'Effective use of RESTful APIs in previous projects',
      },
      {
        title: 'Good educative background and related coursework',
      },
      {
        title: 'Experience with Docker',
      },
    ],
  }

  const [analysisData, setAnalysisData] = useState(temporaryData)
  const [loading, setLoading] = useState(true)
  const searchParams = useSearchParams()

  // Function to check if the data is fully loaded
  const isDataReady = (data) => {
    return (
      data &&
      data.matchScore &&
      Array.isArray(data.keywordMetrics) &&
      Array.isArray(data.breakdowns) &&
      Array.isArray(data.suggestions) &&
      Array.isArray(data.strengths)
    )
  }

  // useEffect(() => {
  //   const fetchStoredData = async () => {
  //     setLoading(true)
  //     const storedData = await localStorage.getItem('analysisData')
  //     if (storedData) {
  //       const parsedData = JSON.parse(storedData)
  //       // Check if the data is ready before setting it
  //       if (isDataReady(parsedData)) {
  //         setAnalysisData(parsedData)
  //       }
  //     }
  //     setLoading(false)
  //   }

  //   const fetchTemporaryData = () => {
  //     setLoading(true)
  //     // Simulate loading
  //     setTimeout(() => {
  //       setAnalysisData(temporaryData)
  //       setLoading(false)
  //     }, 2000) // Simulate delay
  //   }

  //   const isLoading = searchParams.get('loading')

  //   if (isLoading === 'true') {
  //     fetchStoredData()
  //   }
  // }, [searchParams])

  // if (loading || !isDataReady(analysisData)) {
  //   return (
  //     <Container className="py-52">
  //       <LoadingSpinner />
  //     </Container>
  //   )
  // }

  return (
    <>
      <LoadingSpinner className="hidden" />

      <Container>
        <div className="flex flex-col">
          <p className="text-bold text-xl text-gray-300">
            Hello
            {analysisData.jobApplicantFirstName
              ? `, ${analysisData.jobApplicantFirstName}`
              : ','}
          </p>
          <Heading className="mt-1">Here Is Your Resume Analysis</Heading>
          <div className="max-w-10xl mx-auto mt-14 w-full grow lg:flex">
            {/* Left sidebar & main wrapper */}
            <div className="flex-1 xl:flex">
              <div className="p-1 xl:w-[28rem] xl:shrink-0">
                <Summary matchScore={analysisData.matchScore} />
                <ResumeBreakdown
                  breakdowns={analysisData.breakdowns}
                  className="mt-2"
                />
              </div>

              <div className="p-1">
                <KeyTermsMetrics keywordMetrics={analysisData.keywordMetrics} />
              </div>
            </div>

            <div className="shrink-0 p-1 lg:w-[28rem]">
              <Suggestions suggestions={analysisData.suggestions} />
              <Strengths strengths={analysisData.strengths} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
