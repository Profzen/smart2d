import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServicesContent } from "./services-content"

export const metadata: Metadata = {
  title: "Services IT, Oracle, bases de données, sécurité et supervision | SMART2D",
  description: "SMART2D Services propose l'administration de bases de données, l'audit technique, la sécurité, Linux/Unix, Cloud OCI, supervision, MCO, support et formation.",
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesContent />
      </main>
      <Footer />
    </>
  )
}
