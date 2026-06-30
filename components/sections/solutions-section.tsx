"use client"

import { useTranslations } from "next-intl"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Activity, 
  Cpu,
  BarChart3,
  Bell,
  Zap,
  Bot,
  ArrowRight,
  Send,
  Receipt,
  Users,
  FileText,
  History
} from "lucide-react"

export function SolutionsSection() {
  const t = useTranslations("SolutionsSection")

  const oscarFeatures = [
    { icon: Activity, label: t("oscar.features.sup") },
    { icon: Bell, label: t("oscar.features.alert") },
    { icon: Bot, label: t("oscar.features.ia") },
    { icon: Zap, label: t("oscar.features.auto") },
    { icon: BarChart3, label: t("oscar.features.rep") },
    { icon: Cpu, label: t("oscar.features.inv") },
  ]

  const smartTransfertFeatures = [
    { icon: Send, label: t("smart.features.send") },
    { icon: Receipt, label: t("smart.features.receive") },
    { icon: FileText, label: t("smart.features.rep") },
    { icon: History, label: t("smart.features.hist") },
    { icon: Users, label: t("smart.features.users") },
    { icon: BarChart3, label: t("smart.features.trace") },
  ]

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-[#F0ECE8]">
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

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* OSCAR */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="oscar"
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#E5E0DC]"
          >
            {/* Header */}
            <div className="bg-[#17233A] p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#EE3329] flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-mono text-white/50 bg-white/10 px-2 py-1 rounded">
                  {t("oscar.tag")}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">{t("oscar.title")}</h3>
              <p className="mt-2 text-white/70">
                {t("oscar.subtitle")}
              </p>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-[#221E1F]/70 mb-6">
                {t("oscar.description")}
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {oscarFeatures.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-2 p-3 bg-[#F8F6F4] rounded-lg"
                  >
                    <feature.icon className="w-4 h-4 text-[#17233A]" />
                    <span className="text-sm text-[#221E1F]">{feature.label}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/solutions#oscar"
                className="inline-flex items-center gap-2 text-[#EE3329] font-semibold hover:gap-3 transition-all"
              >
                {t("oscar.button")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Smart Transfert */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="smart-transfert"
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#E5E0DC]"
          >
            {/* Header */}
            <div className="bg-[#2F6B4F] p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                  <Send className="w-5 h-5 text-[#2F6B4F]" />
                </div>
                <span className="text-xs font-mono text-white/50 bg-white/10 px-2 py-1 rounded">
                  {t("smart.tag")}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">{t("smart.title")}</h3>
              <p className="mt-2 text-white/70">
                {t("smart.subtitle")}
              </p>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-[#221E1F]/70 mb-6">
                {t("smart.description")}
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {smartTransfertFeatures.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-2 p-3 bg-[#F8F6F4] rounded-lg"
                  >
                    <feature.icon className="w-4 h-4 text-[#2F6B4F]" />
                    <span className="text-sm text-[#221E1F]">{feature.label}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/solutions#smart-transfert"
                className="inline-flex items-center gap-2 text-[#2F6B4F] font-semibold hover:gap-3 transition-all"
              >
                {t("smart.button")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/solutions"
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
