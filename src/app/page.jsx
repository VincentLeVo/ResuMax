import Image from "next/image";
import { Container } from "@/components/Container";
import { PaperClipIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { Badge } from "@/components/Badge";
import { KeyTerm } from "@/components/KeyTerm";
import { Heading, Subheading } from "@/components/Text";
import { PencilIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Divider } from "@/components/Divider";
import { Textarea } from "@/components/Textarea";

function Summary() {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex flex-col gap-4">
        <div className="border-t border-white/10">
          <div className="text-lg/6 mb-2  font-semibold">Resume Status:</div>
          <Badge color="green" size="large">
            Optimized
          </Badge>
        </div>
        <Divider />
        <div className="flex flex-col">
          <div className="text-lg mb-2 font-semibold">Match Score:</div>
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
    <div>
      <Subheading>Keyword Match</Subheading>
      <div className="mt-3 rounded-lg p-2">
        <table className="table-auto whitespace-nowrap text-left w-full min-w-full text-sm/6 text-white">
          <thead className=" text-zinc-400">
            <tr className="text-left">
              <th className="border-b border-b-zinc-950/10 px-3 py-4 font-medium first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] dark:border-b-white/10">
                Keyword
              </th>
              <th className="border-b border-b-zinc-950/10 px-3 py-4 font-medium first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] dark:border-b-white/10 ">
                Match %
              </th>
              <th className="border-b border-b-zinc-950/10 px-3 py-4 font-medium first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] dark:border-b-white/10 ">
                Suggestions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            <tr>
              <td className="whitespace-nowrap px-3 py-4 text-base font-bold text-white">
                <KeyTerm>Leadership</KeyTerm>
              </td>
              <td className="whitespace-nowrap px-3 py-4">
                <Badge color="yellow">75%</Badge>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm ">
                Consider elaborating
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-3 py-4 text-base font-bold  text-gray-300">
                <KeyTerm>Agile</KeyTerm>
              </td>
              <td className="whitespace-nowrap px-3 py-4">
                <Badge color="red">50%</Badge>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm ">
                Missing, please add
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-3 py-4 text-base font-bold text-gray-300">
                <KeyTerm>Communication</KeyTerm>
              </td>
              <td className="whitespace-nowrap px-3 py-4">
                <Badge color="green">90%</Badge>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm ">
                Great job!
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ResumeBreakdown() {
  return (
    <div>
      <Subheading>Resume Breakdown</Subheading>
      <dl className="mt-3 grid grid-cols-1 divide-y divide-white/10 overflow-hidden rounded-lg  shadow ">
        <div className="px-4 border-t border-white/10 py-5 sm:p-6">
          <dt className="text-md font-semibold text-white  mb-2">
            Skills: 80%
          </dt>
          <dd className="w-full bg-green-400/10">
            <div
              className="bg-green-400 h-2 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </dd>
        </div>
        <div className="px-4 border-t border-white/10 py-5 sm:p-6">
          <dt className="text-md font-semibold text-white  mb-2">
            Experience: 70%
          </dt>
          <dd className="w-full bg-yellow-400/10">
            <div
              className="bg-yellow-500 h-2 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </dd>
        </div>
        <div className="px-4 border-t border-white/10 py-5 sm:p-6">
          <dt className="text-md font-semibold text-white  mb-2">
            Education: 90%
          </dt>
          <dd className="w-full bg-green-400/10">
            <div
              className="bg-green-400 h-2 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </dd>
        </div>
      </dl>
    </div>
  );
}

function Suggestions() {
  let suggestions = [
    {
      title: "Add more technical keywords to match the job",
      priority: "High",
      type: "Add",
    },
    {
      title: "Consider expanding leadership roles",
      priority: "Medium",
      type: "Add",
    },
    {
      title: "Edit the work experience section about company culture",
      priority: "Low",
      type: "Edit",
    },
    {
      title: "Delete the objective section",
      priority: "High",
      type: "Delete",
    },
  ];

  const priorityStyles = {
    High: "red",
    Medium: "orange",
    Low: "zinc",
  };

  const iconMapping = {
    Add: PlusIcon,
    Delete: XMarkIcon,
    Edit: PencilIcon,
  };

  return (
    <div className="mt-14">
      <Subheading>Personalized Suggestions</Subheading>
      <div className="mt-3">
        <ul className="flex flex-col divide-y divide-white/10">
          {suggestions.map((suggestion, index) => {
            const Icon = iconMapping[suggestion.type]; // Dynamically selecting the icon
            return (
              <li key={index} className="w-full py-5">
                <div className="flex content-center">
                  <Icon className="text-gray-400 self-baseline w-6 h-6 mr-4" />
                  <div>
                    <p className="text-base font-semibold">
                      {suggestion.title}
                    </p>
                    <Badge
                      className="mt-1"
                      color={priorityStyles[suggestion.priority]}
                    >
                      {suggestion.priority} Priority
                    </Badge>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function Strengths() {
  let strengths = [
    {
      title:
        "Your resume has strong industry-specific keywords. It is well optimized.",
    },
    {
      title: "Your education section is well-detailed.",
    },
    {
      title: "Your skills in frontend are excellent.",
    },
    {
      title: "Your resume has strong industry-specific keywords.",
    },
  ];

  return (
    /* Resume Strengths */
    <div className="mt-14">
      <Subheading>Strengths</Subheading>
      <ul className="mt-3 divide-y divide-white/10">
        {strengths.map((strength, index) => {
          return (
            <li key={index} className="w-full py-3">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-zinc-500/10 rounded-full flex items-center justify-center text-zinc-500">
                  ✔
                </div>
                <div className="ml-4">
                  <p className="text-sm ">{strength.title}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function UploadResume() {
  return (
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
          <p className="text-xs mt-2 leading-5 text-slate-400">
            PDF File Up To 10MB
          </p>
        </div>
        <ul
          role="list"
          className="divide-y mt-3 divide-white/10 rounded-md border border-white/20"
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
  );
}

function OptionalJobDescription() {
  return (
    <Container>
      <div>
        <label
          htmlFor="comment"
          className="block text-xs/6 font-medium leading-6 text-zinc-400"
        >
          Optional: Write in your Job Description.
        </label>
        <div className="mt-2">
          <Textarea id="comment" name="comment" rows={4} defaultValue={""} />
        </div>
      </div>
    </Container>
  );
}

export default function Home() {
  return (
    <>
      <UploadResume />
      <OptionalJobDescription />
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
                <Suggestions />
                <Strengths />
              </div>
            </div>

            <div className="shrink-0 border-t border-gray-200 px-4 py-6 sm:px-6 lg:w-96 lg:border-l lg:border-t-0 lg:pr-8 xl:pr-6">
              <ResumeBreakdown />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
