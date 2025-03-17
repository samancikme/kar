"use client"

import { useState } from "react"
import { useLanguage, type Language, languageNames } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown, Loader2, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface LanguageSwitcherProps {
  variant?: "default" | "news"
}

export function LanguageSwitcher({ variant = "default" }: LanguageSwitcherProps) {
  const { language, setLanguage, isLanguageLoading } = useLanguage()
  const [open, setOpen] = useState(false)

  const handleSelectLanguage = (lang: Language) => {
    setLanguage(lang)
    setOpen(false)
  }

  const isNews = variant === "news"

  // Get flag emoji for each language
  const getLanguageFlag = (lang: Language) => {
    switch (lang) {
      case "uz":
        return "🇺🇿"
      case "ru":
        return "🇷🇺"
      case "kaa":
        return "🇺🇿" // Using Uzbekistan flag for Karakalpak as it's a regional language
      default:
        return "🌐"
    }
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant={isNews ? "default" : "outline"}
          size="sm"
          className={cn(
            "h-9 gap-1 px-3 rounded-full relative",
            isNews && "bg-[#1E3A5F] text-white border-[#3D8EB9] hover:bg-[#2D6187] hover:text-white",
          )}
          disabled={isLanguageLoading}
        >
          {isLanguageLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <Globe className="h-4 w-4 mr-1" />
              {/* <span className="mr-1">{getLanguageFlag(language)}</span> */}
              {languageNames[language]}
              <ChevronDown className="h-4 w-4 ml-1" />
            </>
          )}

          {/* Animated dot indicator for loading */}
          {isLanguageLoading && (
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[150px]">
        {Object.entries(languageNames).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleSelectLanguage(code as Language)}
            className="flex items-center gap-2 cursor-pointer py-2"
          >
            {/* <span className="text-base mr-1">
              {getLanguageFlag(code as Language)}
            </span> */}
            {name}
            {language === code && <Check className="h-4 w-4 ml-auto" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

