"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  ArrowRight, 
  Headphones, 
  Database,
  Terminal,
  Activity,
  GraduationCap,
  BookOpen,
  FileText,
  Users,
  Clock,
  CheckCircle
} from "lucide-react"

const prestations = [
  {
    icon: Database,
    title: "Support Oracle Database et bases de données",
    description: "Assistance technique sur les environnements Oracle, MySQL, PostgreSQL et SQL Server. Diagnostic, résolution d'incidents, accompagnement des opérations sensibles.",
    color: "bg-[#EE3329]",
  },
  {
    icon: Terminal,
    title: "Assistance Linux/Unix et infrastructures",
    description: "Support sur les socles Oracle Linux, Red Hat, AIX, Solaris. Administration, configuration, dépannage, durcissement et optimisation.",
    color: "bg-[#17233A]",
  },
  {
    icon: Activity,
    title: "Maintien en condition opérationnelle (MCO)",
    description: "Supervision continue, suivi des alertes, rapports périodiques, prévention des incidents et amélioration continue de l'exploitation.",
    color: "bg-[#2F6B4F]",
  },
  {
    icon: GraduationCap,
    title: "Formation Oracle et bases de données",
    description: "Formations adaptées aux besoins des équipes : administration Oracle, tuning, sauvegarde/restauration, RAC, Data Guard, OCI.",
    color: "bg-[#EE3329]",
  },
  {
    icon: Users,
    title: "Transfert de compétences",
    description: "Accompagnement des équipes internes pour renforcer leur autonomie sur les environnements Oracle, bases de données et Linux/Unix.",
    color: "bg-[#17233A]",
  },
  {
    icon: FileText,
    title: "Documentation opérationnelle",
    description: "Rédaction et mise à jour des procédures d'exploitation, des guides techniques et de la documentation des environnements.",
    color: "bg-[#2F6B4F]",
  },
]

const supportModes = [
  {
    icon: Clock,
    title: "Assistance ponctuelle",
    description: "Intervention ciblée sur un incident, une opération sensible ou un besoin précis.",
  },
  {
    icon: Headphones,
    title: "Support continu",
    description: "Accompagnement régulier avec suivi, reporting et disponibilité pour les équipes.",
  },
  {
    icon: BookOpen,
    title: "Formation sur mesure",
    description: "Sessions adaptées au contexte et aux besoins spécifiques de vos équipes.",
  },
]

export function SupportFormationContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F8F6F4] via-[#F0ECE8] to-[#F8F6F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              Support & Formation
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#221E1F] leading-tight">
              Un accompagnement continu pour vos équipes
            </h1>
            <p className="mt-6 text-xl text-[#221E1F]/70 leading-relaxed">
              La performance d&apos;une infrastructure ne dépend pas uniquement des outils 
              installés. Elle dépend aussi de la qualité du support, de la méthode 
              d&apos;exploitation et de l&apos;autonomie des équipes internes.
            </p>
            <p className="mt-4 text-[#221E1F]/60 leading-relaxed">
              SMART2D accompagne les équipes techniques et métiers avec du support, 
              de la supervision, du maintien en condition opérationnelle, de la formation 
              et du transfert de compétences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-20 bg-[#F8F6F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              Nos prestations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#221E1F]">
              Support, formation et accompagnement
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prestations.map((prestation, index) => (
              <motion.div
                key={prestation.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E0DC] hover:shadow-lg hover:border-[#EE3329]/20 transition-all"
              >
                <div className={`w-12 h-12 rounded-lg ${prestation.color} flex items-center justify-center mb-4`}>
                  <prestation.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#221E1F] mb-2">{prestation.title}</h3>
                <p className="text-[#221E1F]/60 text-sm leading-relaxed">{prestation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Modes */}
      <section className="py-20 bg-[#221E1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              Modes d&apos;intervention
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Une approche flexible selon vos besoins
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportModes.map((mode, index) => (
              <motion.div
                key={mode.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#EE3329] flex items-center justify-center mx-auto mb-4">
                  <mode.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{mode.title}</h3>
                <p className="text-white/60">{mode.description}</p>
              </motion.div>
            ))}
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
              Vous souhaitez renforcer vos équipes ou sécuriser l&apos;exploitation ?
            </h2>
            <p className="text-[#221E1F]/70 text-lg mb-8">
              SMART2D peut vous accompagner en support ponctuel ou continu.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#EE3329] text-white font-semibold rounded-lg hover:bg-[#d62d24] transition-all shadow-lg shadow-[#EE3329]/25 group"
            >
              Nous contacter
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
