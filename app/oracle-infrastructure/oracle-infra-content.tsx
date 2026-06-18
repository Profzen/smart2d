"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  ArrowRight, 
  Database, 
  Server,
  Shield,
  Cloud,
  Zap,
  RefreshCw,
  HardDrive,
  Lock,
  Activity,
  Gauge,
  CheckCircle
} from "lucide-react"
import { HeroAnchors, Anchor } from "@/components/ui/hero-anchors"

const oracleAnchors: Anchor[] = [
  { id: "expertises", title: "Expertises" },
  { id: "avantages", title: "Nos Avantages" },
  { id: "mco", title: "Approche MCO" },
]

const technologies = [
  "Oracle Database",
  "Oracle RAC",
  "Data Guard",
  "RMAN",
  "ASM",
  "Grid Infrastructure",
  "WebLogic Server",
  "Oracle Forms",
  "Oracle Linux",
  "Red Hat",
  "AIX",
  "Solaris",
  "Oracle Cloud Infrastructure (OCI)",
  "MySQL",
  "PostgreSQL",
  "SQL Server",
]

const sections = [
  {
    icon: Database,
    title: "Administration Oracle Database",
    description: "SMART2D intervient sur les opérations d'administration courante et avancée : installation, configuration, gestion des instances, supervision, sauvegarde, restauration, patching, tuning, analyse des incidents et documentation des environnements.",
    color: "bg-[#EE3329]",
  },
  {
    icon: Server,
    title: "Haute disponibilité et continuité",
    description: "Les environnements critiques doivent être pensés pour résister aux incidents. SMART2D accompagne la mise en place et l'exploitation de mécanismes de disponibilité, de réplication, de sauvegarde et de reprise d'activité.",
    items: ["Oracle RAC", "Data Guard", "RMAN", "ASM", "Grid Infrastructure", "Sauvegarde, restauration, PRA/PCA"],
    color: "bg-[#17233A]",
  },
  {
    icon: Zap,
    title: "Performance et optimisation",
    description: "Une base de données mal optimisée peut ralentir toute une chaîne métier. SMART2D analyse les requêtes, les ressources, les paramètres, les index, les événements d'attente et les pratiques d'exploitation afin de proposer des actions concrètes.",
    color: "bg-[#2F6B4F]",
  },
  {
    icon: Lock,
    title: "Sécurité Oracle et système",
    description: "La sécurité ne dépend pas uniquement d'un outil. Elle repose aussi sur la configuration, la gestion des accès, les permissions, les sauvegardes, les journaux, le durcissement système et le suivi régulier des bonnes pratiques.",
    color: "bg-[#EE3329]",
  },
  {
    icon: Cloud,
    title: "Cloud OCI et modernisation",
    description: "SMART2D accompagne les trajectoires vers Oracle Cloud Infrastructure : architecture, migration, intégration hybride, sécurité cloud, sauvegarde, supervision, optimisation des coûts et continuité de service.",
    color: "bg-[#17233A]",
  },
  {
    icon: HardDrive,
    title: "Linux / Unix autour d'Oracle",
    description: "Les bases Oracle reposent sur des socles systèmes qu'il faut maîtriser. SMART2D intervient sur Oracle Linux, Red Hat, AIX, Solaris et environnements Unix/Linux pour l'administration, le durcissement, les logs, les accès, le patching et la supervision.",
    color: "bg-[#2F6B4F]",
  },
]

export function OracleInfraContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#17233A] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EE3329]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <HeroAnchors anchors={oracleAnchors} />

            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              Notre expertise principale
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Oracle, bases de données et infrastructures critiques
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">
              Les environnements Oracle supportent souvent les applications les plus 
              sensibles d&apos;une organisation : données métiers, transactions, reporting, 
              services numériques, applications internes et plateformes de production. 
              Leur disponibilité, leur performance et leur sécurité ont un impact direct 
              sur l&apos;activité.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              SMART2D accompagne les entreprises dans la conception, l&apos;administration, 
              l&apos;audit, la migration, la supervision et l&apos;optimisation de leurs plateformes 
              Oracle et des socles techniques qui les entourent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section id="expertises" className="py-20 bg-[#F8F6F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#E5E0DC]"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className={`w-14 h-14 rounded-xl ${section.color} flex items-center justify-center flex-shrink-0`}>
                    <section.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#221E1F] mb-4">{section.title}</h2>
                    <p className="text-[#221E1F]/70 leading-relaxed">{section.description}</p>
                    
                    {section.items && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {section.items.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F0ECE8] text-[#221E1F]/70 text-sm rounded-full"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-[#2F6B4F]" />
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="avantages" className="py-20 bg-[#F0ECE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              Technologies maîtrisées
            </span>
            <h2 className="text-3xl font-bold text-[#221E1F]">
              Un écosystème complet
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white text-[#221E1F] rounded-full border border-[#E5E0DC] text-sm font-medium hover:border-[#EE3329]/50 hover:shadow-md transition-all"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Approach */}
      <section id="mco" className="py-20 bg-[#221E1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Vous exploitez un environnement Oracle critique ?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Demandez un audit ou un échange technique pour identifier les risques, 
              les priorités et les actions de stabilisation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#EE3329] text-white font-semibold rounded-lg hover:bg-[#d62d24] transition-all shadow-lg shadow-[#EE3329]/25 group"
            >
              Demander un audit Oracle
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
