"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { HeroAnchors, Anchor } from "@/components/ui/hero-anchors"

// ==========================================
// CONFIGURATION DU CARROUSEL - MODIFIABLE
// ==========================================
const CAROUSEL_CONFIG = {
  autoPlayInterval: 6000, // Temps entre chaque slide en ms (6 secondes)
  transitionDuration: 0.8, // Durée de transition en secondes
}

// ==========================================
// SLIDES DU CARROUSEL
// Pour ajouter une image: placez-la dans /public/images/hero/
// puis ajoutez une entrée ici
// ==========================================
const slides = [
  {
    id: 1,
    image: "/images/hero/oracle-database.webp",
    title: "Oracle Database",
    subtitle: "Administration et optimisation de vos bases de données Oracle par des ingénieurs avec plus de 20 ans d'expérience",
  },
  {
    id: 2,
    image: "/images/hero/cloud-oci.webp",
    title: "Cloud & OCI",
    subtitle: "Migration et déploiement sur Oracle Cloud Infrastructure - Modernisez votre infrastructure IT",
  },
  {
    id: 3,
    image: "/images/hero/linux-unix.webp",
    title: "Systèmes Linux & Unix",
    subtitle: "Administration systèmes d'exploitation pour vos environnements critiques de production",
  },
  {
    id: 4,
    image: "/images/hero/security.webp",
    title: "Sécurité & Audit",
    subtitle: "Protection des données et sécurisation de vos infrastructures Oracle et systèmes",
  },
  {
    id: 5,
    image: "/images/hero/high-availability.webp",
    title: "Haute Disponibilité",
    subtitle: "RAC, Data Guard, GoldenGate - Garantissez la continuité de vos services 24/7",
  },
  {
    id: 6,
    image: "/images/hero/support-mco.webp",
    title: "Support & MCO",
    subtitle: "Maintien en conditions opérationnelles et support réactif pour vos environnements critiques",
  },
  {
    id: 7,
    image: "/images/hero/formation.webp",
    title: "Formation & Transfert",
    subtitle: "Formations Oracle Database, Linux, administration systèmes - Développez les compétences de vos équipes",
  },
  {
    id: 8,
    image: "/images/hero/formation.webp",
    title: "OPTIMISER",
    subtitle: "Maximiser les performances et l'efficacité de vos bases de données et de vos systèmes",
  },
  {
    id: 9,
    image: "/images/hero/cloud-oci.webp",
    title: "MIGRER",
    subtitle: "Transférer vos infrastructures, bases de données et applications vers de nouveaux environnements",
  },
  {
    id: 10,
    image: "/images/hero/formation.webp",
    title: "DIGITALISER",
    subtitle: "Transformer vos processus traditionnels en solutions numériques modernes et intuitives",
  },
  {
    id: 11,
    image: "/images/hero/formation.webp",
    title: "NOS PARTENAIRES",
    subtitle: "Banques, Télécoms, Institutions publiques & privées, Entreprises technologiques et financières",
  },
  {
    id: 12,
    image: "/images/oscar/oscar-dashboard.png",
    title: "OSCAR",
    subtitle: "Plateforme d'observabilité, supervision et automatisation IT augmentée par l'IA",
  },
  {
    id: 13,
    image: "/images/smart-transfert/smart-transfert-dashboard.png",
    title: "Smart Transfert",
    subtitle: "Plateforme de centralisation pour agences de transfert d'argent",
  },
]

const homeAnchors: Anchor[] = [
  { id: "positionnement", title: "Notre Approche" },
  { id: "expertises", title: "Expertises" },
  { id: "oracle", title: "Oracle & Infra" },
  { id: "solutions", title: "Solutions" },
  { id: "pourquoi-nous", title: "Pourquoi SMART2D" },
]

export function HeroSection() {
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[60vh]">
          {/* Text Content */}
          <div className="flex flex-col">
            <HeroAnchors anchors={homeAnchors} />
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Tagline */}
                <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-full mb-6 border border-white/20">
                  <span className="w-2 h-2 bg-[#EE3329] rounded-full animate-pulse shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-white/90 text-center">
                    Conseil IT • Oracle • Infrastructures critiques
                  </span>
                </div>

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
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-8 sm:py-4 bg-[#EE3329] text-white font-semibold rounded-lg hover:bg-[#d62d24] transition-all shadow-lg shadow-[#EE3329]/30 group text-sm sm:text-base text-center"
              >
                <span className="whitespace-normal">Demander un diagnostic gratuit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
              <Link
                href="/oracle-infrastructure"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20 text-sm sm:text-base text-center"
              >
                <span className="whitespace-normal">Découvrir nos expertises</span>
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
                  aria-label="Slide précédent"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Slide suivant"
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
