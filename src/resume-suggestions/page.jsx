"use client"; // This is a client-side component because it uses browser navigation

import { useSearchParams } from "next/navigation"; // Use for accessing query parameters from URL
import { useEffect, useState } from "react";

const ResumeSuggestions = () => {
  const searchParams = useSearchParams(); // Use search params to fetch query string
  const result = searchParams.get("result"); // Get the result passed in the query string
  const [suggestions, setSuggestions] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (result) {
      try {
        const parsedResult = JSON.parse(decodeURIComponent(result)); // Parse the encoded result from URL
        setSuggestions(parsedResult.suggestions); // Set suggestions if available
      } catch (err) {
        setError("Invalid or corrupted data");
      }
    } else {
      setError("No suggestions available.");
    }
  }, [result]);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Resume Suggestions</h1>
      {error ? (
        <div className="p-4 bg-red-500 text-white rounded-md">{error}</div>
      ) : (
        <div className="p-4 bg-gray-800 text-white rounded-md">
          {suggestions ? (
            <p>{suggestions}</p>
          ) : (
            <p>No suggestions available. Please try again.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ResumeSuggestions;
