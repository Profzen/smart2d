"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { MessageCircle, Phone, Mail, X } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { getLocalizedHref } from "@/lib/navigation"
import { cn } from "@/lib/utils"
import { WhatsappIcon } from "@/components/ui/whatsapp-icon"

const WHATSAPP_URL = "https://wa.me/22893375155"
const PHONE_TOGO = "+228 72 14 09 23"
const PHONE_USA = "+1 732 439 2272"

type FloatingContactAction = {
  key: string
  label: string
  icon: LucideIcon | typeof WhatsappIcon
  className: string
  href?: string
  external?: boolean
  onClick?: () => void
}

export function FloatingContact() {
  const locale = useLocale()
  const t = useTranslations("FloatingContact")
  const [isOpen, setIsOpen] = useState(false)
  const [showPhones, setShowPhones] = useState(false)

  const closePanel = () => {
    setIsOpen(false)
    setShowPhones(false)
  }

  const actions: FloatingContactAction[] = [
    {
      key: "phone",
      label: t("phone"),
      icon: Phone,
      className: "bg-[#17233A] hover:bg-[#223251]",
      onClick: () => setShowPhones((value) => !value),
    },
    {
      key: "message",
      label: t("message"),
      icon: Mail,
      className: "bg-[#EE3329] hover:bg-[#d62d24]",
      href: getLocalizedHref(locale, "/contact#formulaire"),
    },
    {
      key: "whatsapp",
      label: "WhatsApp",
      icon: WhatsappIcon,
      className: "bg-[#25D366] hover:bg-[#1fb85a]",
      href: WHATSAPP_URL,
      external: true,
    },
  ]

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {showPhones && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            className="mr-16 w-[260px] rounded-xl border border-[#E5E0DC] bg-white p-4 text-[#221E1F] shadow-2xl"
          >
            <p className="text-sm font-bold text-[#221E1F]">{t("phone_title")}</p>
            <div className="mt-3 space-y-2 text-sm">
              <a href="tel:+22872140923" className="block rounded-lg bg-[#F8F6F4] px-3 py-2 font-semibold hover:text-[#EE3329]">
                {t("togo")} : {PHONE_TOGO}
              </a>
              <a href="tel:+17324392272" className="block rounded-lg bg-[#F8F6F4] px-3 py-2 font-semibold hover:text-[#EE3329]">
                {t("usa")} : {PHONE_USA}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: { transition: { staggerChildren: 0.06, staggerDirection: -1 } },
              closed: { transition: { staggerChildren: 0.04 } },
            }}
            className="flex flex-col items-end gap-3"
          >
            {actions.map((action) => {
              const Icon = action.icon
              const buttonClassName = cn(
                "group flex h-12 w-12 items-center justify-center rounded-full text-white shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EE3329]",
                action.className
              )

              const content = (
                <>
                  <span className="absolute right-14 whitespace-nowrap rounded-full bg-[#221E1F] px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                    {action.label}
                  </span>
                  <Icon className="h-5 w-5" />
                </>
              )

              return (
                <motion.div
                  key={action.key}
                  variants={{
                    open: { opacity: 1, y: 0, scale: 1 },
                    closed: { opacity: 0, y: 14, scale: 0.85 },
                  }}
                  className="relative"
                >
                  {action.href ? (
                    <Link
                      href={action.href}
                      target={action.external ? "_blank" : undefined}
                      rel={action.external ? "noopener noreferrer" : undefined}
                      onClick={closePanel}
                      className={buttonClassName}
                      aria-label={action.label}
                    >
                      {content}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={action.onClick}
                      className={buttonClassName}
                      aria-label={action.label}
                    >
                      {content}
                    </button>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => {
          setIsOpen((value) => !value)
          if (isOpen) {
            setShowPhones(false)
          }
        }}
        className="floating-contact-pulse flex h-14 w-14 items-center justify-center rounded-full bg-[#EE3329] text-white shadow-2xl transition-colors hover:bg-[#d62d24] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EE3329]"
        aria-label={isOpen ? t("close") : t("open")}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  )
}
