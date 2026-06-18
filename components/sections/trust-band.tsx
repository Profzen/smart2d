"use client"

import { motion } from "framer-motion"
import { Database, Cloud, Server, Shield, Headphones, Clock } from "lucide-react"

const stats = [
  {
    icon: Clock,
    value: "30+",
    label: "ans d'expérience Oracle",
  },
  {
    icon: Database,
    value: "Oracle",
    label: "Database & OCI",
  },
  {
    icon: Server,
    value: "Linux",
    label: "Unix & systèmes",
  },
  {
    icon: Shield,
    value: "Infra",
    label: "critiques & HA",
  },
  {
    icon: Headphones,
    value: "Support",
    label: "& formation",
  },
]

export function TrustBand() {
  return (
    <section className="bg-[#221E1F] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-[#EE3329]/20 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-[#EE3329]" />
              </div>
              <div>
                <p className="font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/60">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
