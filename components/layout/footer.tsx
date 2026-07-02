"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { getLocalizedHref } from "@/lib/navigation"

const footerLinks = {
  expertise: [
    { key: "oracle", href: "/oracle-infrastructure" },
    { key: "services", href: "/services" },
    { key: "solutions", href: "/solutions" },
    { key: "support", href: "/support-formation" },
  ],
  entreprise: [
    { key: "about", href: "/a-propos" },
    { key: "contact", href: "/contact" },
  ],
  solutions: [
    { name: "OSCAR", href: "/solutions#oscar" },
    { name: "Smart Transfert", href: "/solutions#smart-transfert" },
  ],
}

export function Footer() {
  const t = useTranslations("Footer")
  const tNav = useTranslations("Navigation")
  const locale = useLocale()

  const localizedHref = (href: string) => getLocalizedHref(locale, href)

  return (
    <footer className="bg-[#221E1F] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo/smart2d-logo-light.png"
              alt="SMART2D Services"
              width={200}
              height={60}
              className="h-14 w-auto mb-6"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              {t("company_desc")}
            </p>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#EE3329] mb-4">
              {t("expertise")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.expertise.map((link) => (
                <li key={link.key}>
                  <Link
                    href={localizedHref(link.href)}
                    className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                  >
                    {tNav(link.key)}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#EE3329] mb-4 mt-8">
              {t("partners_title")}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              {t("partners_desc")}
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#EE3329] mb-4">
              {t("solutions")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={localizedHref(link.href)}
                    className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#EE3329] mb-4 mt-8">
              {t("company")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.key}>
                  <Link
                    href={localizedHref(link.href)}
                    className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                  >
                    {tNav(link.key)}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#EE3329] mb-4">
              {t("contact")}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@smart2dservices.com"
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#EE3329]" />
                  contact@smart2dservices.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+22872140923"
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#EE3329]" />
                  <span>
                    +228 72 14 09 23 <span className="text-white/50">(Togo)</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+17324392272"
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#EE3329]" />
                  <span>
                    +1 732 439 2272 <span className="text-white/50">(USA)</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#EE3329]" />
                <span>Hedzranawoe, Boulevard du Haho<br />Lomé - Togo</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} SMART2D Services. {t("rights")}
            </p>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <span>{t("years")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
