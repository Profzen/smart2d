"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Lightbulb, 
  Shield, 
  Users, 
  Zap,
  Award,
  Activity,
  Send,
  Bell,
  Bot,
  BarChart3,
  Receipt,
  FileText,
  History,
  Cpu
} from "lucide-react"
import { HeroAnchors, Anchor } from "@/components/ui/hero-anchors"
import { HeroDecoration } from "@/components/ui/hero-decoration"

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

const solutions = [
  {
    icon: Activity,
    title: "OSCAR",
    subtitle: "Supervision & AIOps",
    description: "Plateforme d'observabilité, de supervision et d'automatisation IT augmentée par l'IA.",
    longDescription: "OSCAR aide les équipes à surveiller leurs serveurs, applications, bases de données et équipements, à détecter plus tôt les anomalies et à automatiser certaines actions opérationnelles.",
    features: oscarFeatures,
    href: "/solutions#oscar",
    accent: "bg-[#17233A]",
    iconBg: "bg-[#EE3329]",
    iconColor: "text-white",
    linkText: "Découvrir OSCAR",
    featureIconColor: "text-[#17233A]",
  },
  {
    icon: Send,
    title: "Smart Transfert",
    subtitle: "Transfert d'argent",
    description: "Plateforme de centralisation des opérations pour agences de transfert d'argent.",
    longDescription: "Smart Transfert permet aux agents de travailler dans une interface unique, de réduire les erreurs, de fiabiliser les rapports et de renforcer la traçabilité des opérations.",
    features: smartTransfertFeatures,
    href: "/solutions#smart-transfert",
    accent: "bg-[#2F6B4F]",
    iconBg: "bg-white",
    iconColor: "text-[#2F6B4F]",
    linkText: "Découvrir Smart Transfert",
    featureIconColor: "text-[#2F6B4F]",
  },
]

const aboutAnchors: Anchor[] = [
  { id: "experience", title: "Notre Expérience" },
  { id: "mission", title: "Mission & Vision" },
  { id: "valeurs", title: "Nos Valeurs" },
  { id: "equipe", title: "Notre Équipe" },
]

const values = [
  {
    icon: Award,
    title: "Expertise",
    description: "Une maîtrise technique des environnements Oracle, bases de données, Linux/Unix, cloud et supervision.",
    color: "bg-[#EE3329]",
  },
  {
    icon: Shield,
    title: "Fiabilité",
    description: "Des interventions orientées continuité de service, stabilité et maîtrise des risques.",
    color: "bg-[#17233A]",
  },
  {
    icon: Shield,
    title: "Sécurité",
    description: "Une attention constante aux accès, configurations, sauvegardes, durcissement et bonnes pratiques.",
    color: "bg-[#2F6B4F]",
  },
  {
    icon: Users,
    title: "Transmission",
    description: "Un accompagnement qui renforce l'autonomie des équipes internes.",
    color: "bg-[#17233A]",
  },
  {
    icon: Lightbulb,
    title: "Innovation utile",
    description: "Des solutions modernes, mais toujours reliées à un besoin opérationnel réel.",
    color: "bg-[#EE3329]",
  },
]

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#F8F6F4] via-[#F0ECE8] to-[#F8F6F4] overflow-hidden">
        <HeroDecoration pageType="about" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <HeroAnchors anchors={aboutAnchors} />

            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              À propos
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#221E1F] leading-tight">
              Un partenaire IT pour les infrastructures critiques
            </h1>
            <p className="mt-6 text-xl text-[#221E1F]/70 leading-relaxed">
              SMART2D Services est un cabinet de conseil technologique 
              spécialisé dans l&apos;administration, l&apos;audit, la sécurisation, l&apos;optimisation 
              et le maintien en condition opérationnelle des plateformes informatiques critiques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 bg-[#221E1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              Notre Expérience
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-[#EE3329] text-7xl md:text-9xl font-bold">20+</div>
              <p className="text-white text-2xl font-semibold mt-2">années d&apos;expérience Oracle</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-white/70 text-lg leading-relaxed">
                Fort de plus de 20 ans d&apos;expérience autour des environnements Oracle, 
                SMART2D accompagne les organisations qui souhaitent renforcer la stabilité, 
                la performance et la sécurité de leurs systèmes d&apos;information.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mt-4">
                Notre valeur repose sur une combinaison de conseil, d&apos;expertise terrain 
                et de transfert de compétences. Nous ne nous limitons pas à intervenir 
                après les incidents : nous aidons les équipes à mieux comprendre leurs 
                environnements, à réduire les risques et à améliorer durablement leur exploitation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20 bg-[#F8F6F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              Notre Mission & Vision
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#E5E0DC]"
            >
              <div className="w-14 h-14 rounded-xl bg-[#EE3329] flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#221E1F] mb-4">Notre Mission</h2>
              <p className="text-[#221E1F]/70 leading-relaxed">
                Aider les organisations à sécuriser, optimiser et moderniser leurs 
                infrastructures critiques afin de garantir la continuité de service, 
                la performance et la maîtrise des opérations.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#E5E0DC]"
            >
              <div className="w-14 h-14 rounded-xl bg-[#17233A] flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#221E1F] mb-4">Notre Vision</h2>
              <p className="text-[#221E1F]/70 leading-relaxed">
                Accompagner les entreprises vers une exploitation plus proactive, plus 
                supervisée et plus intelligente de leurs environnements IT, en combinant 
                expertise Oracle, bonnes pratiques d&apos;infrastructure, cloud, automatisation et support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-[#F8F6F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              Solutions SMART2D
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#221E1F]">
              Des solutions qui accélèrent vos opérations
            </h2>
            <p className="mt-4 text-lg text-[#221E1F]/70 max-w-2xl mx-auto">
              En complément de notre conseil, nous proposons des plateformes prêtes à l&apos;emploi
              pour la supervision IT et les transferts d&apos;argent.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#E5E0DC]"
              >
                {/* Header */}
                <div className={`${solution.accent} p-6`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg ${solution.iconBg} flex items-center justify-center`}>
                      <solution.icon className={`w-5 h-5 ${solution.iconColor}`} />
                    </div>
                    <span className="text-xs font-mono text-white/50 bg-white/10 px-2 py-1 rounded">
                      {solution.subtitle.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                  <p className="mt-2 text-white/70">{solution.description}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[#221E1F]/70 mb-6">{solution.longDescription}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {solution.features.map((feature) => (
                      <div
                        key={feature.label}
                        className="flex items-center gap-2 p-3 bg-[#F8F6F4] rounded-lg"
                      >
                        <feature.icon className={`w-4 h-4 ${solution.featureIconColor}`} />
                        <span className="text-sm text-[#221E1F]">{feature.label}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={solution.href}
                    className={`inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all ${
                      solution.title === "OSCAR" ? "text-[#EE3329]" : "text-[#2F6B4F]"
                    }`}
                  >
                    {solution.linkText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="valeurs" className="py-20 bg-[#F0ECE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              Nos valeurs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#221E1F]">
              Ce qui guide notre action
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-xl p-6 shadow-sm border border-[#E5E0DC] ${index === values.length - 1 && values.length % 3 !== 0 ? 'lg:col-span-1 lg:col-start-2' : ''}`}
              >
                <div className={`w-12 h-12 rounded-lg ${value.color} flex items-center justify-center mb-4`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#221E1F] mb-2">{value.title}</h3>
                <p className="text-[#221E1F]/60 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipe" className="py-20 bg-[#17233A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#EE3329] flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Une équipe orientée terrain
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Capable d&apos;intervenir sur des environnements sensibles et d&apos;accompagner 
              les équipes techniques dans la durée. Notre force réside dans notre 
              capacité à comprendre les enjeux métiers et à proposer des solutions 
              adaptées à chaque contexte.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F8F6F4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#221E1F] mb-4">
              Vous souhaitez mieux comprendre notre approche ?
            </h2>
            <p className="text-[#221E1F]/70 text-lg mb-8">
              Contactez SMART2D pour échanger sur vos enjeux Oracle, infrastructure ou supervision.
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
