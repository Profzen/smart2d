"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export function PositioningSection() {
  const t = useTranslations("Positioning")

  return (
    <section id="positionnement" className="py-20 lg:py-28 bg-[#F8F6F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              {t("tagline")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#221E1F] leading-tight text-balance">
              {t("title")}
            </h2>
            <p className="smart-card-description mt-6">
              {t("p1")}
            </p>
            <p className="smart-card-description mt-4">
              {t("p2_start")}
              <strong className="text-[#221E1F]">{t("available")}</strong>, 
              <strong className="text-[#221E1F]"> {t("efficient")}</strong> {t("and")} 
              <strong className="text-[#221E1F]"> {t("secure")}</strong>
              {t("p2_end")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
