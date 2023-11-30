import Image from 'next/image'

export default function Home() {
  return (
    <main>

    <header className='m-6'>
      <h1>Logo</h1>
    </header>

     <img 
     src="/malibu.png" 
     width={1920} 
     height={500}
     />

    <div className='m-6'>

      <h1 className='text-6xl'>
        Artes da Galera
      </h1>
      <h5>Espaço para você dar uma olhada em que o pessoal esta vendendo por aqui.</h5>
    </div>


    </main>
  )
}
