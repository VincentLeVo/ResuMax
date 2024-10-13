import Image from "next/image";
import { Container } from "@/components/Container";
import { PaperClipIcon } from "@heroicons/react/24/solid";
import { Heading, Subheading } from "@/components/Text";
import clsx from "clsx";
import { Badge } from "@/components/Badge";

function Summary() {
  return (
    <div className="flex justify-between items-center py-4 border-b border-gray-200">
      <div className="flex flex-col gap-7">
        <div className="border-t border-white/10">
          <div className="text-md/6 mt-6 mb-2  font-semibold">
            Resume Status:
          </div>
          <Badge color="green" size="large">
            Optimized
          </Badge>
        </div>
        <div className="flex border-t border-white/10 flex-col mb-5 ">
          <div className="text-md mt-6 mb-2 font-semibold">Match Score:</div>
          <div className="w-24 h-24 rounded-full bg-green-500/10 dark:text-green-400 flex items-center justify-center text-2xl font-bold">
            85%
          </div>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <div className="absolute top-0 right-0">
              <span className="text-gray-400 cursor-pointer">?</span>
              <div className="tooltip text-sm p-2 bg-gray-200 text-gray-700 rounded">
                This score reflects the match between your resume and the
                uploaded job description.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KeyMetrics() {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">Keywords Match</h2>
      <div className=" rounded-lg p-4">
        <table className="table-auto mt-6  whitespace-nowrap text-left w-full">
          <thead className="border-b border-white/10 text-sm leading-6 text-white">
            <tr className="text-left">
              <th className="px-3 py-4 text-left text-sm font-semibold text-white">
                Keyword
              </th>
              <th className="px-3 py-4 text-left text-sm font-semibold text-white ">
                Match %
              </th>
              <th className="px-3 py-4 text-left text-sm font-semibold text-white ">
                Suggestions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            <tr>
              <td className="whitespace-nowrap px-3 py-4 text-base font-bold text-white">
                <Badge color="blue" size="large">
                  Leadership
                </Badge>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm  text-yellow-400">
                75%
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                Consider elaborating
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-3 py-4 text-base font-bold  text-gray-300">
                Agile
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm  text-red-400">
                50%
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                Missing, please add
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-3 py-4 text-base font-bold text-gray-300">
                Communication
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm  text-green-400">
                90%
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                Great job!
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Analysis() {
  return (
    <div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Resume Breakdown</h2>
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span>Skills: 80%</span>
              <span>80%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span>Experience: 70%</span>
              <span>70%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="bg-yellow-500 h-2 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span>Education: 90%</span>
              <span>90%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Personalized Suggestions */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Personalized Suggestions</h2>
        <div className="bg-gray-100/20 rounded-lg p-4">
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2 bg-white/10 p-4 rounded-lg shadow-md">
              <span className="text-gray-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </span>
              <div>
                <p>Add more technical keywords to match the job</p>
                <span className="text-sm text-yellow-600">High Priority</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 bg-white/10 p-4 rounded-lg shadow-md">
              <span className="text-gray-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </span>
              <div>
                <p>Consider expanding leadership roles</p>
                <span className="text-sm text-yellow-600">Medium Priority</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Strengths */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Resume Strengths</h2>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-green-600">
            ✔ Your resume has strong industry-specific keywords. Continue
            focusing on project experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Container>
        <div className="md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
              Please Upload Your Resume
            </h2>
          </div>
        </div>
        <div className="mt-2 max-w-md mx-auto flex  flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center self-center">
            <PaperClipIcon
              aria-hidden="true"
              className="mx-auto h-12 w-12 text-blue-400/50"
            />
            <div className="mt-4 flex items-center text-sm leading-6 text-slate-300">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md px-3 py-1 bg-blue-300/20 font-semibold text-slate-200 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-blue-500"
              >
                Upload a file
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-slate-400">
              PDF File Up To 10MB
            </p>
          </div>
          <ul
            role="list"
            className="divide-y divide-white/10 rounded-md border border-white/20"
          >
            <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
              <div className="flex w-0 flex-1 items-center">
                <PaperClipIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                />
                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                  <span className="truncate text-gray-400 font-medium">
                    resume_back_end_developer.pdf
                  </span>
                  <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                </div>
              </div>
              <div className="ml-4 flex-shrink-0">
                <a
                  href="#"
                  className="font-medium text-red-400 hover:text-indigo-300"
                >
                  Remove
                </a>
              </div>
            </li>
            <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
              <div className="flex w-0 flex-1 items-center">
                <PaperClipIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                />
                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                  <span className="truncate text-gray-400 font-medium">
                    coverletter_back_end_developer.pdf
                  </span>
                  <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                </div>
              </div>
              <div className="ml-4 flex-shrink-0">
                <a
                  href="#"
                  className="font-medium text-red-400 hover:text-indigo-300"
                >
                  Remove
                </a>
              </div>
            </li>
          </ul>
        </div>
      </Container>
      <Container>
        <div>
          <label
            htmlFor="comment"
            className="block text-sm font-medium leading-6 text-slate-200"
          >
            Optional: Write in your Job Description.
          </label>
          <div className="mt-2">
            <textarea
              id="comment"
              name="comment"
              rows={4}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>
        </div>
      </Container>
      <Container>
        <Heading>Good afternoon, Erica</Heading>
        <div className="mt-8 flex items-end justify-between">
          <Subheading>Overview</Subheading>
          <div></div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col">
          <div className="mx-auto w-full max-w-7xl grow lg:flex xl:px-2">
            {/* Left sidebar & main wrapper */}
            <div className="flex-1 xl:flex">
              <div className="border-b border-gray-200 px-4 py-6 sm:px-6 lg:pl-8 xl:w-64 xl:shrink-0 xl:border-b-0 xl:border-r xl:pl-6">
                <Summary />
              </div>

              <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
                <KeyMetrics />
              </div>
            </div>

            <div className="shrink-0 border-t border-gray-200 px-4 py-6 sm:px-6 lg:w-96 lg:border-l lg:border-t-0 lg:pr-8 xl:pr-6">
              <Analysis />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
