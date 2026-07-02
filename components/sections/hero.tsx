"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { HeroAnchors, Anchor } from "@/components/ui/hero-anchors"
import { useLocale, useTranslations } from "next-intl"
import { getLocalizedHref } from "@/lib/navigation"

// ==========================================
// CONFIGURATION DU CARROUSEL - MODIFIABLE
// ==========================================
const CAROUSEL_CONFIG = {
  autoPlayInterval: 6000, // Temps entre chaque slide en ms (6 secondes)
  transitionDuration: 0.8, // Durée de transition en secondes
}

export function HeroSection() {
  const t = useTranslations("Hero");
  const locale = useLocale()
  const localizedHref = (href: string) => getLocalizedHref(locale, href)

  const homeAnchors: Anchor[] = [
    { id: "positionnement", title: t("anchor_approach") },
    { id: "expertises", title: t("anchor_expertises") },
    { id: "oracle", title: t("anchor_oracle") },
    { id: "solutions", title: t("anchor_solutions") },
    { id: "pourquoi-nous", title: t("anchor_why") },
  ]

  const slides = [
    {
      id: 1,
      image: "/images/hero/oracle-database-new.webp",
      title: t("oracle_title"), subtitle: t("oracle_sub"),
    },
    {
      id: 2,
      image: "/images/hero/cloud-oci-new.webp",
      title: t("cloud_title"), subtitle: t("cloud_sub"),
    },
    {
      id: 3,
      image: "/images/hero/linux-unix-new.webp",
      title: t("linux_title"),
      subtitle: t("linux_sub"),
    },
    {
      id: 4,
      image: "/images/hero/security-new.webp",
      title: t("security_title"),
      subtitle: t("security_sub"),
    },
    {
      id: 5,
      image: "/images/hero/oracle-database-new.webp",
      title: t("ha_title"),
      subtitle: t("ha_sub"),
    },
    {
      id: 6,
      image: "/images/hero/support-mco.webp",
      title: t("support_title"), subtitle: t("support_sub"),
    },
    {
      id: 7,
      image: "/images/hero/training-new.webp",
      title: t("formation_title"), subtitle: t("formation_sub"),
    },
    {
      id: 8,
      image: "/images/hero/linux-unix-new.webp",
      title: t("opt_title"), subtitle: t("opt_sub"),
    },
    {
      id: 9,
      image: "/images/hero/cloud-oci-new.webp",
      title: t("mig_title"), subtitle: t("mig_sub"),
    },
    {
      id: 10,
      image: "/images/hero/oracle-database-new.webp",
      title: t("dig_title"), subtitle: t("dig_sub"),
    },
    {
      id: 11,
      image: "/images/hero/formation-new.webp",
      title: t("part_title"), subtitle: t("part_sub"),
    },
    {
      id: 12,
      image: "/images/oscar/oscar-dashboard.png",
      title: t("oscar_title"), subtitle: t("oscar_sub"),
    },
    {
      id: 13,
      image: "/images/smart-transfert/smart-transfert-dashboard.png",
      title: t("smart_title"), subtitle: t("smart_sub"),
    },
    {
      id: 14,
      image: "/images/smart-access/smartaccess-dashboard.png",
      title: t("access_title"), subtitle: t("access_sub"),
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [direction, setDirection] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Fonction pour réinitialiser le timer
  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setDirection(1)
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, CAROUSEL_CONFIG.autoPlayInterval)
    }
  }, [isPlaying])

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    resetTimer() // Reset le timer après changement manuel
  }, [resetTimer])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    resetTimer() // Reset le timer après changement manuel
  }, [resetTimer])

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
    resetTimer() // Reset le timer après changement manuel
  }, [currentSlide, resetTimer])

  // Effect pour gérer l'autoplay
  useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isPlaying, resetTimer])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  }

  return (
    <section className="relative min-h-screen bg-[#17233A]">
      {/* Carousel Background */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: CAROUSEL_CONFIG.transitionDuration },
            }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#17233A]/95 via-[#17233A]/80 to-[#17233A]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17233A] via-transparent to-[#17233A]/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="mb-4 lg:mb-8">
          <HeroAnchors anchors={homeAnchors} containerClassName="pt-2 pb-4" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[50vh]">
          {/* Text Content */}
          <div className="flex flex-col">
            {/* Tagline */}
            <div className="inline-flex max-w-max items-center justify-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-[#EE3329] rounded-full animate-pulse shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-white/90 text-center">
                {t("tagline")}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Main Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  <span className="text-balance">{slides[currentSlide].title}</span>
                </h1>

                {/* Subtitle */}
                <p className="mt-6 text-xl text-white/80 leading-relaxed max-w-xl">
                  {slides[currentSlide].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons - Fixes (en dehors du carrousel pour ne pas défiler) */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href={localizedHref("/contact#coordonnees")}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-8 sm:py-4 bg-[#EE3329] text-white font-semibold rounded-lg hover:bg-[#d62d24] transition-all shadow-lg shadow-[#EE3329]/30 group text-sm sm:text-base text-center"
              >
                <span className="whitespace-normal">{t("button_diagnostic")}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
              <Link
                href={localizedHref("/oracle-infrastructure")}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20 text-sm sm:text-base text-center"
              >
                <span className="whitespace-normal">{t("button_expertise")}</span>
              </Link>
            </div>

            {/* Carousel Controls */}
            <div className="mt-12 flex flex-wrap items-center gap-4">
              {/* Dots */}
              <div className="flex flex-wrap items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 ${
                      index === currentSlide
                        ? "w-8 h-2 bg-[#EE3329] rounded-full"
                        : "w-2 h-2 bg-white/40 hover:bg-white/60 rounded-full"
                    }`}
                    aria-label={`Aller au slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center gap-2 ml-0 sm:ml-4">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label={t("prev_label")}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label={isPlaying ? t("pause_label") : t("play_label")}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label={t("next_label")}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Slide counter */}
              <span className="text-white/50 text-sm ml-2">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>
          </div>

          {/* Right side - empty for image display */}
          <div className="hidden lg:block" />
        </div>
      </div>




    </section>
  )
}
