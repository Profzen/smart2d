import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SolutionsContent } from "./solutions-content"

export const metadata: Metadata = {
  title: "Solutions SMART2D | OSCAR AIOps et Smart Transfert",
  description: "Découvrez les solutions SMART2D : OSCAR pour l'observabilité, l'automatisation IT et OSCAR Academy, ainsi que Smart Transfert pour la centralisation des opérations d'agences de transfert d'argent.",
}

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main>
        <SolutionsContent />
      </main>
      <Footer />
    </>
  )
}
