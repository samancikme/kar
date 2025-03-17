"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Import all language files
import uz from "@/locales/uz.json"
import ru from "@/locales/ru.json"
import kaa from "@/locales/kaa.json"

// Define available languages
export type Language = "uz" | "ru" | "kaa"

// Create a type for our translations
export type Translations = typeof uz

// Map of language codes to their full translations
const translations: Record<Language, Translations> = {
  uz,
  ru,
  kaa,
}

// Language names for display
export const languageNames: Record<Language, string> = {
  uz: "Uz",
  ru: "Ru",
  kaa: "Kr",
}

// Update the LanguageContextType to include loading state
type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string | Record<string, any>
  isLanguageLoading: boolean
}

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "uz",
  setLanguage: () => {},
  t: () => "",
  isLanguageLoading: false,
})

// Update the provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("uz")
  const [isLanguageLoading, setIsLanguageLoading] = useState(false)

  // Load saved language preference from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && translations[savedLanguage]) {
        setLanguage(savedLanguage)
      }
    }
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language)
    }
  }, [language])

  // Update the setLanguage function to include loading state
  const handleSetLanguage = (lang: Language) => {
    if (lang !== language) {
      setIsLanguageLoading(true)
      // Simulate a slight delay to show loading state
      setTimeout(() => {
        setLanguage(lang)
        setIsLanguageLoading(false)
      }, 300)
    }
  }

  // Translation function
  const t = (key: string) => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key not found: ${key}`)
        return key
      }
    }

    return value
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isLanguageLoading }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

