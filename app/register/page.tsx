"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, ArrowLeft, ChevronRight, Phone, MapPin, Instagram, Facebook } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/hooks/use-toast"
import { Header } from "@/components/header"

// Course data
import { courses } from "@/lib/course-data"

// Update the component to use translations properly
import { useLanguage } from "@/contexts/language-context"
import { Footer } from "@/components/footer"

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "photoshop",
    studyTime: "day",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Update the form submission handler to properly log form data as an object
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Log form data to console as an object
    console.log("Registration form data:", formData)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Ro'yxatdan o'tish muvaffaqiyatli",
        description: "Tez orada siz bilan bog'lanamiz!",
      })

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        course: "photoshop",
        studyTime: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
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
              <div className="flex items-center mb-4 text-white/80">
                <Link href="/" className="flex items-center hover:text-white transition-colors">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  <span>{t("common.home")}</span>
                </Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <span>{t("register.title")}</span>
              </div>

              <motion.h1
                className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {t("register.title")}
              </motion.h1>

              <motion.p
                className="text-lg text-white/90 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t("register.description")}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Registration Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Benefits */}
              <div>
                <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                  <h2 className="font-heading text-2xl font-bold mb-6 text-[#1E3A5F]">{t("register.whyUs.title")}</h2>

                  <ul className="space-y-4">
                    {Array.isArray(t("register.whyUs.items")) ? (
                      t("register.whyUs.items").map((item: any, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>
                            <span className="font-medium">{item.title}</span> – {item.description}
                          </span>
                        </li>
                      ))
                    ) : (
                      <>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>
                            <span className="font-medium">{t("register.whyUs.items.0.title")}</span> –{" "}
                            {t("register.whyUs.items.0.description")}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>
                            <span className="font-medium">{t("register.whyUs.items.1.title")}</span> –{" "}
                            {t("register.whyUs.items.1.description")}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>
                            <span className="font-medium">{t("register.whyUs.items.2.title")}</span> –{" "}
                            {t("register.whyUs.items.2.description")}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>
                            <span className="font-medium">{t("register.whyUs.items.3.title")}</span> –{" "}
                            {t("register.whyUs.items.3.description")}
                          </span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-md p-8">
                  <h2 className="font-heading text-2xl font-bold mb-6 text-[#1E3A5F]">{t("register.contactUs")}</h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-[#2D6187] mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-lg">{t("home.contact.phone")}</h3>
                        <p className="text-gray-600">+998 90 123 45 67</p>
                        <p className="text-gray-600">+998 90 987 65 43</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-[#2D6187] mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-lg">{t("home.contact.address")}</h3>
                        <p className="text-gray-600">{t("home.contact.addressText")}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg mb-3">{t("footer.usefulLinks")}</h3>
                      <div className="flex space-x-4">
                        <Link
                          href="#"
                          className="w-10 h-10 rounded-full bg-[#1E3A5F] flex items-center justify-center text-white hover:bg-[#1E3A5F]/90 transition-colors"
                        >
                          <Instagram className="h-5 w-5" />
                        </Link>
                        <Link
                          href="#"
                          className="w-10 h-10 rounded-full bg-[#0088cc] flex items-center justify-center text-white hover:bg-[#0088cc]/90 transition-colors"
                        >
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="currentColor"
                            />
                            <path
                              d="M9 15L15 9M15 15L9 9"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                        <Link
                          href="#"
                          className="w-10 h-10 rounded-full bg-[#3b5998] flex items-center justify-center text-white hover:bg-[#3b5998]/90 transition-colors"
                        >
                          <Facebook className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Registration Form */}
              <div>
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h2 className="font-heading text-2xl font-bold mb-6 text-[#1E3A5F]">{t("register.form.title")}</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        {t("register.form.name")} <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t("register.form.name")}
                        required
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        {t("register.form.phone")} <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="number"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+998 __ ___ __ __"
                        required
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        {t("register.form.email")}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t("register.form.email")}
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="course" className="text-sm font-medium">
                        {t("register.form.course")} <span className="text-red-500">*</span>
                      </Label>
                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        {courses.map((course) => (
                          <option key={course.id} value={course.id}>
                            {course.title[language]}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid gap-2">
                      <Label className="text-sm font-medium">
                        {t("register.form.studyTime")} <span className="text-red-500">*</span>
                      </Label>
                      <RadioGroup
                        defaultValue="day"
                        value={formData.studyTime}
                        onValueChange={(value) => handleRadioChange("studyTime", value)}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="day" id="day" />
                          <Label htmlFor="day">{t("register.form.studyTimeOptions.day")}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="evening" id="evening" />
                          <Label htmlFor="evening">{t("register.form.studyTimeOptions.evening")}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="online" id="online" />
                          <Label htmlFor="online">{t("register.form.studyTimeOptions.online")}</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        {t("register.form.additionalInfo")}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t("register.form.additionalInfo")}
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#1E3A5F] to-[#2D6187] hover:opacity-90 text-white py-6 h-auto"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          {t("common.loading")}
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          {t("register.form.submit")}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Cards */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-[#1E3A5F] text-center">
              {t("register.ourCourses")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course) => (
                <motion.div
                  key={course.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title[language]}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-60`}></div>
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-2xl">
                      {course.icon}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-heading font-bold text-lg mb-2 text-[#1E3A5F]">{course.title[language]}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description[language]}</p>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="text-sm">
                        <span className="text-gray-500">Davomiyligi:</span>
                        <span className="font-medium ml-1">{course.duration}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-500">Narxi:</span>
                        <span className="font-medium ml-1">{course.price}</span>
                      </div>
                    </div>

                    <Button asChild className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90 text-white`}>
                      <Link href={`/courses/${course.id}`}>{t("common.details")}</Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

