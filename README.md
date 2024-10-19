# ResuMax Application

## Overview

**ResuMax** is a tool designed to help users improve their resumes. Users can upload their resume (in PDF format), and the application analyzes it against an optional job description. The system provides insights into areas for improvement, suggests changes, and highlights strengths.

### Key Features:

- **Resume Upload:** Users can upload a PDF version of their resume.
- **Analysis Suggestions:** The app analyzes the resume for key metrics, match percentages, and suggests improvements.
- **Job Description Match:** Users can optionally input a job description to better tailor suggestions.
- **Analysis Results:** The app provides suggestions for resume enhancement, keyword matches, strengths, and overall score.

---

## How to Run This Application

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (v16 or higher recommended).
- **NPM or Yarn**: You’ll need npm (comes with Node.js) or Yarn to install dependencies.
- **OpenAI API Key**: You will need an API key from OpenAI to use the AI-driven suggestions feature.

### Steps to Run Locally

1. **Clone the Repository:**
```
git clone <repository-url>
cd resume-analyzer-app
```

2. **Install Dependencies:**
   If you're using npm:
```
npm install
```

   If you're using Yarn:
```
yarn install
```

3. **Set Up Environment Variables:**
   In the root directory, create a `.env.local` file with the following content:
```
   OPENAI_API_KEY=<your-openai-api-key>
NEXT_PUBLIC_API_URL=http://localhost:3000
```

5. **Run the Development Server:**
   If you're using npm:
```
npm run dev
```

   If you're using Yarn:
```
yarn dev
```

   This will start the application at `http://localhost:3000`.

---

## Project Structure

- **/components**: Contains reusable components like buttons, spinners, and UI elements.
- **/pages/api/resume.js**: Backend route to process the resume PDF, perform AI analysis, and return suggestions.
- **/pages/resume-analysis.js**: Frontend page that shows the results of the resume analysis.
- **/public**: Contains static assets like images.
- **/utils**: Utility functions for handling data, status, etc.

---

## How It Works

1. **Upload a Resume**: The user selects and uploads their resume in PDF format.
2. **Optional Job Description**: If provided, the resume is analyzed against the job description for a better match.
3. **AI-Driven Suggestions**: The app uses the OpenAI API to generate personalized suggestions based on the resume content.
4. **View Analysis**: The results page displays key metrics, such as keyword match percentages, strengths, and suggestions for improvement.

---

## Technologies Used

- **Next.js**: React-based framework for building the frontend and API routes.
- **Tailwind CSS**: For building the user interface with minimal effort.
- **OpenAI API**: For generating resume suggestions and performing analysis.
- **React Hooks**: Managing state and effects across components.
- **LocalStorage**: Storing analysis data locally for fast access after the resume is processed.

---

## Contributions

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](#).

---

## License

This project is licensed under the MIT License.

---

## Author

Built by **[Your Name]**. Feel free to reach out with any questions or feedback!
