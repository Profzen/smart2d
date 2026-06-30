"use client"

import { useTranslations } from "next-intl"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, MessageSquare } from "lucide-react"

export function CTASection() {
  const t = useTranslations("CTASection")
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#F8F6F4] to-[#F0ECE8] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#EE3329]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-[#EE3329] flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#221E1F] text-balance">
            {t("title")}
          </h2>
          
          <p className="mt-6 text-lg text-[#221E1F]/70 max-w-2xl mx-auto">
            {t("description")}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#EE3329] text-white font-semibold rounded-lg hover:bg-[#d62d24] transition-all shadow-lg shadow-[#EE3329]/25 group"
            >
              {t("button_diagnostic")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/oracle-infrastructure"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#17233A] text-white font-semibold rounded-lg hover:bg-[#1e2d4a] transition-all"
            >
              {t("button_expertise")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
