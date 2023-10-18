import Image from 'next/image'
import Link from "next/link"

export default function Main() {
    return (
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

            <p>
                <Link href="/produtos/1">Produto - 1</Link> -
                <Link href="/produtos/2">Produto - 2</Link> -
                <Link href="/produtos/3">Produto - 3</Link>
            </p>

        </div>
    )
}