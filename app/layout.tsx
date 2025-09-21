import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Midnight in PJs - The Christmas Party You Can't Miss",
  description:
    "Join the most magical Christmas event for Nigerian university students. Pajamas, BBQ, Movies, Magic & More!",
  generator: "v0.app",
  keywords: "Christmas party, university students, Nigeria, pajamas, BBQ, movies, fireworks, lanterns",
  openGraph: {
    title: "Midnight in PJs - The Christmas Party You Can't Miss",
    description:
      "Pajamas • BBQ • Movies • Magic - We believe Christmas shouldn't be Detty December — but Joy, Love & Light.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
