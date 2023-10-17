import Image from 'next/image'
import Link from 'next/link'
export default function Bone () {
    return (
        <div>
            <h1>BONÉ</h1>
            <div>
                <p>R$120,00</p>
               
                <figure>
                    <Image src="/img/bone.png" alt="Bone" width={300} height={250}/>
                </figure>
                 <p> <Link href="/">BACK TO HOME</Link></p>
            </div>
        </div>
    )
}