import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({ 
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'SMART2D Services | Oracle Partner, OCI et infrastructures critiques',
  description: "SMART2D Services accompagne les banques, institutions financières, télécoms et organisations exigeantes dans la sécurisation, l'optimisation, la migration, la digitalisation, la supervision et la modernisation de leurs environnements Oracle, OCI, bases de données et infrastructures critiques.",
  keywords: 'Oracle, OCI, DBA, infrastructure critique, Linux, Unix, supervision, SMART2D, Togo',
  authors: [{ name: 'SMART2D Services' }],
  icons: {
    icon: '/images/logo/smart2d-logo-dark.png',
    apple: '/images/logo/smart2d-logo-dark.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-[#F8F6F4]">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
