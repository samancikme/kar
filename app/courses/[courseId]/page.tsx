"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
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

export default function CoursePage() {
  const params = useParams();
  const courseId =
    typeof params.courseId === "string"
      ? params.courseId
      : Array.isArray(params.courseId)
      ? params.courseId[0]
      : "";
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: courseId,
    message: "",
  });

  // Find the course by ID
  const course = courses.find((c) => c.id === courseId);

  // If course not found, show 404
  if (!course) {
    // Instead of immediately calling notFound, we'll return a fallback UI
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="font-heading text-3xl font-bold mb-4 text-[#1E3A5F]">
              {t("common.courseNotFound") || "Course Not Found"}
            </h1>
            <p className="text-gray-600 mb-8">
              {t("common.courseNotFoundMessage") ||
                "The course you're looking for doesn't exist or has been removed."}
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-[#1E3A5F] to-[#2D6187] hover:opacity-90 text-white"
            >
              <Link href="/courses">
                {t("common.backToCourses") || "Back to Courses"}
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Update the handleSubmitRegistration function to properly log form data as an object
  const handleSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a structured object with the form data
    const formDataObject = {
      name: formData.name,
      phone: formData.phone,
      course: courseId,
      courseName: course?.title[language] || "",
      message: formData.message,
      submittedAt: new Date().toISOString(),
    };

    // Log the structured object to the console
    console.log("Course registration form data:", formDataObject);

    // Here you would normally send the data to your backend
    setIsRegistrationOpen(false);

    // Reset form
    setFormData({
      name: "",
      phone: "",
      course: courseId,
      message: "",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className={`relative py-16 md:py-24 bg-gradient-to-br ${course.color}`}
        >
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
                <Link
                  href="/courses"
                  className="hover:text-white transition-colors"
                >
                  {t("common.courses")}
                </Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <span>{course.title[language]}</span>
              </div>

              <motion.div
                className="flex flex-col md:flex-row items-center gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-40 h-40 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-8xl">
                    {course.icon}
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
                    {course.title[language]}
                  </h1>
                  <p className="text-xl text-white/90 mb-6">
                    {course.description[language]}
                  </p>
                  <Button
                    onClick={() => setIsRegistrationOpen(true)}
                    size="lg"
                    className="bg-white text-[#1E3A5F] hover:bg-white/90 px-8"
                  >
                    {t("common.register")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Course Image */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="aspect-video w-full">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title[language]}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="text-[#1E3A5F] text-sm font-medium mb-1">
                            ⏳ {t("home.courses.duration")}
                          </div>
                          <div className="font-bold">{course.duration}</div>
                        </div>
                        <div>
                          <div className="text-[#1E3A5F] text-sm font-medium mb-1">
                            📚 {t("course.lessons")}
                          </div>
                          <div className="font-bold">{course.lessons} ta</div>
                        </div>
                        <div>
                          <div className="text-[#1E3A5F] text-sm font-medium mb-1">
                            📜 {t("course.certificate")}
                          </div>
                          <div className="font-bold">{course.certificate}</div>
                        </div>
                        <div>
                          <div className="text-[#1E3A5F] text-sm font-medium mb-1">
                            💰 {t("home.courses.price")}
                          </div>
                          <div className="font-bold">{course.price}</div>
                        </div>
                      </div>

                      <Button
                        onClick={() => setIsRegistrationOpen(true)}
                        className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90 text-white`}
                      >
                        {t("common.register")}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-[#1E3A5F]">
                    {t("course.about")}
                  </h2>
                  <p className="text-lg text-gray-700 mb-8">
                    {course.intro[language]}
                  </p>

                  <h3 className="font-heading text-xl font-bold mb-4 text-[#1E3A5F]">
                    📌 {t("course.youWillLearn")}:
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {course.features[language].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center p-4 rounded-lg bg-gradient-to-r from-[#1E3A5F]/10 to-[#2D6187]/10">
                    <p className="font-medium text-[#1E3A5F]">
                      🔥 {course.cta[language]}
                    </p>
                  </div>
                </div>

                {/* Course Curriculum */}
                <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                  <h2 className="font-heading text-2xl font-bold mb-6 text-[#1E3A5F]">
                    {t("course.curriculum")}
                  </h2>

                  <div className="grid gap-4">
                    {Array.from({ length: 4 }).map((_, moduleIndex) => (
                      <div
                        key={moduleIndex}
                        className="border rounded-lg overflow-hidden"
                      >
                        <div className="bg-gray-50 p-4 flex justify-between items-center">
                          <h4 className="font-medium text-lg">
                            {moduleIndex + 1}-{t("course.module")}:{" "}
                            {t(
                              `courses.curriculum.modules.${moduleIndex}.title`
                            )}
                          </h4>
                          <span className="text-sm text-gray-500">
                            {course.lessons / 4} {t("course.lessons")}
                          </span>
                        </div>
                        <div className="p-4">
                          <ul className="space-y-3">
                            {Array.from({ length: 3 }).map((_, lessonIndex) => (
                              <li
                                key={lessonIndex}
                                className="flex items-center"
                              >
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3 text-sm font-medium">
                                  {moduleIndex * 3 + lessonIndex + 1}
                                </div>
                                <span>
                                  {t(
                                    `courses.curriculum.modules.${moduleIndex}.lessons.${lessonIndex}`,
                                    {
                                      defaultValue:
                                        language === "uz"
                                          ? moduleIndex === 0 &&
                                            lessonIndex === 0
                                            ? "Dastur interfeysi va asosiy sozlamalar"
                                            : moduleIndex === 0 &&
                                              lessonIndex === 1
                                            ? "Asosiy vositalar va ularning vazifasi"
                                            : moduleIndex === 0 &&
                                              lessonIndex === 2
                                            ? "Fayl formatlari va saqlash usullari"
                                            : moduleIndex === 1 &&
                                              lessonIndex === 0
                                            ? "Qatlamlar bilan ishlash"
                                            : moduleIndex === 1 &&
                                              lessonIndex === 1
                                            ? "Ranglar va gradientlar"
                                            : moduleIndex === 1 &&
                                              lessonIndex === 2
                                            ? "Seleksiya va maskalash"
                                            : moduleIndex === 2 &&
                                              lessonIndex === 0
                                            ? "Banner va poster yaratish"
                                            : moduleIndex === 2 &&
                                              lessonIndex === 1
                                            ? "Logotip va brending elementlari"
                                            : moduleIndex === 2 &&
                                              lessonIndex === 2
                                            ? "Ijtimoiy tarmoqlar uchun dizayn"
                                            : moduleIndex === 3 &&
                                              lessonIndex === 0
                                            ? "Murakkab kompozitsiyalar"
                                            : moduleIndex === 3 &&
                                              lessonIndex === 1
                                            ? "Maxsus effektlar va filtrlar"
                                            : "Portfolio loyihasi va yakuniy ish"
                                          : language === "ru"
                                          ? moduleIndex === 0 &&
                                            lessonIndex === 0
                                            ? "Интерфейс программы и основные настройки"
                                            : moduleIndex === 0 &&
                                              lessonIndex === 1
                                            ? "Основные инструменты и их функции"
                                            : moduleIndex === 0 &&
                                              lessonIndex === 2
                                            ? "Форматы файлов и способы сохранения"
                                            : moduleIndex === 1 &&
                                              lessonIndex === 0
                                            ? "Работа со слоями"
                                            : moduleIndex === 1 &&
                                              lessonIndex === 1
                                            ? "Цвета и градиенты"
                                            : moduleIndex === 1 &&
                                              lessonIndex === 2
                                            ? "Выделение и маскирование"
                                            : moduleIndex === 2 &&
                                              lessonIndex === 0
                                            ? "Создание баннеров и постеров"
                                            : moduleIndex === 2 &&
                                              lessonIndex === 1
                                            ? "Логотипы и элементы брендинга"
                                            : moduleIndex === 2 &&
                                              lessonIndex === 2
                                            ? "Дизайн для социальных сетей"
                                            : moduleIndex === 3 &&
                                              lessonIndex === 0
                                            ? "Сложные композиции"
                                            : moduleIndex === 3 &&
                                              lessonIndex === 1
                                            ? "Специальные эффекты и фильтры"
                                            : "Проект портфолио и финальная работа"
                                          : moduleIndex === 0 &&
                                            lessonIndex === 0
                                          ? "Baǵdarlama interfeysi hám tiykarǵı sazlawlar"
                                          : moduleIndex === 0 &&
                                            lessonIndex === 1
                                          ? "Tiykarǵı qurallar hám olardıń waziypaları"
                                          : moduleIndex === 0 &&
                                            lessonIndex === 2
                                          ? "Fayl formatları hám saqllaw usılları"
                                          : moduleIndex === 1 &&
                                            lessonIndex === 0
                                          ? "Qatlamlar menen islew"
                                          : moduleIndex === 1 &&
                                            lessonIndex === 1
                                          ? "Reńler hám gradientler"
                                          : moduleIndex === 1 &&
                                            lessonIndex === 2
                                          ? "Ajıratıw hám maskalaw"
                                          : moduleIndex === 2 &&
                                            lessonIndex === 0
                                          ? "Banner hám poster jaratıw"
                                          : moduleIndex === 2 &&
                                            lessonIndex === 1
                                          ? "Logotip hám brending elementleri"
                                          : moduleIndex === 2 &&
                                            lessonIndex === 2
                                          ? "Sociallıq tarmaqlar ushın dizayn"
                                          : moduleIndex === 3 &&
                                            lessonIndex === 0
                                          ? "Quramalı kompoziciyalar"
                                          : moduleIndex === 3 &&
                                            lessonIndex === 1
                                          ? "Arnawlı effektler hám filtrler"
                                          : "Portfolio joybarı hám juwmaqlawshı jumıs",
                                    }
                                  )}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Registration CTA */}
                <div
                  className={`bg-gradient-to-r ${course.color} rounded-xl p-8 text-white text-center`}
                >
                  <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                    {t("course.registerNow")}
                  </h3>
                  <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    {t("course.registerCTA")}
                  </p>
                  <Button
                    onClick={() => setIsRegistrationOpen(true)}
                    size="lg"
                    className="bg-white text-[#1E3A5F] hover:bg-white/90 px-8"
                  >
                    {t("common.register")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Courses */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-[#1E3A5F]">
              {t("course.otherCourses")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courses
                .filter((c) => c.id !== courseId)
                .slice(0, 3)
                .map((relatedCourse) => (
                  <motion.div
                    key={relatedCourse.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-48">
                      <Image
                        src={relatedCourse.image || "/placeholder.svg"}
                        alt={relatedCourse.title[language]}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${relatedCourse.color} opacity-60`}
                      ></div>
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-2xl">
                        {relatedCourse.icon}
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="font-heading font-bold text-lg mb-2 text-[#1E3A5F]">
                        {relatedCourse.title[language]}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedCourse.description[language]}
                      </p>

                      <div className="flex justify-between items-center">
                        <div className="text-sm">
                          <span className="text-gray-500">
                            {t("home.courses.duration")}:
                          </span>
                          <span className="font-medium ml-1">
                            {relatedCourse.duration}
                          </span>
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="text-[#1E3A5F] border-[#1E3A5F]"
                        >
                          <Link href={`/courses/${relatedCourse.id}`}>
                            {t("common.details")}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
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
                  <label htmlFor="course-name" className="text-sm font-medium">
                    {t("register.form.course")}
                  </label>
                  <Input
                    id="course-name"
                    value={course.title[language]}
                    disabled
                  />
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
