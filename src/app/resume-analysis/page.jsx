'use client' // This page is also client-side because we need to read query params

import { Container } from '@/components/Container'
import { KeyTermsMetrics } from '@/components/KeyTermsMetrics'
import { Heading } from '@/components/Text'
import { useEffect, useState } from 'react'

import { ResumeBreakdown } from '@/components/ResumeBreakdown'
import { Strengths } from '@/components/Strengths'
import { Suggestions } from '@/components/Suggestions'
import { Summary } from '@/components/Summary'

export default function ResumeSuggestions() {
  const [analysisData, setAnalysisData] = useState(null)

  useEffect(() => {
    const temporaryData = {
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

    const fetchStoredData = async () => {
      const storedData = await localStorage.getItem('analysisData')
      if (storedData) {
        setAnalysisData(JSON.parse(storedData))
      }
    }

    console.log('Fetching temporary data', temporaryData)
    const fetchTemporaryData = () => {
      setAnalysisData(temporaryData)
    }

    // fetchStoredData()
    fetchTemporaryData()
  }, [])

  if (!analysisData) {
    return <div>Loading...</div>
  }
  return (
    <>
      <Container>
        <div className="flex flex-col">
          <Heading>Resume Analysis</Heading>
          <div className="mx-auto mt-6 w-full max-w-7xl grow lg:flex xl:px-2">
            {/* Left sidebar & main wrapper */}
            <div className="flex-1 xl:flex">
              <div className="border-b border-gray-200 px-4 py-6 sm:px-6 lg:pl-8 xl:w-64 xl:shrink-0 xl:border-b-0 xl:border-r xl:pl-6">
                <Summary matchScore={analysisData.matchScore} />
                <ResumeBreakdown
                  breakdowns={analysisData.breakdowns}
                  className="mt-14"
                />
              </div>

              <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-10"></div>
            </div>

            <div className="shrink-0 border-t border-gray-200 px-4 py-6 sm:px-6 lg:w-[32rem] lg:border-l lg:border-t-0 lg:pr-8 xl:pr-6">
              <KeyTermsMetrics keywordMetrics={analysisData.keywordMetrics} />
              <Suggestions suggestions={analysisData.suggestions} />
              <Strengths strengths={analysisData.strengths} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
