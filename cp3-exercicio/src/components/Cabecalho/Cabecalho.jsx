import Link from "next/link"

export default function Cabecalho() {
    return (
        <div>
            <header>
                <nav>
                    <p>
                        <Link href="/produtos/1"> Produto  -  1 </Link> -
                        <Link href="/produtos/2"> Produto  -  2 </Link> -
                        <Link href="/produtos/3"> Produto  -  3 </Link> -
                        <Link href="/produtos/4"> Produto  -  4 </Link>
                    </p>

                </nav>
            </header>
        </div>
    )
}