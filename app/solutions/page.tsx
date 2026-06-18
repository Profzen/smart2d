import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SolutionsContent } from "./solutions-content"

export const metadata: Metadata = {
  title: "Solutions SMART2D | OSCAR & Smart Transfert",
  description: "Découvrez OSCAR, plateforme d'observabilité et d'automatisation IT augmentée par l'IA, et Smart Transfert, solution de centralisation pour agences de transfert d'argent.",
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
