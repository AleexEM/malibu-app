import Image from 'next/image'

export default function Home() {
  return (
    <main>

    <header className='m-6 columns-4'>
      <img
      src="/buzios-02.png"
      width={100}
      height={100} 
      alt="" />

      <div className='font-serif font-black text-black '>
        <h1>Artes da Galera</h1>
        <h1>Minhas Artes</h1>
        <h1>Vendas</h1>
      </div>

    </header>

    <div>
    
      
      <img  
      src="/buzios.png" 
      width={1920} 
      height={500}
      />
      
    </div>

     

    <div className='m-6'>

      <h1 className='text-6xl'>
        Artes da Galera
      </h1>
      <h5>Espaço para você dar uma olhada em que o pessoal esta vendendo por aqui.</h5>
    </div>



    <div className='columns-4'>

      <img src="/Pato Chapel.png" alt="" />
      <img src="/Pato Ninja.png" alt="" />
      <img src="/Pato Telemarketing.png" alt="" />
      <img src="/Pato.png" alt="" />


    </div>


    </main>
  )
}
