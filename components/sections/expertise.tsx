"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Database, Cloud, HardDrive, Terminal, Shield, Cpu, RefreshCw, GraduationCap, Code } from "lucide-react"

export function ExpertiseSection() {
  const t = useTranslations("Expertise");

  const expertises = [
    {
      icon: Database,
      title: t("oracle_title"),
      description: t("oracle_desc"),
      color: "bg-[#EE3329]",
    },
    {
      icon: Cloud,
      title: t("cloud_title"),
      description: t("cloud_desc"),
      color: "bg-[#17233A]",
    },
    {
      icon: HardDrive,
      title: t("db_title"),
      description: t("db_desc"),
      color: "bg-[#2F6B4F]",
    },
    {
      icon: Terminal,
      title: t("linux_title"),
      description: t("linux_desc"),
      color: "bg-[#17233A]",
    },
    {
      icon: Shield,
      title: t("audit_title"),
      description: t("audit_desc"),
      color: "bg-[#EE3329]",
    },
    {
      icon: Cpu,
      title: t("ia_title"),
      description: t("ia_desc"),
      color: "bg-[#17233A]",
    },
    {
      icon: RefreshCw,
      title: t("mig_title"),
      description: t("mig_desc"),
      color: "bg-[#2F6B4F]",
    },
    {
      icon: GraduationCap,
      title: t("sup_title"),
      description: t("sup_desc"),
      color: "bg-[#17233A]",
    },
    {
      icon: Code,
      title: t("apex_title"),
      description: t("apex_desc"),
      color: "bg-[#EE3329]",
    },
  ]

  return (
    <section id="expertises" className="py-20 lg:py-28 bg-[#F0ECE8]">
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
            {t("section_subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#221E1F]">
            {t("section_title")}
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertises.map((expertise, index) => (
            <motion.div
              key={expertise.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E5E0DC] hover:border-[#EE3329]/20"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg ${expertise.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <expertise.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-[#221E1F] mb-2">
                {expertise.title}
              </h3>
              <p className="smart-card-description">
                {expertise.description}
              </p>

              {/* Hover accent */}
              <div className="smart-card-accent-bottom transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
