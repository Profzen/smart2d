"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  ArrowRight, 
  Database, 
  Server,
  Zap,
  Lock,
  Cloud,
  HardDrive,
  CheckCircle,
} from "lucide-react"
import { HeroAnchors, Anchor } from "@/components/ui/hero-anchors"
import { HeroDecoration } from "@/components/ui/hero-decoration"
import { useTranslations, useLocale } from "next-intl"

export function OracleInfraContent() {
  const t = useTranslations("Oracle")
  const locale = useLocale()

  const getLocalizedHref = (href: string) => {
    if (href.startsWith("#")) return href
    return `/${locale}${href}`
  }

  const oracleAnchors: Anchor[] = [
    { id: "expertises", title: t("anc_expertises") },
    { id: "avantages", title: t("anc_tech") },
    { id: "mco", title: t("anc_mco") },
  ]

  const technologies = [
    "Oracle Database",
    "Oracle RAC",
    "Data Guard",
    "RMAN",
    "ASM",
    "Grid Infrastructure",
    "WebLogic Server",
    "Oracle Forms",
    "Oracle Linux",
    "Red Hat",
    "AIX",
    "Solaris",
    "Oracle Cloud Infrastructure (OCI)",
    "MySQL",
    "PostgreSQL",
    "SQL Server",
  ]

  const sections = [
    {
      icon: Database,
      title: t("sec1_title"),
      description: t("sec1_desc"),
      color: "bg-[#EE3329]",
    },
    {
      icon: Server,
      title: t("sec2_title"),
      description: t("sec2_desc"),
      items: [t("sec2_i1"), t("sec2_i2"), t("sec2_i3"), t("sec2_i4"), t("sec2_i5"), t("sec2_i6")],
      color: "bg-[#17233A]",
    },
    {
      icon: Zap,
      title: t("sec3_title"),
      description: t("sec3_desc"),
      color: "bg-[#2F6B4F]",
    },
    {
      icon: Lock,
      title: t("sec4_title"),
      description: t("sec4_desc"),
      color: "bg-[#EE3329]",
    },
    {
      icon: Cloud,
      title: t("sec5_title"),
      description: t("sec5_desc"),
      color: "bg-[#17233A]",
    },
    {
      icon: HardDrive,
      title: t("sec6_title"),
      description: t("sec6_desc"),
      color: "bg-[#2F6B4F]",
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-20 bg-[#17233A] overflow-hidden">
        <HeroDecoration pageType="oracle" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <HeroAnchors anchors={oracleAnchors} />

            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              {t("tagline")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {t("title")}
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">
              {t("p1")}
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              {t("p2")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section id="expertises" className="py-20 bg-[#F8F6F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              {t("expertise_tag")}
            </span>
          </div>
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#E5E0DC]"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className={`w-14 h-14 rounded-xl ${section.color} flex items-center justify-center flex-shrink-0`}>
                    <section.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#221E1F] mb-4">{section.title}</h2>
                    <p className="text-[#221E1F]/80 font-medium leading-relaxed">{section.description}</p>
                    
                    {section.items && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {section.items.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F0ECE8] text-[#221E1F]/70 text-sm rounded-full"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-[#2F6B4F]" />
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mastered Technologies */}
      <section id="avantages" className="py-20 bg-[#F0ECE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              {t("tech_tag")}
            </span>
            <h2 className="text-3xl font-bold text-[#221E1F]">
              {t("tech_title")}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white text-[#221E1F] rounded-full border border-[#E5E0DC] text-sm font-medium hover:border-[#EE3329]/50 hover:shadow-md transition-all"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Approach / MCO */}
      <section id="mco" className="py-20 bg-[#221E1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("cta_title")}
            </h2>
            <p className="text-white/70 text-lg mb-8">
              {t("cta_desc")}
            </p>
            <Link
              href={getLocalizedHref("/contact")}
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
