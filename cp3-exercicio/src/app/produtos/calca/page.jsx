import Image from 'next/image'
import Link from 'next/link'
export default function Calca () {
    return(
      <div>
        <h1>CALÇA</h1>
        <div>
                <p>R$350,00</p>
               
                <figure>
                    <Image src="/img/calca.jpg" alt="Calça" width={320} height={300}/>
                </figure>
                 <p> <Link href="/">BACK TO HOME</Link></p>
            </div>
      </div>
    )
  }