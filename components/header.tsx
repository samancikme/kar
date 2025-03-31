"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, isLanguageLoading } = useLanguage();
  const pathname = usePathname();

  const isNewsRoute = pathname.includes("/news");
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1E3A5F] to-[#2D6187] flex items-center justify-center text-white font-bold text-xl">
              K
            </div>
            <span className="font-heading font-bold text-xl text-primary">
              Karpage
            </span> */}
            <Image src={'/LOGO.png'} alt={'logo'} width={200} height={200} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "text-primary font-medium"
                  : "text-foreground/70 hover:text-primary font-medium transition-colors"
              }
            >
              {t("common.home")}
            </Link>
            <Link
              href="/courses"
              className={
                pathname.includes("/courses")
                  ? "text-primary font-medium"
                  : "text-foreground/70 hover:text-primary font-medium transition-colors"
              }
            >
              {t("common.courses")}
            </Link>
            <Link
              href="/news"
              className={
                pathname.includes("/news")
                  ? "text-primary font-medium"
                  : "text-foreground/70 hover:text-primary font-medium transition-colors"
              }
            >
              {t("common.news")}
            </Link>
            <Link
              href="#contact"
              className="text-foreground/70 hover:text-primary font-medium transition-colors"
            >
              {t("common.contact")}
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <LanguageSwitcher variant={isNewsRoute ? "news" : "default"} />
            <Button
              asChild
              className="bg-gradient-to-r from-[#1E3A5F] to-[#2D6187] hover:opacity-90 text-white"
            >
              <Link href="/register">{t("common.register")}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher variant={isNewsRoute ? "news" : "default"} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "text-primary" : "text-foreground/70"
                } hover:text-primary font-medium py-2 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("common.home")}
              </Link>
              <Link
                href="/courses"
                className={`${
                  pathname.includes("/courses")
                    ? "text-primary"
                    : "text-foreground/70"
                } hover:text-primary font-medium py-2 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("common.courses")}
              </Link>
              <Link
                href="/news"
                className={`${
                  pathname.includes("/news")
                    ? "text-primary"
                    : "text-foreground/70"
                } hover:text-primary font-medium py-2 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("common.news")}
              </Link>
              <Link
                href="#contact"
                className="text-foreground/70 hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("common.contact")}
              </Link>
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                asChild
                className="bg-gradient-to-r from-[#1E3A5F] to-[#2D6187] hover:opacity-90 text-white w-full"
              >
                <Link href="/register">{t("common.register")}</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
