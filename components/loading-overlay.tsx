"use client"

import { useLanguage } from "@/contexts/language-context"
import { Loader2 } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export function LoadingOverlay() {
  const { isLanguageLoading } = useLanguage()

  return (
    <AnimatePresence>
      {isLanguageLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="bg-card p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <Loader2 className="h-8 w-8 text-primary animate-spin mb-2" />
            <p className="text-card-foreground font-medium">Changing language...</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

