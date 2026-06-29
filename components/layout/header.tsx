"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"

const navigation = [
  { key: "home", href: "/" },
  { key: "about", href: "/a-propos" },
  { key: "oracle", href: "/oracle-infrastructure" },
  { key: "services", href: "/services" },
  { key: "solutions", href: "/solutions" },
  { key: "support", href: "/support-formation" },
]

// Logo URLs
const LOGO_LIGHT = "/images/logo/smart2d-logo-light.png" // Logo avec SERVICES (pour fond sombre)
const LOGO_DARK = "/images/logo/smart2d-logo-dark.png" // Logo noir (pour fond clair)

export function Header() {
  const t = useTranslations("Navigation")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Pages where the hero background is dark (#17233A)
  const isDarkHero = pathname === "/" || pathname === "/oracle-infrastructure"

  // Use dark text (and dark logo/red button) if we scrolled OR if the hero background is light
  const useDarkText = isScrolled || !isDarkHero

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#F8F6F4] shadow-lg py-3 border-b border-[#E5E0DC]"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo - Change selon le scroll */}
          <Link href="/" className="flex-shrink-0 relative">
            {/* Logo pour fond sombre (avant scroll) */}
            <Image
              src={LOGO_LIGHT}
              alt="SMART2D Services"
              width={180}
              height={54}
              className={cn(
                "h-11 w-auto transition-opacity duration-300",
                useDarkText ? "opacity-0" : "opacity-100"
              )}
              priority
            />
            {/* Logo pour fond clair (après scroll) - positionné au même endroit */}
            <Image
              src={LOGO_DARK}
              alt="SMART2D"
              width={180}
              height={54}
              className={cn(
                "h-11 w-auto absolute top-0 left-0 transition-opacity duration-300",
                useDarkText ? "opacity-100" : "opacity-0"
              )}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium rounded-md transition-all group",
                  isActive 
                    ? (useDarkText ? "text-[#EE3329]" : "text-white")
                    : (useDarkText
                      ? "text-[#221E1F] hover:text-[#EE3329] hover:bg-[#221E1F]/5"
                      : "text-white/90 hover:text-white hover:bg-white/10")
                )}
              >
                {t(item.key)}
                {isActive && (
                  <span className={cn(
                    "absolute bottom-1 left-3 right-3 h-0.5 rounded-full",
                    useDarkText ? "bg-[#EE3329]" : "bg-white"
                  )} />
                )}
              </Link>
            )})}
          </div>

          {/* CTA Button & Language Switcher */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              className={cn(
                "p-2 rounded-full transition-all flex items-center gap-1.5",
                useDarkText
                  ? "text-[#221E1F] hover:bg-[#221E1F]/5"
                  : "text-white hover:bg-white/10"
              )}
              title="Switch language"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">FR</span>
            </button>
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-lg transition-all",
                useDarkText
                  ? "bg-[#EE3329] text-white hover:bg-[#d62d24] shadow-lg shadow-[#EE3329]/25"
                  : "bg-white text-[#221E1F] hover:bg-white/90 shadow-lg"
              )}
            >
              {t('contact')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              useDarkText
                ? "text-[#221E1F] hover:bg-[#221E1F]/5"
                : "text-white hover:bg-white/10"
            )}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#221E1F] border-t border-white/10"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-lg transition-colors",
                    isActive
                      ? "text-white bg-[#EE3329]"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {item.name}
                </Link>
              )})}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 bg-[#EE3329] text-white font-semibold rounded-lg hover:bg-[#d62d24] transition-colors"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
