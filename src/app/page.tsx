import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">MOVILIDAD ELÉCTRICA PARA TRANSPORTE DE PERSONAL EN QUERÉTARO</h1>
          <p className="mb-5">ANÁLISIS DE VIABILIDAD ECONÓMICA E IMPACTO AMBIENTAL </p>
          <Link href="inicio/">

            <button className="btn btn-primary">Ver mas</button>

          </Link>
        </div>
      </div>
    </div>
  )
}
