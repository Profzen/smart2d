"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  Database,
  Shield,
  Cloud,
  Terminal,
  HardDrive,
  Cpu,
  RefreshCw,
  GraduationCap,
} from "lucide-react"
import { HeroAnchors, Anchor } from "@/components/ui/hero-anchors"
import { HeroDecoration } from "@/components/ui/hero-decoration"
import { useLocale, useTranslations } from "next-intl"
import { getLocalizedHref } from "@/lib/navigation"



export function ServicesContent() {
  const t = useTranslations("Services")
  const locale = useLocale()
  const localizedHref = (href: string) => getLocalizedHref(locale, href)

  const servicesAnchors: Anchor[] = [
    { id: "domaines", title: t("anc_domaines") },
    { id: "demarche", title: t("anc_demarche") },
  ]

  const approach = [
    t("step_1"),
    t("step_2"),
    t("step_3"),
    t("step_4"),
    t("step_5"),
  ]

  const services = [
    {
      id: "oracle-database-middleware",
      icon: Database,
      title: t("oracle_title"),
      description: t("oracle_desc"),
      color: "bg-[#EE3329]",
    },
    {
      id: "cloud-oci-hybrides",
      icon: Cloud,
      title: t("cloud_title"),
      description: t("cloud_desc"),
      color: "bg-[#17233A]",
    },
    {
      id: "bases-de-donnees-critiques",
      icon: HardDrive,
      title: t("db_title"),
      description: t("db_desc"),
      color: "bg-[#2F6B4F]",
    },
    {
      id: "linux-unix",
      icon: Terminal,
      title: t("linux_title"),
      description: t("linux_desc"),
      color: "bg-[#17233A]",
    },
    {
      id: "audit-securite-performance",
      icon: Shield,
      title: t("audit_title"),
      description: t("audit_desc"),
      color: "bg-[#EE3329]",
    },
    {
      id: "ia-automatisation",
      icon: Cpu,
      title: t("ia_title"),
      description: t("ia_desc"),
      color: "bg-[#17233A]",
    },
    {
      id: "migration-modernisation",
      icon: RefreshCw,
      title: t("mig_title"),
      description: t("mig_desc"),
      color: "bg-[#2F6B4F]",
    },
    {
      id: "support-formation",
      icon: GraduationCap,
      title: t("sup_title"),
      description: t("sup_desc"),
      color: "bg-[#17233A]",
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-20 bg-gradient-to-br from-[#F8F6F4] via-[#F0ECE8] to-[#F8F6F4] overflow-hidden">
        <HeroDecoration pageType="services" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <HeroAnchors anchors={servicesAnchors} />

            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              {t("hero_label")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#221E1F] leading-tight">
              {t("hero_title")}
            </h1>
            <p className="mt-6 text-xl text-[#221E1F]/70 leading-relaxed">
              {t("hero_desc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="domaines" className="py-20 bg-[#F8F6F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              {t("dom_title")}
            </span>
          </div>
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#E5E0DC] scroll-mt-32"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#221E1F] mb-4">{service.title}</h2>
                    <p className="smart-card-description">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="demarche" className="py-20 bg-[#221E1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
                {t("app_title")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {t("app_h2")}
              </h2>
              <p className="mt-4 smart-card-description-dark">
                {t("app_desc")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {approach.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="w-8 h-8 rounded-full bg-[#EE3329] flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-base md:text-[17px] leading-7 font-medium text-white/85">{step}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F0ECE8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#221E1F] mb-4">
              {t("cta_title")}
            </h2>
            <p className="text-[#221E1F]/70 text-lg mb-8">
              {t("cta_desc")}
            </p>
            <Link
              href={localizedHref("/contact#coordonnees")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#EE3329] text-white font-semibold rounded-lg hover:bg-[#d62d24] transition-all shadow-lg shadow-[#EE3329]/25 group"
            >
              {t("cta_btn")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
