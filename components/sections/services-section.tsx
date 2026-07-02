"use client"

import { useLocale, useTranslations } from "next-intl"

import { motion } from "framer-motion"
import Link from "next/link"
import { getLocalizedHref } from "@/lib/navigation"
import { 
  Database, 
  Search, 
  Shield, 
  RefreshCw, 
  Activity,
  GraduationCap,
  ArrowRight
} from "lucide-react"

export function ServicesSection() {
  const t = useTranslations("ServicesSection")
  const locale = useLocale()
  const localizedHref = (href: string) => getLocalizedHref(locale, href)

  const services = [
    {
      icon: Database,
      title: t("services.dba_title"),
      description: t("services.dba_desc"),
      href: "/services#dba",
    },
    {
      icon: Search,
      title: t("services.audit_title"),
      description: t("services.audit_desc"),
      href: "/services#audit",
    },
    {
      icon: Shield,
      title: t("services.sec_title"),
      description: t("services.sec_desc"),
      href: "/services#securite",
    },
    {
      icon: RefreshCw,
      title: t("services.mig_title"),
      description: t("services.mig_desc"),
      href: "/services#migration",
    },
    {
      icon: Activity,
      title: t("services.mco_title"),
      description: t("services.mco_desc"),
      href: "/services#mco",
    },
    {
      icon: GraduationCap,
      title: t("services.sup_title"),
      description: t("services.sup_desc"),
      href: "/services#formation",
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8F6F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
            {t("label")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#221E1F]">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-[#221E1F]/70 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={localizedHref(service.href)}
                className="group block h-full bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E5E0DC] hover:border-[#EE3329]/30"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-[#221E1F] flex items-center justify-center mb-4 group-hover:bg-[#EE3329] transition-colors">
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#221E1F] mb-2 group-hover:text-[#EE3329] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#221E1F]/80 text-sm font-medium leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="mt-4 flex items-center text-[#EE3329] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {t("card_link")}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href={localizedHref("/services")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#221E1F] text-white font-semibold rounded-lg hover:bg-[#2d2829] transition-all group"
          >
            {t("button_all")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
