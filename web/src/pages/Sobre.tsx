import Header from "../components/Header";

function Sobre(){
    return (
     <div>
         <Header/>
    <div className='w-[100%] mr-auto max-w-5xl h-screen px-6 sm:px-8 text-white'>
      <h2 className="relative z-40 my-4 text-3xl font-bold lowercase leading-none md:text-5xl ">
        Sobre
        <span className="text-[#6272a4]">.</span>
      </h2>
      <article className="w-[100%] ml-auto mr-auto max-w-5xl pl-6 pr-6 mb-16 space-y-6 text-sm font-medium leading-6 md:text-base">
      Cursando Engenharia de Software na UTFPR-DV desde o primeiro semestre de 2021.
      <br/>
      Gosto de aprender e explorar novas coisas e quando não estou estudando estou jogando Valorant ou assistindo NBA. 
      
      <br/>
      <br/>
      No momento minhas tecnologias favoritas são 
      <span className="text-[#6272a4]"> React.js</span>
      ,
      <span className="text-[#6272a4]"> TypeScript</span>
      ,
      <span className="text-[#6272a4]"> Tailwind CSS </span>
      e
      <span className="text-[#6272a4]"> Vite.js</span>
      . Que foram as tecnologias utilizadas para fazer este site.
      </article>

    </div>
    </div>
    )
  };
  
export default Sobre;