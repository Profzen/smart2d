import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"

const footerLinks = {
  expertise: [
    { name: "Oracle & Infrastructure", href: "/oracle-infrastructure" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Support & Formation", href: "/support-formation" },
  ],
  entreprise: [
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ],
  solutions: [
    { name: "OSCAR", href: "/solutions#oscar" },
    { name: "Smart Transfert", href: "/solutions#smart-transfert" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#221E1F] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smart2d_logo-Lnk0x8f9RkLdJeRxxHqkdSqNb7ZSJH.png"
              alt="SMART2D Services"
              width={200}
              height={60}
              className="h-14 w-auto mb-6"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              SMART2D Services accompagne les organisations dans la sécurisation, 
              l&apos;optimisation et la modernisation de leurs environnements Oracle, 
              bases de données, Cloud OCI, Linux/Unix et infrastructures critiques.
            </p>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#EE3329] mb-4">
              Expertise
            </h3>
            <ul className="space-y-3">
              {footerLinks.expertise.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#EE3329] mb-4">
              Solutions
            </h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#EE3329] mb-4 mt-8">
              Entreprise
            </h3>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#EE3329] mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@smart2dservices.com"
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#EE3329]" />
                  contact@smart2dservices.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+22872140923"
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#EE3329]" />
                  <span>
                    +228 72 14 09 23 <span className="text-white/50">(Togo)</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+17324392272"
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#EE3329]" />
                  <span>
                    +1 732 439 2272 <span className="text-white/50">(USA)</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#EE3329]" />
                <span>Hedzranawoe, Boulevard du Haho<br />Lomé - Togo</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} SMART2D Services. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <span>Plus de 30 ans d&apos;expertise Oracle</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
