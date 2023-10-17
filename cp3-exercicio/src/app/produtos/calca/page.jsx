import Image from 'next/image'
import Link from 'next/link'
export default function Calca () {
    return(
      <div>
       <h1 className='titulos'>CALÇA</h1>
        <div>
                <p>R$350,00</p>
               
                <figure>
                    <Image src="/img/calca.jpg" alt="Calça" width={300} height={250}/>
                </figure>
                <div className='retorne'>
                 <p> <Link href="/">RETORNE A LOJA</Link></p>
                 </div>
            </div>
      </div>
    )
  }