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
