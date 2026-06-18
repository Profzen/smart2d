"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Activity, 
  Cpu,
  BarChart3,
  Bell,
  Zap,
  Bot,
  ArrowRight,
  Send,
  Receipt,
  Users,
  FileText,
  History
} from "lucide-react"

const oscarFeatures = [
  { icon: Activity, label: "Supervision centralisée" },
  { icon: Bell, label: "Alertes proactives" },
  { icon: Bot, label: "Détection d'anomalies IA" },
  { icon: Zap, label: "Automatisation" },
  { icon: BarChart3, label: "Rapports & tableaux" },
  { icon: Cpu, label: "Inventaire IT" },
]

const smartTransfertFeatures = [
  { icon: Send, label: "Parcours d'envoi" },
  { icon: Receipt, label: "Parcours de retrait" },
  { icon: FileText, label: "Rapports comptables" },
  { icon: History, label: "Historique complet" },
  { icon: Users, label: "Gestion utilisateurs" },
  { icon: BarChart3, label: "Traçabilité" },
]

export function SolutionsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F0ECE8]">
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
            Solutions SMART2D
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#221E1F]">
            Des solutions pour simplifier vos opérations
          </h2>
          <p className="mt-4 text-lg text-[#221E1F]/70 max-w-2xl mx-auto">
            En complément de ses services de conseil, SMART2D conçoit et intègre 
            des solutions qui répondent à des problèmes opérationnels concrets.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* OSCAR */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="oscar"
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#E5E0DC]"
          >
            {/* Header */}
            <div className="bg-[#17233A] p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#EE3329] flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-mono text-white/50 bg-white/10 px-2 py-1 rounded">
                  SUPERVISION & AIOPS
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">OSCAR</h3>
              <p className="mt-2 text-white/70">
                Plateforme d&apos;observabilité, de supervision et d&apos;automatisation IT 
                augmentée par l&apos;IA.
              </p>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-[#221E1F]/70 mb-6">
                OSCAR aide les équipes à surveiller leurs serveurs, applications, 
                bases de données et équipements, à détecter plus tôt les anomalies 
                et à automatiser certaines actions opérationnelles.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {oscarFeatures.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-2 p-3 bg-[#F8F6F4] rounded-lg"
                  >
                    <feature.icon className="w-4 h-4 text-[#17233A]" />
                    <span className="text-sm text-[#221E1F]">{feature.label}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/solutions#oscar"
                className="inline-flex items-center gap-2 text-[#EE3329] font-semibold hover:gap-3 transition-all"
              >
                Découvrir OSCAR
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Smart Transfert */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="smart-transfert"
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#E5E0DC]"
          >
            {/* Header */}
            <div className="bg-[#2F6B4F] p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                  <Send className="w-5 h-5 text-[#2F6B4F]" />
                </div>
                <span className="text-xs font-mono text-white/50 bg-white/10 px-2 py-1 rounded">
                  TRANSFERT D&apos;ARGENT
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">Smart Transfert</h3>
              <p className="mt-2 text-white/70">
                Plateforme de centralisation des opérations pour agences de 
                transfert d&apos;argent.
              </p>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-[#221E1F]/70 mb-6">
                Smart Transfert permet aux agents de travailler dans une interface 
                unique, de réduire les erreurs, de fiabiliser les rapports et de 
                renforcer la traçabilité des opérations.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {smartTransfertFeatures.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-2 p-3 bg-[#F8F6F4] rounded-lg"
                  >
                    <feature.icon className="w-4 h-4 text-[#2F6B4F]" />
                    <span className="text-sm text-[#221E1F]">{feature.label}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/solutions#smart-transfert"
                className="inline-flex items-center gap-2 text-[#2F6B4F] font-semibold hover:gap-3 transition-all"
              >
                Découvrir Smart Transfert
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#221E1F] text-white font-semibold rounded-lg hover:bg-[#2d2829] transition-all group"
          >
            Voir toutes nos solutions
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
