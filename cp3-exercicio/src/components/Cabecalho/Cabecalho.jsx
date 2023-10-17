import Link from "next/link"

export default function Cabecalho() {
    return (
        <div>
            <header>
                <nav>
                    <p>
                        <Link href="/produtos/bone">BONÉ</Link>
                    </p>
                    <p>
                        <Link href="/produtos/calca">CALÇA</Link>
                    </p>
                    <p>
                        <Link href="/produtos/camisa">CAMISA</Link>
                    </p>
                    <p>
                        <Link href="/produtos/oculos">ÓCULOS</Link>
                    </p>
                    <p>
                        <Link href="/produtos/sapato">SAPATO</Link>
                    </p>
                </nav>
            </header>
        </div>
    )
}