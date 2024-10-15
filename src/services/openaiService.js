// src/app/api/openai/route.js

import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";

// Initialize OpenAI client with your API key
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Handle GET request (for testing purposes)
export async function GET() {
  return NextResponse.json({ message: "OpenAI GET route works!" });
}

// Handle POST request
export async function POST(req) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "No prompt provided" },
        { status: 400 }
      );
    }

    // Make a request to the OpenAI API
    const response = await openai.createChatCompletion({
      model: "gpt-4", // Or use 'gpt-3.5-turbo'
      messages: [{ role: "user", content: prompt }],
    });

    const result = response.data.choices[0].message.content;
    return NextResponse.json({ result });
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
