import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ScrollToTop } from '@/components/ui/scroll-to-top'
import { FloatingContact } from '@/components/ui/floating-contact'
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
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className="bg-[#F8F6F4] overflow-x-hidden">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <FloatingContact />
          <ScrollToTop />
        </NextIntlClientProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
