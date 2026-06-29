"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Database, 
  Search, 
  Shield, 
  RefreshCw, 
  Activity,
  GraduationCap,
  ArrowRight
} from "lucide-react"

const services = [
  {
    icon: Database,
    title: "Administration DBA",
    description: "Installation, configuration, supervision, tuning, sauvegarde, restauration et support des bases Oracle, MySQL, PostgreSQL.",
    href: "/services#dba",
  },
  {
    icon: Search,
    title: "Audit technique",
    description: "Analyse des configurations, des pratiques d'exploitation, des sauvegardes, des accès et des performances.",
    href: "/services#audit",
  },
  {
    icon: Shield,
    title: "Sécurité",
    description: "Durcissement, gestion des accès, configuration sécurisée, journalisation et bonnes pratiques de protection.",
    href: "/services#securite",
  },
  {
    icon: RefreshCw,
    title: "Migration & modernisation",
    description: "Migration vers OCI, montées de version Oracle, transformation des architectures et modernisation des plateformes.",
    href: "/services#migration",
  },
  {
    icon: Activity,
    title: "Supervision & MCO",
    description: "Alertes, tableaux de bord, rapports, prévention des incidents et maintien en condition opérationnelle.",
    href: "/services#mco",
  },
  {
    icon: GraduationCap,
    title: "Support & formation",
    description: "Assistance technique, formation Oracle, bases de données, Linux/Unix et transfert de compétences.",
    href: "/services#formation",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8F6F4]">
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
            Nos services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#221E1F]">
            Des services IT pour sécuriser et moderniser vos plateformes
          </h2>
          <p className="mt-4 text-lg text-[#221E1F]/70 max-w-2xl mx-auto">
            SMART2D intervient sur les environnements techniques sensibles avec une 
            approche complète : comprendre l&apos;existant, identifier les risques, 
            stabiliser et accompagner.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block h-full bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E5E0DC] hover:border-[#EE3329]/30"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-[#221E1F] flex items-center justify-center mb-4 group-hover:bg-[#EE3329] transition-colors">
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#221E1F] mb-2 group-hover:text-[#EE3329] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#221E1F]/80 text-sm font-medium leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="mt-4 flex items-center text-[#EE3329] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#221E1F] text-white font-semibold rounded-lg hover:bg-[#2d2829] transition-all group"
          >
            Voir tous nos services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
