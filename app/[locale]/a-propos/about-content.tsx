"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Lightbulb, 
  Shield, 
  Users, 
  Zap,
  Award,
  Activity,
  Send,
  Bell,
  Bot,
  BarChart3,
  Receipt,
  FileText,
  History,
  Cpu
} from "lucide-react"
import { HeroAnchors, Anchor } from "@/components/ui/hero-anchors"
import { HeroDecoration } from "@/components/ui/hero-decoration"
import { useTranslations } from "next-intl"

export function AboutContent() {
  const t = useTranslations("About")

  const oscarFeatures = [
    { icon: Activity, label: t("oscar_f1") },
    { icon: Bell, label: t("oscar_f2") },
    { icon: Bot, label: t("oscar_f3") },
    { icon: Zap, label: t("oscar_f4") },
    { icon: BarChart3, label: t("oscar_f5") },
    { icon: Cpu, label: t("oscar_f6") },
  ]

  const smartTransfertFeatures = [
    { icon: Send, label: t("st_f1") },
    { icon: Receipt, label: t("st_f2") },
    { icon: FileText, label: t("st_f3") },
    { icon: History, label: t("st_f4") },
    { icon: Users, label: t("st_f5") },
    { icon: BarChart3, label: t("st_f6") },
  ]

  const solutions = [
    {
      icon: Activity,
      title: "OSCAR",
      subtitle: t("oscar_subtitle"),
      description: t("oscar_desc"),
      longDescription: t("oscar_long"),
      features: oscarFeatures,
      href: "/solutions#oscar",
      accent: "bg-[#17233A]",
      iconBg: "bg-[#EE3329]",
      iconColor: "text-white",
      linkText: t("oscar_link"),
      featureIconColor: "text-[#17233A]",
    },
    {
      icon: Send,
      title: "Smart Transfert",
      subtitle: t("st_subtitle"),
      description: t("st_desc"),
      longDescription: t("st_long"),
      features: smartTransfertFeatures,
      href: "/solutions#smart-transfert",
      accent: "bg-[#2F6B4F]",
      iconBg: "bg-white",
      iconColor: "text-[#2F6B4F]",
      linkText: t("st_link"),
      featureIconColor: "text-[#2F6B4F]",
    },
  ]

  const aboutAnchors: Anchor[] = [
    { id: "experience", title: t("anc_exp") },
    { id: "mission", title: t("anc_mis") },
    { id: "valeurs", title: t("anc_val") },
    { id: "equipe", title: t("anc_team") },
  ]

  const values = [
    {
      icon: Award,
      title: t("val_expertise"),
      description: t("val_expertise_desc"),
      color: "bg-[#EE3329]",
    },
    {
      icon: Shield,
      title: t("val_fiabilite"),
      description: t("val_fiabilite_desc"),
      color: "bg-[#17233A]",
    },
    {
      icon: Shield,
      title: t("val_securite"),
      description: t("val_securite_desc"),
      color: "bg-[#2F6B4F]",
    },
    {
      icon: Users,
      title: t("val_transmission"),
      description: t("val_transmission_desc"),
      color: "bg-[#17233A]",
    },
    {
      icon: Lightbulb,
      title: t("val_innovation"),
      description: t("val_innovation_desc"),
      color: "bg-[#EE3329]",
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-20 bg-gradient-to-br from-[#F8F6F4] via-[#F0ECE8] to-[#F8F6F4] overflow-hidden">
        <HeroDecoration pageType="about" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <HeroAnchors anchors={aboutAnchors} />

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

      {/* Experience */}
      <section id="experience" className="py-20 bg-[#221E1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              {t("anc_exp")}
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-[#EE3329] text-7xl md:text-9xl font-bold">{t("exp_years")}</div>
              <p className="text-white text-2xl font-semibold mt-2">{t("exp_years_label")}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-white/70 text-lg leading-relaxed">
                {t("exp_p1")}
              </p>
              <p className="text-white/70 text-lg leading-relaxed mt-4">
                {t("exp_p2")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20 bg-[#F8F6F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              {t("anc_mis")}
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#E5E0DC]"
            >
              <div className="w-14 h-14 rounded-xl bg-[#EE3329] flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#221E1F] mb-4">{t("mission_title")}</h2>
              <p className="text-[#221E1F]/70 leading-relaxed">
                {t("mission_desc")}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#E5E0DC]"
            >
              <div className="w-14 h-14 rounded-xl bg-[#17233A] flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#221E1F] mb-4">{t("vision_title")}</h2>
              <p className="text-[#221E1F]/70 leading-relaxed">
                {t("vision_desc")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-[#F8F6F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              {t("sol_label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#221E1F]">
              {t("sol_title")}
            </h2>
            <p className="mt-4 text-lg text-[#221E1F]/70 max-w-2xl mx-auto">
              {t("sol_desc")}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#E5E0DC]"
              >
                {/* Header */}
                <div className={`${solution.accent} p-6`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg ${solution.iconBg} flex items-center justify-center`}>
                      <solution.icon className={`w-5 h-5 ${solution.iconColor}`} />
                    </div>
                    <span className="text-xs font-mono text-white/50 bg-white/10 px-2 py-1 rounded">
                      {solution.subtitle.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                  <p className="mt-2 text-white/70">{solution.description}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[#221E1F]/70 mb-6">{solution.longDescription}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {solution.features.map((feature) => (
                      <div
                        key={feature.label}
                        className="flex items-center gap-2 p-3 bg-[#F8F6F4] rounded-lg"
                      >
                        <feature.icon className={`w-4 h-4 ${solution.featureIconColor}`} />
                        <span className="text-sm text-[#221E1F]">{feature.label}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={solution.href}
                    className={`inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all ${
                      solution.title === "OSCAR" ? "text-[#EE3329]" : "text-[#2F6B4F]"
                    }`}
                  >
                    {solution.linkText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="valeurs" className="py-20 bg-[#F0ECE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              {t("anc_val")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#221E1F]">
              {t("val_title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-xl p-6 shadow-sm border border-[#E5E0DC] ${index === values.length - 1 && values.length % 3 !== 0 ? 'lg:col-span-1 lg:col-start-2' : ''}`}
              >
                <div className={`w-12 h-12 rounded-lg ${value.color} flex items-center justify-center mb-4`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#221E1F] mb-2">{value.title}</h3>
                <p className="text-[#221E1F]/60 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipe" className="py-20 bg-[#17233A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#EE3329] flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("anc_team")}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              {t("team_desc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F8F6F4]">
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
              href="/contact"
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
