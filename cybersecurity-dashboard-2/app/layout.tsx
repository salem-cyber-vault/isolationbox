import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Salem Cyber Vault",
    template: "%s | Salem Cyber Vault"
  },
  description: "Advanced cybersecurity monitoring dashboard powered by serverless edge functions for ultra-fast global performance",
  keywords: ["cybersecurity", "dashboard", "threat-intelligence", "security-monitoring", "edge-functions"],
  authors: [{ name: "Salem Cyber Vault Team" }],
  creator: "Salem Cyber Vault Team",
  publisher: "Salem Cyber Vault",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://salemcybervault.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://salemcybervault.com",
    title: "Salem Cyber Vault - Advanced Cybersecurity Dashboard",
    description: "Ultra-fast cybersecurity monitoring with serverless edge functions",
    siteName: "Salem Cyber Vault",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salem Cyber Vault",
    description: "Advanced cybersecurity monitoring dashboard",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
