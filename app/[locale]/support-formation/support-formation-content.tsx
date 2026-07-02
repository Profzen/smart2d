"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  ArrowRight, 
  Headphones, 
  Database,
  Terminal,
  Activity,
  GraduationCap,
  BookOpen,
  FileText,
  Users,
  Clock,
} from "lucide-react"
import { HeroAnchors, Anchor } from "@/components/ui/hero-anchors"
import { HeroDecoration } from "@/components/ui/hero-decoration"
import { useTranslations, useLocale } from "next-intl"

export function SupportFormationContent() {
  const t = useTranslations("Support")
  const locale = useLocale()

  const getLocalizedHref = (href: string) => {
    if (href.startsWith("#")) return href
    return `/${locale}${href}`
  }

  const supportAnchors: Anchor[] = [
    { id: "support", title: t("anc_support") },
    { id: "formation", title: t("anc_formation") },
  ]

  const prestations = [
    {
      icon: Database,
      title: t("db_title"),
      description: t("db_desc"),
      color: "bg-[#EE3329]",
    },
    {
      icon: Terminal,
      title: t("infra_title"),
      description: t("infra_desc"),
      color: "bg-[#17233A]",
    },
    {
      icon: Activity,
      title: t("mco_title"),
      description: t("mco_desc"),
      color: "bg-[#2F6B4F]",
    },
    {
      icon: GraduationCap,
      title: t("train_title"),
      description: t("train_desc"),
      color: "bg-[#EE3329]",
    },
    {
      icon: Users,
      title: t("transfer_title"),
      description: t("transfer_desc"),
      color: "bg-[#17233A]",
    },
    {
      icon: FileText,
      title: t("doc_title"),
      description: t("doc_desc"),
      color: "bg-[#2F6B4F]",
    },
  ]

  const supportModes = [
    {
      icon: Clock,
      title: t("mode_ponctuel_title"),
      description: t("mode_ponctuel_desc"),
    },
    {
      icon: Headphones,
      title: t("mode_continu_title"),
      description: t("mode_continu_desc"),
    },
    {
      icon: BookOpen,
      title: t("mode_mesure_title"),
      description: t("mode_mesure_desc"),
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
            <HeroAnchors anchors={supportAnchors} />

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

      {/* Support Section */}
      <section id="support" className="py-20 bg-[#F8F6F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              {t("prestations_tag")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#221E1F]">
              {t("prestations_title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prestations.map((prestation) => (
              <motion.div
                key={prestation.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E0DC] hover:shadow-lg hover:border-[#EE3329]/20 transition-all"
              >
                <div className={`w-12 h-12 rounded-lg ${prestation.color} flex items-center justify-center mb-4`}>
                  <prestation.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#221E1F] mb-2">{prestation.title}</h3>
                <p className="smart-card-description">{prestation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section id="formation" className="py-20 bg-[#221E1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              {t("intervention_tag")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t("intervention_title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportModes.map((mode, index) => (
              <motion.div
                key={mode.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#EE3329] flex items-center justify-center mx-auto mb-4">
                  <mode.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{mode.title}</h3>
                <p className="smart-card-description-dark">{mode.description}</p>
              </motion.div>
            ))}
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
              href={getLocalizedHref("/contact#coordonnees")}
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
