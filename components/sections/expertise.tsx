"use client"

import { motion } from "framer-motion"
import { Database, Cloud, HardDrive, Terminal, Shield, Cpu, RefreshCw, GraduationCap } from "lucide-react"

const expertises = [
  {
    icon: Database,
    title: "Oracle Database & Middleware",
    description: "Administration, optimisation, sauvegarde, haute disponibilité, sécurité et maintien en condition opérationnelle des environnements Oracle.",
    color: "bg-[#EE3329]",
  },
  {
    icon: Cloud,
    title: "Cloud OCI & architectures hybrides",
    description: "Architecture, migration, exploitation, sauvegarde, PRA/PCA, supervision et optimisation des coûts sur Oracle Cloud Infrastructure.",
    color: "bg-[#17233A]",
  },
  {
    icon: HardDrive,
    title: "Bases de données critiques",
    description: "Installation, tuning, monitoring, sauvegarde et restauration sur Oracle, MySQL, PostgreSQL, SQL Server et environnements associés.",
    color: "bg-[#2F6B4F]",
  },
  {
    icon: Terminal,
    title: "Linux / Unix",
    description: "Administration, durcissement, patching, logs, accès, automatisation et supervision sur Oracle Linux, Red Hat, AIX, Solaris.",
    color: "bg-[#17233A]",
  },
  {
    icon: Shield,
    title: "Audit, sécurité & performance",
    description: "Analyse des risques, vérification des configurations, recommandations opérationnelles et plans de remédiation priorisés.",
    color: "bg-[#EE3329]",
  },
  {
    icon: Cpu,
    title: "Intelligence Artificielle & Automatisation",
    description: "Intégrer des technologies intelligentes et des scripts automatisés pour éliminer les tâches répétitives et booster la productivité de vos équipes.",
    color: "bg-[#17233A]",
  },
  {
    icon: RefreshCw,
    title: "Migration & modernisation",
    description: "Migration vers OCI, montées de version Oracle, transformation des architectures et modernisation des plateformes.",
    color: "bg-[#2F6B4F]",
  },
  {
    icon: GraduationCap,
    title: "Support & formation",
    description: "Assistance technique, formation Oracle, bases de données, Linux/Unix et transfert de compétences pour vos équipes.",
    color: "bg-[#17233A]",
  },
]

export function ExpertiseSection() {
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
            Nos domaines d&apos;expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#221E1F]">
            Une expertise complète pour vos environnements IT
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
              className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E5E0DC] hover:border-[#EE3329]/20"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg ${expertise.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <expertise.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-[#221E1F] mb-2">
                {expertise.title}
              </h3>
              <p className="text-[#221E1F]/80 text-sm font-medium leading-relaxed">
                {expertise.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#EE3329] rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
