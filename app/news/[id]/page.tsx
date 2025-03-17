"use client"

import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { LoadingOverlay } from "@/components/loading-overlay"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import { newsArticles } from "@/lib/news-data"

// Update the component to use translations properly
export default function NewsDetailPage() {
  const { id } = useParams()
  const { t, language } = useLanguage()

  // Find the article by ID
  const article = newsArticles.find((article) => article.id === id)

  // If article not found, show a custom "Not Found" UI instead of calling notFound()
  if (!article) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="font-heading text-3xl font-bold mb-4 text-[#1E3A5F]">
              {t("news.articleNotFound") || "Article Not Found"}
            </h1>
            <p className="text-gray-600 mb-8">
              {t("news.articleNotFoundMessage") || "The article you're looking for doesn't exist or has been removed."}
            </p>
            <Button asChild className="bg-gradient-to-r from-[#1E3A5F] to-[#2D6187] hover:opacity-90 text-white">
              <Link href="/news">{t("news.allNews")}</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

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

  // Get related articles (same category, excluding current)
  const relatedArticles = newsArticles.filter((a) => a.category === article.category && a.id !== article.id).slice(0, 3)

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
              <div className="flex items-center mb-6">
                <Button variant="ghost" size="sm" asChild className="text-white/80 hover:text-white hover:bg-white/10">
                  <Link href="/news">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {t("news.allNews")}
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-white/20 hover:bg-white/30 text-white">{getCategoryName(article.category)}</Badge>
                <div className="text-white/80 flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(article.date)}
                </div>
                <div className="text-white/80 flex items-center text-sm">
                  <User className="h-4 w-4 mr-1" />
                  {article.author}
                </div>
              </div>

              <motion.h1
                className="font-heading text-3xl md:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {article.title[language]}
              </motion.h1>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-card rounded-lg overflow-hidden shadow-md">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title[language]}
                    className="w-full h-64 md:h-96 object-cover"
                  />

                  <div className="p-6 md:p-8">
                    <div className="prose max-w-none">
                      {article.content[language].split("\n").map((paragraph, index) => (
                        <p key={index} className="mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-border">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">{t("news.share")}</span>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <Facebook className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <Twitter className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <Linkedin className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <Button variant="outline" asChild>
                          <Link href="/news">{t("news.allNews")}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-card rounded-lg shadow-md p-6">
                  <h3 className="font-heading text-xl font-bold mb-4">{t("news.relatedNews")}</h3>

                  <div className="space-y-4">
                    {relatedArticles.length > 0 ? (
                      relatedArticles.map((relatedArticle) => (
                        <Link key={relatedArticle.id} href={`/news/${relatedArticle.id}`} className="block group">
                          <div className="flex gap-3">
                            <div className="w-20 h-20 bg-muted rounded-md overflow-hidden flex-shrink-0">
                              <img
                                src={relatedArticle.image || "/placeholder.svg"}
                                alt={relatedArticle.title[language]}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                                {relatedArticle.title[language]}
                              </h4>
                              <div className="text-xs text-muted-foreground mt-1">
                                {formatDate(relatedArticle.date)}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <p className="text-muted-foreground text-sm">{t("news.noRelatedNews")}</p>
                    )}
                  </div>
                </div>

                <div className="bg-card rounded-lg shadow-md p-6 mt-6">
                  <h3 className="font-heading text-xl font-bold mb-4">{t("common.courses")}</h3>

                  <div className="space-y-2">
                    <Button asChild variant="outline" className="w-full justify-start">
                      <Link href="/courses/photoshop">Photoshop</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full justify-start">
                      <Link href="/courses/coreldraw">CorelDRAW</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full justify-start">
                      <Link href="/courses/autocad">AutoCAD</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full justify-start">
                      <Link href="/courses/3dsmax">3ds Max</Link>
                    </Button>
                  </div>

                  <Button
                    asChild
                    className="w-full mt-4 bg-gradient-to-r from-[#1E3A5F] to-[#2D6187] hover:opacity-90 text-white"
                  >
                    <Link href="/courses">{t("home.courses.viewAllButton")}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

