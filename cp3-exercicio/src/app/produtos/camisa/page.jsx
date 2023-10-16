import Image from 'next/image'
import Link from 'next/link'
export default function Camisa () {
    return(
      <div>
        <h1>CAMISA</h1>
        <div>
                <p>bgbskvnsfoanfsvsvsnvinvsvnsv</p>
               
                <figure>
                    <Image src="/img/camisa.png" alt="Bone" width={320} height={188}/>
                </figure>
                 <p> <Link href="/">BACK TO HOME</Link></p>
            </div>
      </div>
    )
  }