"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { HeroDecoration } from "@/components/ui/hero-decoration"
import { 
  ArrowRight, 
  Activity, 
  Bell,
  Bot,
  Zap,
  BarChart3,
  Cpu,
  Server,
  Send,
  Receipt,
  Users,
  FileText,
  History,
  Settings,
  CheckCircle,
  AlertTriangle,
  Clock,
  TrendingUp
} from "lucide-react"

const oscarProblems = [
  "Trop de journaux, métriques et alertes dispersés dans plusieurs outils",
  "Difficulté à identifier rapidement la cause d'un incident",
  "Supervision souvent réactive plutôt que proactive",
  "Tâches répétitives réalisées manuellement par les équipes",
  "Coûts élevés de certains outils commerciaux de monitoring",
]

const oscarBenefits = [
  "Supervision centralisée des environnements critiques",
  "Détection proactive d'anomalies et meilleure priorisation",
  "Automatisation de tâches récurrentes ou de scripts",
  "Rapports opérationnels plus lisibles",
  "Architecture conteneurisée et intégration open source",
]

const oscarFeatures = [
  { icon: Cpu, label: "Inventaire IT complet" },
  { icon: Activity, label: "Agents de supervision" },
  { icon: Bell, label: "Règles d'alertes" },
  { icon: Zap, label: "Automatisation" },
  { icon: BarChart3, label: "Rapports & tendances" },
  { icon: Bot, label: "IA / AIOps" },
]

const smartTransfertProblems = [
  "Multiplication des applications selon les prestataires",
  "Perte de temps lors du passage d'un outil à l'autre",
  "Risque d'erreurs de saisie ou d'oublis",
  "Rapports de fin de journée manuels et difficiles",
  "Besoin de meilleure traçabilité des opérations",
]

const smartTransfertBenefits = [
  "Une interface unique pour simplifier le travail",
  "Parcours d'envoi et de retrait plus lisibles",
  "Rapports comptables plus fiables et plus rapides",
  "Historique des transactions consultable",
  "Réduction des erreurs et meilleure maîtrise",
]

const smartTransfertFeatures = [
  { icon: BarChart3, label: "Tableau de bord" },
  { icon: Send, label: "Parcours d'envoi" },
  { icon: Receipt, label: "Parcours de retrait" },
  { icon: FileText, label: "Rapports comptables" },
  { icon: History, label: "Historique" },
  { icon: Users, label: "Gestion utilisateurs" },
]

export function SolutionsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#F8F6F4] via-[#F0ECE8] to-[#F8F6F4] overflow-hidden">
        <HeroDecoration pageType="solutions" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              Nos solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#221E1F] leading-tight">
              Des solutions conçues pour simplifier les opérations
            </h1>
            <p className="mt-6 text-xl text-[#221E1F]/70 leading-relaxed">
              En complément de ses services de conseil, SMART2D conçoit et intègre des 
              solutions qui répondent à des problèmes opérationnels concrets : supervision 
              intelligente, automatisation, centralisation des opérations, rapports fiables 
              et réduction des erreurs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OSCAR */}
      <section id="oscar" className="py-20 bg-[#17233A] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#EE3329] flex items-center justify-center">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-xs font-mono text-white/50 bg-white/10 px-2 py-1 rounded">
                  SUPERVISION & AIOPS
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">OSCAR</h2>
              </div>
            </div>
            <p className="text-xl text-white/70 max-w-3xl">
              Plateforme d&apos;observabilité, de supervision et d&apos;automatisation IT 
              augmentée par l&apos;IA. OSCAR aide les équipes à surveiller leurs serveurs, 
              applications, bases de données et équipements, à détecter plus tôt les 
              anomalies et à automatiser certaines actions opérationnelles.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Problems */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#EE3329]" />
                Problèmes traités
              </h3>
              <div className="space-y-3">
                {oscarProblems.map((problem, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10"
                  >
                    <span className="text-[#EE3329]">•</span>
                    <span className="text-white/70">{problem}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#2F6B4F]" />
                Bénéfices
              </h3>
              <div className="space-y-3">
                {oscarBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-[#2F6B4F]/20 rounded-lg border border-[#2F6B4F]/30"
                  >
                    <CheckCircle className="w-5 h-5 text-[#2F6B4F] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <h3 className="text-lg font-semibold text-white mb-6">Fonctionnalités principales</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {oscarFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EE3329]/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-[#EE3329]" />
                  </div>
                  <span className="text-sm text-white/70 text-center">{feature.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Future demo note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10"
          >
            <p className="text-white/50 text-sm flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Une démo OSCAR sera disponible prochainement : vidéo, captures commentées ou parcours interactif.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Smart Transfert */}
      <section id="smart-transfert" className="py-20 bg-[#F8F6F4] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#2F6B4F] flex items-center justify-center">
                <Send className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#2F6B4F] bg-[#2F6B4F]/10 px-2 py-1 rounded">
                  TRANSFERT D&apos;ARGENT
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#221E1F] mt-2">Smart Transfert</h2>
              </div>
            </div>
            <p className="text-xl text-[#221E1F]/70 max-w-3xl">
              Plateforme de centralisation conçue pour les agences ou points de service 
              qui gèrent plusieurs prestataires de transfert d&apos;argent. Elle permet aux 
              agents de travailler dans une interface unique, de réduire les erreurs, 
              de fiabiliser les rapports et de renforcer la traçabilité des opérations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Problems */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-[#221E1F] mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#EE3329]" />
                Problèmes traités
              </h3>
              <div className="space-y-3">
                {smartTransfertProblems.map((problem, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg border border-[#E5E0DC] shadow-sm"
                  >
                    <span className="text-[#EE3329]">•</span>
                    <span className="text-[#221E1F]/70">{problem}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-[#221E1F] mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#2F6B4F]" />
                Bénéfices
              </h3>
              <div className="space-y-3">
                {smartTransfertBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-[#2F6B4F]/10 rounded-lg border border-[#2F6B4F]/20"
                  >
                    <CheckCircle className="w-5 h-5 text-[#2F6B4F] flex-shrink-0 mt-0.5" />
                    <span className="text-[#221E1F]/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <h3 className="text-lg font-semibold text-[#221E1F] mb-6">Fonctionnalités principales</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {smartTransfertFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-[#E5E0DC] shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2F6B4F]/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-[#2F6B4F]" />
                  </div>
                  <span className="text-sm text-[#221E1F]/70 text-center">{feature.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#221E1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Vous souhaitez découvrir OSCAR ou Smart Transfert ?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Contactez SMART2D pour organiser une présentation adaptée à votre contexte.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#EE3329] text-white font-semibold rounded-lg hover:bg-[#d62d24] transition-all shadow-lg shadow-[#EE3329]/25 group"
            >
              Demander une présentation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
