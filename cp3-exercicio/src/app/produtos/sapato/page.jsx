import Image from 'next/image'
import Link from 'next/link'
export default function Sapato () {
    return(
      <div>
        <h1 className='titulos'>SAPATO</h1>
        <div>
        <p className='valor'>R$450,00</p>
               
                <figure>
                    <Image src="/img/sapato.jpg" alt="Sapato" width={300} height={250}/>
                </figure>
                <div className='retorne'>
                 <p> <Link href="/">RETORNE A LOJA</Link></p>
                 </div>
            </div>
      </div>
    )
  }