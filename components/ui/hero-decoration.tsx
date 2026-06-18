"use client"

import { motion } from "framer-motion"
import { LucideIcon, Server, Shield, Activity, Users, Database } from "lucide-react"

interface StatCardProps {
  icon: LucideIcon
  title: string
  subtitle: string
  delay?: number
  position: string // e.g. "top-10 right-10"
}

function StatCard({ icon: Icon, title, subtitle, delay = 0, position }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      className={`absolute ${position} z-20 bg-white/90 backdrop-blur-md border border-[#E5E0DC] p-4 rounded-xl shadow-xl flex items-center gap-4 w-64`}
    >
      <div className="w-12 h-12 rounded-full bg-[#F8F6F4] flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-[#EE3329]" />
      </div>
      <div>
        <div className="font-bold text-[#221E1F] text-lg leading-tight">{title}</div>
        <div className="text-sm text-[#221E1F]/70 leading-tight">{subtitle}</div>
      </div>
    </motion.div>
  )
}

interface HeroDecorationProps {
  pageType: "about" | "oracle" | "services" | "solutions" | "support" | "contact"
}

export function HeroDecoration({ pageType }: HeroDecorationProps) {
  // Dot pattern background
  const dotPattern = (
    <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#221E1F 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
  )
  
  // Halos
  const halos = (
    <>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#EE3329]/10 rounded-full blur-3xl z-0 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#17233A]/10 rounded-full blur-3xl z-0" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite reverse' }} />
    </>
  )

  const content = {
    about: (
      <>
        {dotPattern}
        {halos}
        <StatCard icon={Users} title="30+ Années" subtitle="d'expertise cumulée" position="top-10 right-[10%]" delay={0.2} />
        <StatCard icon={Activity} title="100%" subtitle="Engagement client" position="bottom-20 right-[25%]" delay={0.4} />
      </>
    ),
    oracle: (
      <>
        {/* On Oracle, the background is dark (#17233A), so we use light dots and halos */}
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFFFFF 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#EE3329]/20 rounded-full blur-3xl z-0 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl z-0" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite reverse' }} />
        
        <StatCard icon={Database} title="Oracle DB" subtitle="Performance & Sécurité" position="top-10 right-[10%]" delay={0.2} />
        <StatCard icon={Server} title="Exadata" subtitle="Optimisation matérielle" position="bottom-20 right-[25%]" delay={0.4} />
      </>
    ),
    services: (
      <>
        {dotPattern}
        {halos}
        <StatCard icon={Shield} title="Sécurisé" subtitle="Infrastructures protégées" position="top-10 right-[10%]" delay={0.2} />
        <StatCard icon={Activity} title="Proactif" subtitle="MCO & Supervision" position="bottom-20 right-[25%]" delay={0.4} />
      </>
    ),
    solutions: (
      <>
        {dotPattern}
        {halos}
        <StatCard icon={Activity} title="OSCAR" subtitle="Supervision centralisée" position="top-10 right-[10%]" delay={0.2} />
        <StatCard icon={Database} title="Smart Transfert" subtitle="Migration sans couture" position="bottom-20 right-[25%]" delay={0.4} />
      </>
    ),
    support: (
      <>
        {dotPattern}
        {halos}
        <StatCard icon={Users} title="SLA 99.9%" subtitle="Disponibilité garantie" position="top-10 right-[10%]" delay={0.2} />
        <StatCard icon={Shield} title="Formations" subtitle="Transfert de compétences" position="bottom-20 right-[25%]" delay={0.4} />
      </>
    ),
    contact: (
      <>
        {dotPattern}
        {halos}
        <StatCard icon={Users} title="Réactivité" subtitle="Réponse sous 24h" position="top-20 right-[15%]" delay={0.2} />
      </>
    )
  }

  return (
    <div className="hidden lg:block absolute inset-0 pointer-events-none">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        {content[pageType]}
      </motion.div>
    </div>
  )
}
