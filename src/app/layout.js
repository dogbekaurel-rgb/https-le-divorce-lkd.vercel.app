import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME || 'Le Divorce – LKD',
  description: 'Projet artistique, cinématographique et numérique — Le Divorce – LKD',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-white text-primary font-sans">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
