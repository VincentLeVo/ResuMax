// src/components/RootLayout.jsx
import localFont from "next/font/local";
import "@/styles/globals.css"; // Alias works fine here for styles

const geistSans = localFont({
  src: "../fonts/GeistVF.woff", // Relative path to fonts
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff", // Relative path to fonts
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
