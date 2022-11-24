import Header from "../components/Header";

function Projetos () {
    return (
    <div className="h-screen">
        <Header/>
        <div className='px-8 grid grid-cols-2 gap-6 mt-16'>
       
        <div className='relative rounded-lg overflow-hidden'>
          <a href="https://github.com/DorivalJunior23/PCstore">
        <img src="/Loja.jpeg"/>
     
      <div className='w-full pt-16 pb-5 px-2 bg-background-gredient absolute bottom-0 left-0 right-0'>
        <strong className="font-bold text-white inline-flex">Loja</strong>
      </div>
      </a>
      </div>
      <div className='relative rounded-lg overflow-hidden'>
      <a href="https://github.com/DorivalJunior23/NLW_Esports">
        <img src="/Nlw.jfif"/>
     
      <div className='w-full pt-16 pb-5 px-2 bg-background-gredient absolute bottom-0 left-0 right-0'>
        <strong className="font-bold text-white inline-flex">NLW</strong>
      </div>
      </a>
       </div>
       </div>
        
        </div>
    )
  };
  
export default Projetos;