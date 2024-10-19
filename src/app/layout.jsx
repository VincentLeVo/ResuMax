// src/app/layout.js

import { getEvents } from '@/app/data'
import { Navbar } from '@/components/Navbar'
import '@/styles/globals.css' // Import global styles
export const metadata = {
  title: 'ResuMax',
  description: 'Generated by create next app',
}

export default async function Layout({ children }) {
  let events = await getEvents()
  return (
    <html
      lang="en"
      className="h-full w-full text-zinc-950 antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950"
    >
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar>{children}</Navbar>
      </body>
    </html>
  )
}
