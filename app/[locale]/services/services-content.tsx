"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  Database,
  Shield,
  Cloud,
  Terminal,
  HardDrive,
  Cpu,
  RefreshCw,
  GraduationCap,
} from "lucide-react"
import { HeroAnchors, Anchor } from "@/components/ui/hero-anchors"
import { HeroDecoration } from "@/components/ui/hero-decoration"

const servicesAnchors: Anchor[] = [
  { id: "domaines", title: "Domaines d'intervention" },
  { id: "demarche", title: "Notre Démarche" },
]

const services = [
  {
    id: "oracle-database-middleware",
    icon: Database,
    title: "Oracle Database & Middleware",
    description: "Administration, optimisation, sauvegarde, haute disponibilité, sécurité et maintien en condition opérationnelle des environnements Oracle.",
    color: "bg-[#EE3329]",
  },
  {
    id: "cloud-oci-hybrides",
    icon: Cloud,
    title: "Cloud OCI & architectures hybrides",
    description: "Architecture, migration, exploitation, sauvegarde, PRA/PCA, supervision et optimisation des coûts sur Oracle Cloud Infrastructure.",
    color: "bg-[#17233A]",
  },
  {
    id: "bases-de-donnees-critiques",
    icon: HardDrive,
    title: "Bases de données critiques",
    description: "Installation, tuning, monitoring, sauvegarde et restauration sur Oracle, MySQL, PostgreSQL, SQL Server et environnements associés.",
    color: "bg-[#2F6B4F]",
  },
  {
    id: "linux-unix",
    icon: Terminal,
    title: "Linux / Unix",
    description: "Administration, durcissement, patching, logs, accès, automatisation et supervision sur Oracle Linux, Red Hat, AIX, Solaris.",
    color: "bg-[#17233A]",
  },
  {
    id: "audit-securite-performance",
    icon: Shield,
    title: "Audit, sécurité & performance",
    description: "Analyse des risques, vérification des configurations, recommandations opérationnelles et plans de remédiation priorisés.",
    color: "bg-[#EE3329]",
  },
  {
    id: "ia-automatisation",
    icon: Cpu,
    title: "Intelligence Artificielle & Automatisation",
    description: "Intégrer des technologies intelligentes et des scripts automatisés pour éliminer les tâches répétitives et booster la productivité de vos équipes.",
    color: "bg-[#17233A]",
  },
  {
    id: "migration-modernisation",
    icon: RefreshCw,
    title: "Migration & modernisation",
    description: "Migration vers OCI, montées de version Oracle, transformation des architectures et modernisation des plateformes.",
    color: "bg-[#2F6B4F]",
  },
  {
    id: "support-formation",
    icon: GraduationCap,
    title: "Support & formation",
    description: "Assistance technique, accompagnement ponctuel ou continu, formation Oracle, bases de données, Linux/Unix et transfert de compétences pour vos équipes.",
    color: "bg-[#17233A]",
  },
]

const approach = [
  "Diagnostic de l'existant et compréhension du contexte métier",
  "Identification des risques techniques et opérationnels",
  "Plan d'action priorisé : urgence, stabilisation, optimisation, modernisation",
  "Mise en œuvre, documentation et transfert de compétences",
  "Suivi post-intervention et recommandations d'amélioration continue",
]

export function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#F8F6F4] via-[#F0ECE8] to-[#F8F6F4] overflow-hidden">
        <HeroDecoration pageType="services" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <HeroAnchors anchors={servicesAnchors} />

            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              Nos services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#221E1F] leading-tight">
              Des services IT pour sécuriser, maintenir et moderniser vos plateformes
            </h1>
            <p className="mt-6 text-xl text-[#221E1F]/70 leading-relaxed">
              SMART2D intervient sur les environnements techniques sensibles avec une 
              approche complète : comprendre l&apos;existant, identifier les risques, stabiliser 
              les plateformes, améliorer les performances et accompagner les équipes dans la durée.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="domaines" className="py-20 bg-[#F8F6F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              Nos domaines d&apos;intervention
            </span>
          </div>
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#E5E0DC] scroll-mt-32"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#221E1F] mb-4">{service.title}</h2>
                    <p className="text-[#221E1F]/70 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="demarche" className="py-20 bg-[#221E1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
                Notre approche
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Une méthodologie éprouvée
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                Chaque intervention suit une démarche structurée pour garantir 
                des résultats concrets et durables.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {approach.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="w-8 h-8 rounded-full bg-[#EE3329] flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-white/80">{step}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F0ECE8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#221E1F] mb-4">
              Prêt à sécuriser et optimiser vos infrastructures ?
            </h2>
            <p className="text-[#221E1F]/70 text-lg mb-8">
              Contactez SMART2D dès aujourd'hui pour concevoir votre solution sur mesure.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#EE3329] text-white font-semibold rounded-lg hover:bg-[#d62d24] transition-all shadow-lg shadow-[#EE3329]/25 group"
            >
              Contacter SMART2D
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
