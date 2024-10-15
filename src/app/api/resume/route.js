import OpenAI from "openai"; // Assuming you're using OpenAI for resume suggestions
import { NextResponse } from "next/server";
import pdfParse from "pdf-parse";

// Initialize OpenAI with the API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET() {
  return NextResponse.json({ message: "Resume API GET route works!" });
}

export async function POST(req) {
  try {
    const formData = await req.formData();
    const resumeFile = formData.get("resume"); // Get the uploaded file

    if (!resumeFile) {
      return new Response(JSON.stringify({ error: "No resume uploaded" }), {
        status: 400,
      });
    }

    // Convert the file into an ArrayBuffer and then a Buffer
    const arrayBuffer = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Parse the PDF resume using pdf-parse
    const parsedData = await pdfParse(buffer);
    const resumeText = parsedData.text; // Extracted text from the PDF

    // Log the extracted text for testing purposes
    console.log("Extracted Resume Text:", resumeText);

    return new Response(JSON.stringify({ resumeText }), { status: 200 });
  } catch (error) {
    console.error("Error processing resume:", error);
    return new Response(
      JSON.stringify({ error: "Error processing the resume" }),
      { status: 500 }
    );
  }
}
