"use client"

import { motion } from "framer-motion"

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
      </>
    ),
    oracle: (
      <>
        {/* On Oracle, the background is dark (#17233A), so we use light dots and halos */}
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFFFFF 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#EE3329]/20 rounded-full blur-3xl z-0 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl z-0" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite reverse' }} />
      </>
    ),
    services: (
      <>
        {dotPattern}
        {halos}
      </>
    ),
    solutions: (
      <>
        {dotPattern}
        {halos}
      </>
    ),
    support: (
      <>
        {dotPattern}
        {halos}
      </>
    ),
    contact: (
      <>
        {dotPattern}
        {halos}
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
