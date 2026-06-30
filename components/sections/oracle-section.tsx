"use client"

import { useTranslations } from "next-intl"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Database, Cloud, Server, Shield, Zap, RefreshCw } from "lucide-react"

const technologies = [
  "Oracle Database",
  "Oracle RAC",
  "Data Guard",
  "ASM",
  "RMAN",
  "Grid Infrastructure",
  "WebLogic Server",
  "Oracle Forms",
  "Oracle Linux",
  "Cloud OCI",
]

export function OracleSection() {
  const t = useTranslations("OracleSection")
  return (
    <section id="oracle" className="py-20 lg:py-28 bg-[#17233A] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EE3329]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              {t("label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {t("title")}
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              {t("description_1")}
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              {t("description_2")}
              <strong className="text-white">{t("desc_2_fiables")}</strong>, plus 
              <strong className="text-white">{t("desc_2_lisibles")}</strong>, plus 
              <strong className="text-white">{t("desc_2_securises")}</strong>
              {t("desc_2_end")}
            </p>

            {/* Technologies */}
            <div className="mt-8">
              <p className="text-white/50 text-sm uppercase tracking-wider mb-4">{t("tech_label")}</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-white/10 text-white/80 text-sm rounded-full border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/oracle-infrastructure"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#EE3329] text-white font-semibold rounded-lg hover:bg-[#d62d24] transition-all group"
              >
                {t("button_discover")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Database, label: t("cards.db_label"), desc: t("cards.db_desc") },
                { icon: Shield, label: t("cards.security_label"), desc: t("cards.security_desc") },
                { icon: Cloud, label: t("cards.cloud_label"), desc: t("cards.cloud_desc") },
                { icon: Server, label: t("cards.infra_label"), desc: t("cards.infra_desc") },
                { icon: Zap, label: t("cards.perf_label"), desc: t("cards.perf_desc") },
                { icon: RefreshCw, label: t("cards.mco_label"), desc: t("cards.mco_desc") },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EE3329]/20 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-[#EE3329]" />
                  </div>
                  <h4 className="font-semibold text-white">{item.label}</h4>
                  <p className="text-sm text-white/50">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
