import Image from 'next/image'
import Link from 'next/link'
export default function Oculos () {
    return(
      <div>
        <h1>ÓCULOS</h1>
        <div>
                <p>R$70,00</p>
               
                <figure>
                    <Image src="/img/oculos.jpg" alt="Oculos" width={320} height={188}/>
                </figure>
                 <p> <Link href="/">BACK TO HOME</Link></p>
            </div>
      </div>
    )
  }