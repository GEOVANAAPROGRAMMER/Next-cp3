import Image from 'next/image'
import Link from 'next/link'
export default function Oculos () {
    return(
      <div>
         <h1 className='titulos'>ÓCULOS</h1>
        <div>
        <p className='valor'>R$50,00</p>
               
                <figure>
                    <Image src="/img/oculos.jpg" alt="Oculos" width={300} height={250}/>
                </figure>
                <div className='retorne'>
                 <p> <Link href="/">RETORNE A LOJA</Link></p>
                 </div>
            </div>
      </div>
    )
  }