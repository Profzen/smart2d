"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations, useLocale } from "next-intl"
import { cn } from "@/lib/utils"
import { getLocalizedHref } from "@/lib/navigation"

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
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Pages where the hero background is dark (#17233A)
  const darkHeroPages = [
    `/${locale}`,
    `/${locale}/oracle-infrastructure`,
    `/${locale}/a-propos`,
    `/${locale}/services`,
    `/${locale}/solutions`,
    `/${locale}/support-formation`,
    `/${locale}/contact`,
  ]
  const isDarkHero = darkHeroPages.includes(pathname)

  // Use dark text (and dark logo/red button) if we scrolled OR if the hero background is light
  const useDarkText = isScrolled || !isDarkHero

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  useEffect(() => {
    const rawPosition = sessionStorage.getItem("smart2d-language-scroll-y")

    if (!rawPosition) {
      return
    }

    sessionStorage.removeItem("smart2d-language-scroll-y")
    const scrollY = Number(rawPosition)

    if (Number.isNaN(scrollY)) {
      return
    }

    const previousScrollBehavior = document.documentElement.style.scrollBehavior
    document.documentElement.style.scrollBehavior = "auto"
    setIsScrolled(scrollY > 20)

    requestAnimationFrame(() => {
      window.scrollTo(0, scrollY)
      setIsScrolled(scrollY > 20)
      window.dispatchEvent(new Event("scroll"))
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY)
        setIsScrolled(scrollY > 20)
        window.dispatchEvent(new Event("scroll"))
        document.documentElement.style.scrollBehavior = previousScrollBehavior
      })
    })
  }, [pathname])

  const handleLanguageSwitch = () => {
    const nextLocale = locale === "fr" ? "en" : "fr"
    // The pathname already starts with /fr or /en because next-intl middleware prefixes it.
    // Replace the current locale prefix with the next one.
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`)
    const nextUrl = `${newPath}${window.location.search}${window.location.hash}`

    sessionStorage.setItem("smart2d-language-scroll-y", String(window.scrollY))
    setIsScrolled(window.scrollY > 20)
    router.replace(nextUrl, { scroll: false })
  }

  const localizedHref = (href: string) => getLocalizedHref(locale, href)
  const contactHref = localizedHref("/contact")
  const isContactActive = pathname === contactHref

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
          <Link href={localizedHref("/")} className="flex-shrink-0 relative">
            {/* Logo pour fond sombre (avant scroll) */}
            <Image
              src={LOGO_LIGHT}
              alt="SMART2D Services"
              width={160}
              height={48}
              className={cn(
                "h-12 w-auto transition-opacity duration-300",
                useDarkText ? "opacity-0" : "opacity-100"
              )}
              priority
            />
            {/* Logo pour fond clair (après scroll) */}
            <Image
              src={LOGO_DARK}
              alt="SMART2D Services"
              width={160}
              height={48}
              className={cn(
                "absolute top-0 left-0 h-12 w-auto transition-opacity duration-300",
                useDarkText ? "opacity-100" : "opacity-0"
              )}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const itemHref = localizedHref(item.href)
              const isActive = pathname === itemHref
              return (
                <Link
                  key={item.key}
                  href={itemHref}
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
              )
            })}
          </div>

          {/* CTA Button & Language Switcher */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={handleLanguageSwitch}
              className={cn(
                "p-2 rounded-full transition-all flex items-center gap-1.5 cursor-pointer",
                useDarkText
                  ? "text-[#221E1F] hover:bg-[#221E1F]/5"
                  : "text-white hover:bg-white/10"
              )}
              title="Switch language"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase">{locale === "fr" ? "en" : "fr"}</span>
            </button>
            <Link
              href={contactHref}
              className={cn(
                "inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-lg transition-all",
                isContactActive
                  ? "bg-[#EE3329] text-white shadow-lg shadow-[#EE3329]/25"
                  : useDarkText
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
                const itemHref = localizedHref(item.href)
                const isActive = pathname === itemHref
                return (
                  <Link
                    key={item.key}
                    href={itemHref}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-lg transition-colors",
                      isActive
                        ? "text-white bg-[#EE3329]"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {t(item.key)}
                  </Link>
                )
              })}
              
              {/* Mobile Language Switcher */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  handleLanguageSwitch()
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase">{locale === "fr" ? "English (EN)" : "Français (FR)"}</span>
              </button>

              <div className="pt-4">
                <Link
                  href={contactHref}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 bg-[#EE3329] text-white font-semibold rounded-lg hover:bg-[#d62d24] transition-colors"
                >
                  {t('contact')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
