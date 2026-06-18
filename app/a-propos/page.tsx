import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AboutContent } from "./about-content"

export const metadata: Metadata = {
  title: "À propos de SMART2D Services | Conseil Oracle et infrastructures critiques",
  description: "Découvrez SMART2D Services, cabinet de conseil IT basé à Lomé, spécialisé dans Oracle, les bases de données, Linux/Unix, OCI, la sécurité et la supervision des infrastructures critiques.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  )
}
