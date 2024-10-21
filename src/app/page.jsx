'use client'

import { UploadResume } from '@/components/UploadResume'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { useRef } from 'react'

function Hero({ buttonHandler, ...props }) {
  return (
    <Container className="relative mb-14 py-10 text-center lg:pt-16" {...props}>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-700 to-sky-700 opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 bg-gradient-to-tr from-blue-700 to-sky-700 opacity-25 sm:left-[calc(50%+36rem)] sm:w-[75rem]"
        />
      </div>
      <div className="relative z-20">
        <h1 className="font-display mx-auto max-w-4xl text-5xl font-medium tracking-tight text-white sm:text-7xl">
          Build a Resume That{' '}
          <span className="relative whitespace-nowrap text-sky-400">
            <span className="relative">Gets Results</span>
          </span>{' '}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Get instant, personalized feedback on your resume to help you catch
          the attention of employers faster.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <Button size="small" color="sky" onClick={buttonHandler}>
            Get Started
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default function Home() {
  const uploadRef = useRef(null)

  const scrollToUploadSection = () => {
    if (uploadRef.current) {
      uploadRef.current.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.log('Upload section not found')
    }
  }

  return (
    <>
      <Hero buttonHandler={scrollToUploadSection} />
      <UploadResume ref={uploadRef} />
    </>
  )
}
