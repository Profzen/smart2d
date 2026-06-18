import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SupportFormationContent } from "./support-formation-content"

export const metadata: Metadata = {
  title: "Support et Formation Oracle, bases de données et Linux | SMART2D Services",
  description: "Support technique, formation Oracle, bases de données, Linux/Unix, transfert de compétences et maintien en condition opérationnelle par SMART2D Services.",
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
