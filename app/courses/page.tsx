"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/contexts/language-context";

// Course data
import { courses } from "@/lib/course-data";

// Update the component to use translations properly
export default function CoursesPage() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("photoshop");
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "photoshop",
    message: "",
  });

  const handleRegistration = (courseId: string) => {
    setSelectedCourse(courseId);
    setFormData((prev) => ({ ...prev, course: courseId }));
    setIsRegistrationOpen(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Update the form submission handler to properly log form data as an object
  const handleSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Courses page registration form data:", formData);
    // Here you would normally send the data to your backend
    setIsRegistrationOpen(false);
    // Reset form
    setFormData({
      name: "",
      phone: "",
      course: selectedCourse,
      message: "",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#1E3A5F] to-[#34495E]">
          <div className="absolute inset-0 w-full h-full">
            <svg
              className="w-full h-full opacity-10"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center mb-4 text-white/80">
                <Link
                  href="/"
                  className="flex items-center hover:text-white transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  <span>{t("common.home")}</span>
                </Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <span>{t("common.courses")}</span>
              </div>

              <motion.h1
                className="font-heading text-3xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {t("courses.title")}
              </motion.h1>

              <motion.p
                className="text-lg text-white/90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t("courses.description")}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-60`}
                    ></div>
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-2xl">
                      {course.icon}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-heading font-bold text-lg mb-2 text-[#1E3A5F]">
                      {course.title[language]}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {course.description[language]}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="text-sm">
                        <span className="text-gray-500">
                          {t("home.courses.duration")}:
                        </span>
                        <span className="font-medium ml-1">
                          {course.duration}
                        </span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-500">
                          {t("home.courses.price")}:
                        </span>
                        <span className="font-medium ml-1">{course.price}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="text-[#1E3A5F] border-[#1E3A5F]"
                      >
                        <Link href={`/courses/${course.id}`}>
                          {t("common.details")}
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleRegistration(course.id)}
                        className={`bg-gradient-to-r ${course.color} hover:opacity-90 text-white`}
                      >
                        {t("common.register")}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-[#1E3A5F] text-center">
              {t("courses.faq.title")}
            </h2>

            <div className="max-w-3xl mx-auto">
              {Array.isArray(t("courses.faq.items"))
                ? t("courses.faq.items").map((faq: any, index: number) => (
                    <div
                      key={index}
                      className="mb-4 border rounded-lg overflow-hidden"
                    >
                      <details className="group">
                        <summary className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100">
                          <h3 className="font-medium text-lg">
                            {faq.question}
                          </h3>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 transition-transform group-open:rotate-180"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </summary>
                        <div className="p-4 border-t">
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      </details>
                    </div>
                  ))
                : // Fallback for when t() doesn't return an array
                  [
                    {
                      question: t("courses.faq.items.0.question"),
                      answer: t("courses.faq.items.0.answer"),
                    },
                    {
                      question: t("courses.faq.items.1.question"),
                      answer: t("courses.faq.items.1.answer"),
                    },
                    {
                      question: t("courses.faq.items.2.question"),
                      answer: t("courses.faq.items.2.answer"),
                    },
                    {
                      question: t("courses.faq.items.3.question"),
                      answer: t("courses.faq.items.3.answer"),
                    },
                    {
                      question: t("courses.faq.items.4.question"),
                      answer: t("courses.faq.items.4.answer"),
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="mb-4 border rounded-lg overflow-hidden"
                    >
                      <details className="group">
                        <summary className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100">
                          <h3 className="font-medium text-lg">
                            {faq.question}
                          </h3>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 transition-transform group-open:rotate-180"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </summary>
                        <div className="p-4 border-t">
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      </details>
                    </div>
                  ))}
            </div>
          </div>
        </section>

        {/* Registration Dialog */}
        <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{t("register.title")}</DialogTitle>
              <DialogDescription>{t("register.form.title")}</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmitRegistration}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t("register.form.name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t("register.form.name")}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    {t("register.form.phone")}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+998 __ ___ __ __"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="course" className="text-sm font-medium">
                    {t("register.form.course")}
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={selectedCourse}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    onChange={(e) => {
                      setSelectedCourse(e.target.value);
                      setFormData((prev) => ({
                        ...prev,
                        course: e.target.value,
                      }));
                    }}
                  >
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.title[language]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {t("register.form.additionalInfo")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t("register.form.additionalInfo")}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-[#1E3A5F] to-[#2D6187] hover:opacity-90 text-white"
                >
                  {t("common.send")}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
    </div>
  );
}
