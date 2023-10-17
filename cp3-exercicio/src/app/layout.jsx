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

        <div className="centered-container">
          <h2>LISTA DE PRODUTOS</h2>

          <div className="card-container">

            <a href="/produtos/calca" className="card-link">
              <Image src="/img/calca.jpg" alt='calca' width={50} height={50} />
            </a>

            <a href="/produtos/bone" className="card-link">
              <Image src="/img/bone.png" alt='bone' width={50} height={50} />
            </a>

            <a href="/produtos/camisa" className="card-link">
              <Image src="/img/camisa.png" alt='camisa' width={50} height={50} />
            </a>

            <a href="/produtos/oculos" className="card-link">
              <Image src="/img/oculos.jpg" alt='oculos' width={50} height={50} />
            </a>

            <a href="/produtos/sapato" className="card-link">
              <Image src="/img/sapato.jpg" alt='sapato' width={50} height={50} />
            </a>


          </div>
        </div>
      </body>
    </html>
  )
}
