import Image from 'next/image'
import Link from 'next/link'
export default function Sapato () {
    return(
      <div>
        <h1>SAPATO</h1>
        <div>
                <p>R$350,00</p>
               
                <figure>
                    <Image src="/img/sapato.jpg" alt="Sapato" width={300} height={250}/>
                </figure>
                 <p> <Link href="/">BACK TO HOME</Link></p>
            </div>
      </div>
    )
  }