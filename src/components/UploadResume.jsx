"use client";
import { Container } from "@/components/Container";
import { PaperClipIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { OptionalJobDescription } from "./OptionalJobDescription";

const MAX_FILE_SIZE = 10485760; // 10MB in bytes

export function UploadResume() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!resumeFile) {
      return setError("Please upload a resume.");
    }

    try {
      const formData = new FormData();
      formData.append("resume", resumeFile);
      console.log("This is the form data resumeFile", resumeFile);
      if (jobDescription) formData.append("jobDescription", jobDescription);
      console.log("This is the form data from react", formData);
      const response = await fetch("/api/resume", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error processing the resume.");
      }

      const result = await response.json();
      router.push(
        `/resume-suggestions?result=${encodeURIComponent(
          JSON.stringify(result)
        )}`
      );
    } catch (err) {
      console.error(err);
      setError("An error occurred while submitting the form.");
    }
  }

  async function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) {
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError("File size is too large. Please upload a file up to 10MB.");
      return;
    }

    setResumeFile(file);
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
                  onChange={handleFileChange}
                  className="sr-only"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs mt-2 leading-5 text-slate-400">
              PDF File Up To 10MB
            </p>
          </div>
          {resumeFile && (
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
                      {resumeFile && resumeFile.name}
                    </span>
                    <span className="flex-shrink-0 text-gray-400">
                      {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB
                    </span>
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
          )}
        </div>
        <OptionalJobDescription
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
        />
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </Container>
  );
}
