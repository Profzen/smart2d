"use client"

import { motion } from "framer-motion"
import { Clock, Database, Shield, Users, Globe } from "lucide-react"

const reasons = [
  {
    icon: Clock,
    title: "20+ ans d'expertise Oracle",
    description: "Une expertise construite sur plus de deux décennies d'expérience autour des environnements Oracle.",
  },
  {
    icon: Database,
    title: "Capacité multi-domaines",
    description: "Bases de données, systèmes, cloud et supervision : une expertise complète pour vos infrastructures.",
  },
  {
    icon: Shield,
    title: "Continuité de service",
    description: "Une approche orientée sécurité, performance et transfert de compétences pour vos équipes.",
  },
  {
    icon: Users,
    title: "Accompagnement terrain",
    description: "Un accompagnement local avec une expérience internationale sur des projets sensibles.",
  },
  {
    icon: Globe,
    title: "Vision moderne",
    description: "OCI, automatisation, supervision intelligente et solutions métiers pour une IT plus agile.",
  },
]

export function WhySection() {
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
            Pourquoi SMART2D
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Un partenaire de confiance pour vos infrastructures
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
