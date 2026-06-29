import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ContactContent } from "./contact-content"

export const metadata: Metadata = {
  title: "Contact SMART2D Services | Diagnostic Oracle, OCI et infrastructures",
  description: "Contactez SMART2D Services pour un besoin Oracle, OCI, bases de données, Linux/Unix, audit, supervision, support, formation, OSCAR, OSCAR Academy, Smart Transfert, IA ou automatisation.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  )
}
