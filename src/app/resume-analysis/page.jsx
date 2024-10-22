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
import { useState, useEffect } from 'react'
import clsx from 'clsx'
export default function ResumeSuggestions() {
  // const temporaryData = {
  //   jobApplicantFirstName: 'Person',
  //   matchScore: 75,
  //   keywordMetrics: [
  //     {
  //       keyword: 'Software Development',
  //       matchPercent: 85,
  //       suggestion:
  //         'Emphasize more direct experience with software development phases and methodologies',
  //     },
  //     {
  //       keyword: 'JavaScript',
  //       matchPercent: 70,
  //       suggestion:
  //         'Provide more specific examples of projects or tasks completed using JavaScript',
  //     },
  //     {
  //       keyword: 'React',
  //       matchPercent: 80,
  //       suggestion: 'Highlight React experience in more prominent position',
  //     },
  //     {
  //       keyword: 'RESTful APIs',
  //       matchPercent: 90,
  //       suggestion: 'None necessary, strong match',
  //     },
  //     {
  //       keyword: 'Git',
  //       matchPercent: 100,
  //       suggestion: 'None necessary, strong match',
  //     },
  //     {
  //       keyword: 'Agile Development',
  //       matchPercent: 0,
  //       suggestion:
  //         'Add relevant Agile development methodologies experience if any',
  //     },
  //     {
  //       keyword: 'Docker',
  //       matchPercent: 75,
  //       suggestion: 'Expand on experiences using Docker in past projects',
  //     },
  //     {
  //       keyword: 'Ci/CD pipelines',
  //       matchPercent: 10,
  //       suggestion: 'Add relevant experiences with CI/CD pipelines if any',
  //     },
  //     {
  //       keyword: 'Next.js',
  //       matchPercent: 0,
  //       suggestion: 'Add relevant experiences with Next.js if any',
  //     },
  //   ],
  //   breakdowns: [
  //     {
  //       title: 'Skills',
  //       percentage: 65,
  //     },
  //     {
  //       title: 'Experience',
  //       percentage: 85,
  //     },
  //     {
  //       title: 'Education',
  //       percentage: 90,
  //     },
  //   ],
  //   suggestions: [
  //     {
  //       title: 'Add Next.js skills',
  //       priority: 'Medium',
  //       type: 'Add',
  //     },
  //     {
  //       title: 'Highlight Agile experience',
  //       description:
  //         'Add Agile experience if any. Add Agile experience if any. Add Agile experience if any',
  //       priority: 'High',
  //       type: 'Edit',
  //     },
  //     {
  //       title: 'Add CI/CD pipelines experience',
  //       description: 'Add CI/CD pipelines experience if any',
  //       priority: 'High',
  //       type: 'Add',
  //     },
  //   ],
  //   strengths: [
  //     {
  //       title: 'Strong Java, Python and JavaScript skill sets',
  //     },
  //     {
  //       title: 'Extensive experience with Git',
  //     },
  //     {
  //       title: 'Effective use of RESTful APIs in previous projects',
  //     },
  //     {
  //       title: 'Good educative background and related coursework',
  //     },
  //     {
  //       title: 'Experience with Docker',
  //     },
  //   ],
  // }

  const [analysisData, setAnalysisData] = useState({})
  const [loading, setLoading] = useState(true)

  // Function to check if the data is fully loaded
  const isDataReady = (data) => {
    return (
      data &&
      data.matchScore &&
      Array.isArray(data.breakdowns) &&
      Array.isArray(data.suggestions) &&
      Array.isArray(data.strengths)
    )
  }

  useEffect(() => {
    const fetchStoredData = async () => {
      setLoading(true)
      const storedData = localStorage.getItem('analysisData')
      if (storedData) {
        const parsedData = JSON.parse(storedData)
        if (isDataReady(parsedData)) {
          setAnalysisData(parsedData)
        }
      }
      setLoading(false)
    }
    fetchStoredData()
  }, [])

  if (loading) {
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

  const displayKeywordsMetrics =
    analysisData.keywordMetrics && analysisData.keywordMetrics.length > 3

  return (
    <>
      <Container>
        <div className="flex flex-col">
          <p className="text-bold text-xl text-gray-300">
            Hello
            {analysisData.jobApplicantName
              ? `, ${analysisData.jobApplicantName}`
              : ','}
          </p>
          <Heading className="mt-1">Below is your Resume Analysis</Heading>
          <div className="mx-auto mt-14 w-full max-w-10xl grow lg:flex">
            {/* Left sidebar & main wrapper */}
            <div className="flex-1 xl:flex">
              <div
                className={clsx(
                  'shrink-1 flex flex-col gap-y-2 p-1',
                  displayKeywordsMetrics
                    ? 'xl:min-w-[20rem] xl:max-w-[50rem]'
                    : 'xl:w-full',
                )}
              >
                {analysisData.matchScore && (
                  <Summary matchScore={analysisData.matchScore} />
                )}
                {analysisData.breakdowns && (
                  <ResumeBreakdown breakdowns={analysisData.breakdowns} />
                )}
              </div>

              {displayKeywordsMetrics && (
                <div className="shrink-1 flex flex-col gap-y-2 p-1">
                  {' '}
                  {/* Allow this to shrink */}
                  <KeyTermsMetrics
                    keywordMetrics={analysisData.keywordMetrics}
                  />
                </div>
              )}
            </div>

            {/* Right sidebar & main wrapper */}
            <div
              className={clsx(
                'shrink-1 flex flex-col gap-y-2 p-1',
                displayKeywordsMetrics ? '' : 'xl-min-w-2/3',
              )}
            >
              {' '}
              {/* Fixed width */}
              {analysisData.suggestions && (
                <Suggestions suggestions={analysisData.suggestions} />
              )}
              {analysisData.strengths && (
                <Strengths strengths={analysisData.strengths} />
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
