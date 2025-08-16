import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Resume Roaster - Get Your Resume Roasted with Humor",
  description: "Upload your resume and let our AI serve up some playful critiques tailored to your career aspirations.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
html {
  font-family: ${openSans.style.fontFamily};
  --font-work-sans: ${workSans.variable};
  --font-open-sans: ${openSans.variable};
}
        `}</style>
      </head>
      <body className={`${workSans.variable} ${openSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
