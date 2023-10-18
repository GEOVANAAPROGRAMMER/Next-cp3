import Link from 'next/link'

export default function () {
  return (
    <div className="centered-container">
      <h2>LISTA DE PRODUTOS</h2>

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

        <a href="/produtos/sapato" className="card-link">
          <Image src="/img/sapato.jpg" alt='sapato' width={50} height={50} />
        </a>


      </div>
    </div>
  )
}