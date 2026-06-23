import {
  Cormorant_Garamond,
  Quicksand,
  Noto_Naskh_Arabic
} from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display'
})

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body'
})

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic'
})

export const metadata = {
  title: 'Dar El Ghardaïa — Guest House',
  description:
    "An authentic guest house in the M'zab Valley with rooms, local cuisine, tours, and warm southern hospitality."
}

export default function RootLayout({ children }) {
  return (
    <html
      className={`${cormorant.variable} ${quicksand.variable} ${notoNaskhArabic.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
