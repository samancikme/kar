import type React from "react"
import "./globals.css"
import { Inter, Poppins } from "next/font/google"
import { LanguageProvider } from "@/contexts/language-context"
import { PageTransition } from "@/components/page-transition"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata = {
  title: "Karpage - Kreativ dizayn va raqamli ko'nikmalar",
  description: "Kreativ dizayn va raqamli ko'nikmalar uchun zamonaviy ta'lim platformasi",
  generator: "v0.dev",
}

// Update the layout to use the correct language
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <LanguageProvider>
          <PageTransition>{children}</PageTransition>
        </LanguageProvider>
      </body>
    </html>
  )
}



import './globals.css'