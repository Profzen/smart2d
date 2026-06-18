import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ContactContent } from "./contact-content"

export const metadata: Metadata = {
  title: "Contact | SMART2D Services - Expertise Oracle et infrastructures critiques",
  description: "Contactez SMART2D Services pour vos projets Oracle, bases de données, Cloud OCI, Linux/Unix, supervision ou formation. Lomé, Togo.",
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
