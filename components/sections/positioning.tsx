"use client"

import { motion } from "framer-motion"

export function PositioningSection() {
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
              Un partenaire IT pour environnements sensibles
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#221E1F] leading-tight text-balance">
              Les infrastructures critiques ne se gèrent pas seulement avec des outils
            </h2>
            <p className="mt-6 text-lg text-[#221E1F]/70 leading-relaxed">
              Elles exigent une méthode, une expertise éprouvée et une capacité à 
              anticiper les incidents avant qu&apos;ils ne deviennent des interruptions majeures.
            </p>
            <p className="mt-4 text-lg text-[#221E1F]/70 leading-relaxed">
              SMART2D intervient comme partenaire technique auprès des entreprises qui 
              doivent maintenir leurs systèmes <strong className="text-[#221E1F]">disponibles</strong>, 
              <strong className="text-[#221E1F]"> performants</strong> et 
              <strong className="text-[#221E1F]"> sécurisés</strong>. Notre approche couvre 
              l&apos;audit, le conseil, la mise en œuvre, la supervision, le support et le 
              transfert de compétences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
