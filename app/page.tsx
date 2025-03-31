"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Phone, MapPin } from "lucide-react";
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
import { LoadingOverlay } from "@/components/loading-overlay";

// Course data
import { courses } from "@/lib/course-data";

export default function Home() {
  const particlesRef = useRef<HTMLDivElement>(null);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("photoshop");
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "photoshop",
    message: "",
  });

  useEffect(() => {
    // Simple particle animation for CTA section
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx || !particlesRef.current) return;

    particlesRef.current.appendChild(canvas);

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
    }[] = [];

    const resizeCanvas = () => {
      if (!particlesRef.current) return;
      canvas.width = particlesRef.current.offsetWidth;
      canvas.height = particlesRef.current.offsetHeight;

      // Create particles
      particles.length = 0;
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 5 + 1,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
        });
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.fillStyle = `rgba(0, 240, 255, ${Math.random() * 0.5 + 0.1})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (particlesRef.current && particlesRef.current.contains(canvas)) {
        particlesRef.current.removeChild(canvas);
      }
    };
  }, []);

  // Get testimonials from translations
  const testimonials = Array.isArray(t("home.testimonials.items"))
    ? t("home.testimonials.items")
    : [
        {
          img : "./public/testiminal1.jpg",
          name: "Aziza Karimova",
          role: "Grafik dizayner",
          text: "Karpage'dagi Photoshop kursi menga professional darajada ishlashni o'rgatdi. Endi mustaqil loyihalar ustida ishlay olaman.",
        },
        {
          img : "./public/testiminal1.jpg",
          name: "Bobur Aliyev",
          role: "Muhandis-loyihalovchi",
          text: "AutoCAD kursidan so'ng ishga joylashishim oson bo'ldi. O'qituvchilar juda professional va bilimli.",
        },
        {
          img : "../public/testiminal1.jpg",
          name: "Dilnoza Rahimova",
          role: "3D dizayner",
          text: "3ds Max kursi orqali 3D modellashtirish sohasida o'z biznesimni boshladim. Karpage'ga katta rahmat!",
        },
      ];

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

  const handleSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration form data:", formData);
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

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contactData = {
      name: (document.getElementById("contact-name") as HTMLInputElement).value,
      phone: (document.getElementById("contact-phone") as HTMLInputElement)
        .value,
      message: (
        document.getElementById("contact-message") as HTMLTextAreaElement
      ).value,
    };
    console.log("Contact form data:", contactData);
    // Reset form
    (document.getElementById("contact-name") as HTMLInputElement).value = "";
    (document.getElementById("contact-phone") as HTMLInputElement).value = "";
    (document.getElementById("contact-message") as HTMLTextAreaElement).value =
      "";
  };

  return (
    <div className="flex flex-col min-h-screen">
      <LoadingOverlay />
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#1E3A5F] to-[#34495E]">
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

          {/* Floating Icons */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  x: `${Math.random() * 80 + 10}%`,
                  y: `${Math.random() * 80 + 10}%`,
                  opacity: 0.7,
                }}
                animate={{
                  y: [
                    `${Math.random() * 80 + 10}%`,
                    `${Math.random() * 80 + 10}%`,
                  ],
                  rotate: [0, 360],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: 15 + i * 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shadow-lg`}
                >
                  <div className={`text-3xl md:text-4xl`}>
                    {i === 1 ? "🎨" : i === 2 ? "🖌️" : i === 3 ? "📐" : "🏗"}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {t("home.hero.title")}
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-white/90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t("home.hero.description")}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button
                  onClick={() => setIsRegistrationOpen(true)}
                  size="lg"
                  className="bg-gradient-to-r from-[#2D6187] to-[#3D8EB9] hover:opacity-90 text-white font-medium px-8 py-6 h-auto text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t("home.hero.registerButton")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-8 py-6 h-auto text-lg"
                >
                  <Link href="/courses">
                    {t("home.hero.viewCoursesButton")}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-[#1E3A5F]">
                {t("home.benefits.title")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("home.benefits.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Array.isArray(t("home.benefits.items"))
                ? t("home.benefits.items").map(
                    (benefit: any, index: number) => (
                      <motion.div
                        key={index}
                        className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-4xl mb-4">✅</div>
                        <h3 className="text-xl font-bold mb-2 text-[#1E3A5F]">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </motion.div>
                    )
                  )
                : // Fallback for when t() doesn't return an array
                  [0, 1, 2, 3].map((index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-4xl mb-4">✅</div>
                      <h3 className="text-xl font-bold mb-2 text-[#1E3A5F]">
                        {t(`home.benefits.items.${index}.title`)}
                      </h3>
                      <p className="text-gray-600">
                        {t(`home.benefits.items.${index}.description`)}
                      </p>
                    </motion.div>
                  ))}
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-[#1E3A5F]">
                {t("home.courses.title")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("home.courses.description")}
              </p>
            </div>

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

            <div className="text-center mt-10">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#1E3A5F] to-[#2D6187] hover:opacity-90 text-white px-8"
              >
                <Link href="/courses">
                  {t("home.courses.viewAllButton")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-[#1E3A5F]">
                {t("home.testimonials.title")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("home.testimonials.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Array.isArray(testimonials) &&
                testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-4">
                      <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-bold text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 bg-[#1E3A5F] overflow-hidden">
          <div
            ref={particlesRef}
            className="absolute inset-0 w-full h-full"
          ></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {t("home.cta.title")}
              </motion.h2>

              <motion.p
                className="text-white/80 mb-8 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {t("home.cta.description")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button
                  onClick={() => setIsRegistrationOpen(true)}
                  size="lg"
                  className="bg-gradient-to-r from-[#2D6187] to-[#3D8EB9] hover:opacity-90 text-white font-medium px-8 py-6 h-auto text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t("common.register")}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.span>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#1E3A5F]">
                  {t("home.contact.title")}
                </h2>
                <p className="text-gray-600 mb-8">
                  {t("home.contact.description")}
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-[#2D6187] mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium text-lg">
                        {t("home.contact.phone")}
                      </h3>
                      {Array.isArray(t("home.contact.phoneNumbers")) ? (
                        t("home.contact.phoneNumbers").map(
                          (phone: string, index: number) => (
                            <p key={index} className="text-gray-600">
                              {phone}
                            </p>
                          )
                        )
                      ) : (
                        <>
                          <p className="text-gray-600">+998 93 173 84 27</p>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#2D6187] mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium text-lg">
                        {t("home.contact.address")}
                      </h3>
                      <p className="text-gray-600">
                        {t("home.contact.addressText") ||
                          "Nukus tumani , Almazar ko'chasi ,8"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="font-heading text-xl font-bold mb-6 text-[#1E3A5F]">
                    {t("home.contact.form.message")}
                  </h3>

                  <form className="space-y-4" onSubmit={handleContactSubmit}>
                    <div className="grid gap-2">
                      <label
                        htmlFor="contact-name"
                        className="text-sm font-medium"
                      >
                        {t("home.contact.form.name")}
                      </label>
                      <Input
                        id="contact-name"
                        placeholder={t("home.contact.form.name")}
                      />
                    </div>

                    <div className="grid gap-2">
                      <label
                        htmlFor="contact-phone"
                        className="text-sm font-medium"
                      >
                        {t("home.contact.form.phone")}
                      </label>
                      <Input
                        id="contact-phone"
                        placeholder="+998 __ ___ __ __"
                      />
                    </div>

                    <div className="grid gap-2">
                      <label
                        htmlFor="contact-message"
                        className="text-sm font-medium"
                      >
                        {t("home.contact.form.message")}
                      </label>
                      <Textarea
                        id="contact-message"
                        placeholder={t("home.contact.form.messagePlaceholder")}
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#1E3A5F] to-[#2D6187] hover:opacity-90 text-white"
                    >
                      {t("common.send")}
                    </Button>
                  </form>
                </div>
              </div>
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
