"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { HeroDecoration } from "@/components/ui/hero-decoration"
import { 
  ArrowRight, 
  Activity, 
  Bell,
  Bot,
  Zap,
  BarChart3,
  Cpu,
  Server,
  Send,
  Receipt,
  Users,
  FileText,
  History,
  Shield,
  CheckCircle,
  AlertTriangle,
  Clock,
  TrendingUp
} from "lucide-react"
import { HeroAnchors, Anchor } from "@/components/ui/hero-anchors"
import { useTranslations, useLocale } from "next-intl"

export function SolutionsContent() {
  const t = useTranslations("Solutions")
  const locale = useLocale()

  const getLocalizedHref = (href: string) => {
    if (href.startsWith("#")) return href
    return `/${locale}${href}`
  }

  const solutionsAnchors: Anchor[] = [
    { id: "oscar", title: "OSCAR" },
    { id: "smart-transfert", title: "Smart Transfert" },
  ]

  const oscarProblems = [
    t("oscar_w1"),
    t("oscar_w2"),
    t("oscar_w3"),
    t("oscar_w4"),
  ]

  const oscarFeatures = [
    { icon: Cpu, label: t("st_f1") },
    { icon: Activity, label: t("oscar_f1_title") },
    { icon: Bell, label: t("oscar_f3_title") },
    { icon: Zap, label: t("oscar_w4") },
    { icon: BarChart3, label: t("oscar_f5") },
    { icon: Bot, label: t("oscar_f4_title") },
  ]

  const smartTransfertProblems = [
    t("st_p1"),
    t("st_p2"),
    t("st_p3"),
    t("st_p4"),
    t("st_p5"),
  ]

  const smartTransfertBenefits = [
    t("st_b1"),
    t("st_b2"),
    t("st_b3"),
    t("st_b4"),
    t("st_b5"),
  ]

  const smartTransfertFeatures = [
    { icon: BarChart3, label: t("st_f1") },
    { icon: Send, label: t("st_f2") },
    { icon: Receipt, label: t("st_f3") },
    { icon: FileText, label: t("st_f4") },
    { icon: History, label: t("st_f5") },
    { icon: Users, label: t("st_f6") },
  ]

  const solutions = [
    {
      icon: Activity,
      title: "OSCAR",
      subtitle: "Supervision & AIOps",
      description: t("oscar_desc"),
      longDescription: t("oscar_desc"),
      features: oscarFeatures,
      href: "/solutions#oscar",
      accent: "bg-[#17233A]",
      iconBg: "bg-[#EE3329]",
      iconColor: "text-white",
      linkText: "Découvrir OSCAR",
      featureIconColor: "text-[#17233A]",
    },
    {
      icon: Send,
      title: "Smart Transfert",
      subtitle: t("st_tag"),
      description: t("st_desc"),
      longDescription: t("st_desc"),
      features: smartTransfertFeatures,
      href: "/solutions#smart-transfert",
      accent: "bg-[#2F6B4F]",
      iconBg: "bg-white",
      iconColor: "text-[#2F6B4F]",
      linkText: "Découvrir Smart Transfert",
      featureIconColor: "text-[#2F6B4F]",
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#F8F6F4] via-[#F0ECE8] to-[#F8F6F4] overflow-hidden">
        <HeroDecoration pageType="solutions" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <HeroAnchors anchors={solutionsAnchors} />

            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              {t("solutions_tag")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#221E1F] leading-tight">
              {t("solutions_title")}
            </h1>
            <p className="mt-6 text-xl text-[#221E1F]/70 leading-relaxed">
              {t("solutions_desc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* OSCAR */}
      <section id="oscar" className="py-20 bg-[#F8F6F4] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header OSCAR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#EE3329] mb-3">OSCAR</h2>
            <p className="text-xl md:text-2xl font-semibold text-[#221E1F] mb-4">
              {t("oscar_subtitle")}
            </p>
            <p className="text-[#221E1F]/70 text-lg leading-relaxed max-w-4xl">
              {t("oscar_desc")}
            </p>
          </motion.div>

          {/* Ce que fait OSCAR + Screenshot App — 2 colonnes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid lg:grid-cols-12 gap-8 mb-16"
          >
            {/* Gauche — Ce que fait OSCAR (5 colonnes sur 12) */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-8 border border-[#E5E0DC] shadow-sm flex flex-col justify-center">
              <h3 className="text-xl font-bold text-[#221E1F] mb-6">{t("oscar_what_title")}</h3>
              <ul className="space-y-4">
                {oscarProblems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EE3329] mt-1.5 flex-shrink-0" />
                    <span className="text-[#221E1F]/80 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Droite — Screenshot page accueil OSCAR (7 colonnes sur 12) */}
            <div className="lg:col-span-7 self-center transition-transform duration-500 ease-out hover:scale-110 cursor-zoom-in">
              <Image
                src="/images/oscar/oscar-app.png"
                alt="Page d'accueil OSCAR — Observe, Detect, Analyze, Automate"
                width={1127}
                height={598}
                className="w-full h-auto block rounded-2xl shadow-xl"
              />
            </div>
          </motion.div>

          {/* Fonctions clés — Grille 2x2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-[#E5E0DC]" />
              <h3 className="text-lg font-semibold text-[#221E1F] whitespace-nowrap">{t("oscar_features_title")}</h3>
              <div className="h-px flex-1 bg-[#E5E0DC]" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Server,
                  title: t("oscar_f1_title"),
                  description: t("oscar_f1_desc"),
                },
                {
                  icon: Shield,
                  title: t("oscar_f2_title"),
                  description: t("oscar_f2_desc"),
                },
                {
                  icon: Bell,
                  title: t("oscar_f3_title"),
                  description: t("oscar_f3_desc"),
                },
                {
                  icon: Bot,
                  title: t("oscar_f4_title"),
                  description: t("oscar_f4_desc"),
                },
              ].map((func) => (
                <div
                  key={func.title}
                  className="bg-white rounded-xl p-6 border border-[#E5E0DC] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#EE3329] flex items-center justify-center flex-shrink-0">
                      <func.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#221E1F] mb-1">{func.title}</h4>
                      <p className="text-sm text-[#221E1F]/60 leading-relaxed">{func.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Dashboard Screenshot — Pleine largeur */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src="/images/oscar/oscar-dashboard.png"
              alt="Dashboard OSCAR — supervision des ressources, disponibilité et indicateurs techniques"
              width={1127}
              height={598}
              className="w-full h-auto block rounded-2xl shadow-xl transition-transform duration-500 ease-out hover:scale-[1.03] cursor-zoom-in"
            />
            <p className="mt-4 text-sm text-[#221E1F]/50 flex items-center gap-2">
              <Activity className="w-4 h-4" />
              {t("oscar_db_desc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Smart Transfert */}
      <section id="smart-transfert" className="py-20 bg-[#F8F6F4] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#2F6B4F] flex items-center justify-center">
                <Send className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#2F6B4F] bg-[#2F6B4F]/10 px-2 py-1 rounded">
                  {t("st_tag")}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#221E1F] mt-2">Smart Transfert</h2>
              </div>
            </div>
            <p className="text-xl text-[#221E1F]/70 max-w-3xl">
              {t("st_desc")}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Problems */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-[#221E1F] mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#EE3329]" />
                {t("st_prob_title")}
              </h3>
              <div className="space-y-3">
                {smartTransfertProblems.map((problem, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg border border-[#E5E0DC] shadow-sm"
                  >
                    <span className="text-[#EE3329]">•</span>
                    <span className="text-[#221E1F]/70">{problem}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-[#221E1F] mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#2F6B4F]" />
                {t("st_ben_title")}
              </h3>
              <div className="space-y-3">
                {smartTransfertBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-[#2F6B4F]/10 rounded-lg border border-[#2F6B4F]/20"
                  >
                    <CheckCircle className="w-5 h-5 text-[#2F6B4F] flex-shrink-0 mt-0.5" />
                    <span className="text-[#221E1F]/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Smart Transfert Dashboard Screenshot — Pleine largeur */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 transition-transform duration-500 ease-out hover:scale-[1.03] cursor-zoom-in"
          >
            <Image
              src="/images/smart-transfert/smart-transfert-dashboard.png"
              alt="Dashboard Smart Transfert — centralisation et opérations"
              width={1664}
              height={943}
              className="w-full h-auto block rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <h3 className="text-lg font-semibold text-[#221E1F] mb-6">{t("st_features_title")}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {smartTransfertFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-[#E5E0DC] shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2F6B4F]/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-[#2F6B4F]" />
                  </div>
                  <span className="text-sm text-[#221E1F]/70 text-center">{feature.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#221E1F]">
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
