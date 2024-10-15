// src/app/api/openai/route.js

import OpenAI from "openai";
import { NextResponse } from "next/server";

// Initialize OpenAI with the API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // API key from .env.local
});

// Handle GET requests (for testing purposes)
export async function GET() {
  return NextResponse.json({ message: "OpenAI GET route works!" });
}

// Handle POST requests (to interact with OpenAI)
export async function POST(req) {
  try {
    const { prompt } = await req.json();
    if (!prompt) {
      return NextResponse.json(
        { error: "No prompt provided" },
        { status: 400 }
      );
    }

    // Call the OpenAI API with the new SDK format
    const completion = await openai.chat.completions.create({
      model: "gpt-4", // Replace this with any supported model
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt },
      ],
    });

    // Return the result from the API
    const result = completion.choices[0].message.content;
    return NextResponse.json({ result });
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
