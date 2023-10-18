import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Cabecalho from '@/components/Cabecalho/Cabecalho'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={inter.className}>

        <Cabecalho />

        {children}

      </body>
    </html>
  )
}
