"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, ArrowRight, Send, CheckCircle, AlertCircle, MessageCircle } from "lucide-react"
import { HeroAnchors, Anchor } from "@/components/ui/hero-anchors"
import { HeroDecoration } from "@/components/ui/hero-decoration"



import { useTranslations } from "next-intl";
export function ContactContent() {
  const t = useTranslations("Contact");

  const contactAnchors: Anchor[] = [
    { id: "coordonnees", title: t("anc_coord") },
    { id: "formulaire", title: t("anc_write") },
  ]

  const requestTypes = [
    { key: "req_oracle", label: t("req_oracle") },
    { key: "req_cloud", label: t("req_cloud") },
    { key: "req_audit", label: t("req_audit") },
    { key: "req_linux", label: t("req_linux") },
    { key: "req_supervision", label: t("req_supervision") },
    { key: "req_ia", label: t("req_ia") },
    { key: "req_support", label: t("req_support") },
    { key: "req_oscar", label: t("req_oscar") },
    { key: "req_oscar_academy", label: t("req_oscar_academy") },
    { key: "req_smart", label: t("req_smart") },
    { key: "req_other", label: t("req_other") },
  ]

  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requestType: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi")
      }

      setFormState("success")
      setFormData({ name: "", company: "", email: "", phone: "", requestType: "", message: "" })
    } catch (error) {
      console.error(error)
      setFormState("error")
      // Reset state after 3s so the user can try again
      setTimeout(() => setFormState("idle"), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-20 bg-[#17233A] overflow-hidden">
        <HeroDecoration pageType="oracle" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <HeroAnchors anchors={contactAnchors} />

            <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {t("title")}
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="coordonnees" className="scroll-mt-24 py-20 bg-[#F8F6F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 lg:-mt-20 relative z-10"
            >
              <h2 className="text-2xl font-bold text-[#221E1F] mb-6">{t("coord")}</h2>

              <div className="space-y-4">
                <a
                  href="mailto:contact@smart2dservices.com"
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#E5E0DC] hover:border-[#EE3329]/30 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#EE3329] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#221E1F] group-hover:text-[#EE3329] transition-colors">Email</p>
                    <p className="text-[#221E1F]/60 text-sm">contact@smart2dservices.com</p>
                  </div>
                </a>

                <a
                  href="tel:+22872140923"
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#E5E0DC] hover:border-[#EE3329]/30 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#17233A] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#221E1F] group-hover:text-[#EE3329] transition-colors">{t("tel_tg")}</p>
                    <p className="text-[#221E1F]/60 text-sm">+228 72 14 09 23</p>
                  </div>
                </a>

                <a
                  href="tel:+17324392272"
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#E5E0DC] hover:border-[#EE3329]/30 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#17233A] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#221E1F] group-hover:text-[#EE3329] transition-colors">{t("tel_usa")}</p>
                    <p className="text-[#221E1F]/60 text-sm">+1 732 439 2272</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#E5E0DC]">
                  <div className="w-12 h-12 rounded-lg bg-[#2F6B4F] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#221E1F]">{t("address")}</p>
                    <p className="text-[#221E1F]/60 text-sm">
                      Hedzranawoe, Boulevard du Haho<br />
                      Lomé - Togo
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/22893375155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#E5E0DC] hover:border-[#25D366]/50 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#221E1F] group-hover:text-[#25D366] transition-colors">WhatsApp</p>
                    <p className="text-[#221E1F]/60 text-sm">{t("chat")}</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div id="formulaire" className="bg-white rounded-2xl p-8 shadow-xl border border-[#E5E0DC]/50 lg:-mt-32 relative z-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-[#221E1F] mb-6">{t("send_msg")}</h2>

                {formState === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#2F6B4F] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#221E1F] mb-2">{t("success_title")}</h3>
                    <p className="text-[#221E1F]/60">
                      {t("success_desc")}
                    </p>
                    <button
                      onClick={() => setFormState("idle")}
                      className="mt-8 px-6 py-2 border border-[#E5E0DC] rounded-lg text-sm font-medium hover:bg-[#F8F6F4] transition-colors"
                    >
                      {t("success_btn")}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#221E1F] mb-2">
                          {t("form_name")}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#E5E0DC] bg-[#F8F6F4] focus:border-[#EE3329] focus:ring-2 focus:ring-[#EE3329]/20 transition-all outline-none text-[#221E1F]"
                          placeholder={t("form_name_placeholder")}
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-[#221E1F] mb-2">
                          {t("form_company")}
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#E5E0DC] bg-[#F8F6F4] focus:border-[#EE3329] focus:ring-2 focus:ring-[#EE3329]/20 transition-all outline-none text-[#221E1F]"
                          placeholder={t("form_company_placeholder")}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#221E1F] mb-2">
                          {t("form_email")}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#E5E0DC] bg-[#F8F6F4] focus:border-[#EE3329] focus:ring-2 focus:ring-[#EE3329]/20 transition-all outline-none text-[#221E1F]"
                          placeholder="jean@entreprise.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#221E1F] mb-2">
                          {t("form_phone")}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#E5E0DC] bg-[#F8F6F4] focus:border-[#EE3329] focus:ring-2 focus:ring-[#EE3329]/20 transition-all outline-none text-[#221E1F]"
                          placeholder="+33 6 00 00 00 00"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="requestType" className="block text-sm font-medium text-[#221E1F] mb-2">
                        {t("form_type")}
                      </label>
                      <select
                        id="requestType"
                        name="requestType"
                        required
                        value={formData.requestType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#E5E0DC] bg-[#F8F6F4] focus:border-[#EE3329] focus:ring-2 focus:ring-[#EE3329]/20 transition-all outline-none text-[#221E1F]"
                      >
                        <option value="">{t("form_type_placeholder")}</option>
                        {requestTypes.map((type) => (
                          <option key={type.key} value={type.key}>{type.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#221E1F] mb-2">
                        {t("form_message")}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#E5E0DC] bg-[#F8F6F4] focus:border-[#EE3329] focus:ring-2 focus:ring-[#EE3329]/20 transition-all outline-none text-[#221E1F] resize-none"
                        placeholder={t("form_message_placeholder")}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <p className="text-sm text-[#221E1F]/50">
                        {t("form_desc")}
                      </p>
                      <button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#EE3329] text-white font-semibold rounded-lg hover:bg-[#d62d24] transition-all shadow-lg shadow-[#EE3329]/25 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {formState === "error" ? (
                          <>
                            <AlertCircle className="w-4 h-4" />
                            {t("error_btn")}
                          </>
                        ) : formState === "submitting" ? (
                          <>
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            {t("submitting")}
                          </>
                        ) : (
                          <>
                            {t("form_submit")}
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
