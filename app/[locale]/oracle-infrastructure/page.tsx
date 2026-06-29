import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { OracleInfraContent } from "./oracle-infra-content"

export const metadata: Metadata = {
  title: "Expertise Oracle, OCI et infrastructures critiques | SMART2D Services",
  description: "Administration Oracle Database, Cloud OCI, Linux/Unix, haute disponibilité, sauvegarde, sécurité, performance et supervision des environnements critiques.",
}

export default function OracleInfraPage() {
  return (
    <>
      <Header />
      <main>
        <OracleInfraContent />
      </main>
      <Footer />
    </>
  )
}
