"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { LoadingOverlay } from "@/components/loading-overlay"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, User } from "lucide-react"
import Link from "next/link"
import { newsArticles } from "@/lib/news-data"

// Update the component to use translations properly
export default function NewsPage() {
  const { t, language } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [filteredArticles, setFilteredArticles] = useState(newsArticles)

  // Get unique categories
  const categories = Array.from(new Set(newsArticles.map((article) => article.category)))

  // Filter articles based on search term and category
  useEffect(() => {
    let filtered = newsArticles

    if (searchTerm) {
      filtered = filtered.filter(
        (article) =>
          article.title[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.excerpt[language].toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedCategory) {
      filtered = filtered.filter((article) => article.category === selectedCategory)
    }

    setFilteredArticles(filtered)
  }, [searchTerm, selectedCategory, language])

  // Format date based on language
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }

    switch (language) {
      case "ru":
        return date.toLocaleDateString("ru-RU", options)
      case "kaa":
        return date.toLocaleDateString("uz-UZ", options) // Using Uzbek as a fallback
      default:
        return date.toLocaleDateString("uz-UZ", options)
    }
  }

  // Get category name based on language
  const getCategoryName = (category: string) => {
    return t(`news.categories.${category}`) || category
  }

  return (
    <div className="flex flex-col min-h-screen">
      <LoadingOverlay />
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#1E3A5F] to-[#34495E]">
          <div className="absolute inset-0 w-full h-full">
            <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <motion.h1
                className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {t("news.title")}
              </motion.h1>

              <motion.p
                className="text-lg text-white/90 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t("news.description")}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-auto flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder={t("news.search")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                >
                  {t("news.allCategories")}
                </Button>

                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {getCategoryName(category)}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">{t("news.noResults")}</h3>
                <p className="text-muted-foreground">{t("news.tryAgain")}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden h-full flex flex-col">
                      <div className="h-48 bg-muted">
                        <img
                          src={article.image || "/placeholder.svg"}
                          alt={article.title[language]}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {getCategoryName(article.category)}
                          </Badge>
                          <div className="text-xs text-muted-foreground flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {formatDate(article.date)}
                          </div>
                        </div>
                        <CardTitle className="line-clamp-2">{article.title[language]}</CardTitle>
                        <CardDescription className="line-clamp-3">{article.excerpt[language]}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <User className="h-3 w-3 mr-1" />
                          {article.author}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="outline" className="w-full">
                          <Link href={`/news/${article.id}`}>{t("news.readMore")}</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

