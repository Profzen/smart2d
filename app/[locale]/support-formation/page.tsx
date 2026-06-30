import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SupportFormationContent } from "./support-formation-content"

export const metadata: Metadata = {
  title: "Support Oracle, MCO et formation IT | SMART2D Services",
  description: "SMART2D accompagne les équipes avec du support Oracle, Linux/Unix, bases de données, MCO, supervision, formation, transfert de compétences et OSCAR Academy.",
}

export default function SupportFormationPage() {
  return (
    <>
      <Header />
      <main>
        <SupportFormationContent />
      </main>
      <Footer />
    </>
  )
}
