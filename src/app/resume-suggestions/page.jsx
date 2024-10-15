"use client"; // This page is also client-side because we need to read query params

import { useSearchParams } from "next/navigation"; // For accessing query parameters from the URL
import { useEffect, useState } from "react";

export default function ResumeSuggestions() {
  const searchParams = useSearchParams();
  const suggestions = searchParams.get("suggestions"); // Get the 'suggestions' query param
  const [parsedSuggestions, setParsedSuggestions] = useState([]);

  useEffect(() => {
    if (suggestions) {
      setParsedSuggestions(JSON.parse(suggestions)); // Parse the suggestions passed as a query param
    }
  }, [suggestions]);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Resume Suggestions</h1>
      {parsedSuggestions.length > 0 ? (
        <ul className="list-disc pl-5 space-y-2">
          {parsedSuggestions.map((suggestion, index) => (
            <li key={index} className="text-lg text-gray-800">
              {suggestion}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg">No suggestions available. Please try again.</p>
      )}
    </div>
  );
}
