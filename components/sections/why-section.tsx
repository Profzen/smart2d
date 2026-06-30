"use client"

import { useTranslations } from "next-intl"

import { motion } from "framer-motion"
import { Clock, Database, Shield, Users, Globe, Cpu } from "lucide-react"

export function WhySection() {
  const t = useTranslations("WhySection")

  const reasons = [
    {
      icon: Clock,
      title: t("reasons.exp_title"),
      description: t("reasons.exp_desc"),
    },
    {
      icon: Database,
      title: t("reasons.multi_title"),
      description: t("reasons.multi_desc"),
    },
    {
      icon: Shield,
      title: t("reasons.cont_title"),
      description: t("reasons.cont_desc"),
    },
    {
      icon: Users,
      title: t("reasons.acc_title"),
      description: t("reasons.acc_desc"),
    },
    {
      icon: Globe,
      title: t("reasons.vis_title"),
      description: t("reasons.vis_desc"),
    },
    {
      icon: Cpu,
      title: t("reasons.ia_title"),
      description: t("reasons.ia_desc"),
    },
  ]

  return (
    <section id="pourquoi-nous" className="py-20 lg:py-28 bg-[#221E1F]">
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
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t("title")}
          </h2>
        </motion.div>

        {/* Reasons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${index === reasons.length - 1 && reasons.length % 3 !== 0 ? 'lg:col-span-1 lg:col-start-2' : ''}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#EE3329] flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
