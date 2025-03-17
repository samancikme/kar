"use client"

import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { courses } from "@/lib/course-data"

export function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1E3A5F] to-[#2D6187] flex items-center justify-center text-white font-bold text-xl">
                K
              </div>
              <span className="font-heading font-bold text-xl">Karpage</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 15L15 9M15 15L9 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.courses")}</h3>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.id}>
                  <Link href={`/courses/${course.id}`} className="text-gray-400 hover:text-white transition-colors">
                    {course.title[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.usefulLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  {t("common.home")}
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-white transition-colors">
                  {t("common.courses")}
                </Link>
              </li>
              <li>
                <Link href="/#benefits" className="text-gray-400 hover:text-white transition-colors">
                  {t("common.benefits")}
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">
                  {t("common.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Karpage. {t("common.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}

