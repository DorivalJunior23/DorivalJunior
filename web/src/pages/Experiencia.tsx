import Header from "../components/Header";

function Experiencia() {
    return (
        <div>
             <Header/>
             <div className='w-[100%] mr-auto max-w-5xl h-screen px-6 sm:px-8 text-white'>
      <h2 className="relative z-40 my-4 text-3xl font-bold lowercase leading-none md:text-5xl ">
      Linguagens e Ferramentas
        <span className="text-[#6272a4]">.</span>
      </h2>
      <div className="w-[100%] ml-auto mr-auto max-w-5xl px-6 my-16 space-y-6 leading-6">
        <div className="grid grid-cols-8 gap-3">

        <a href="https://github.com/DorivalJunior23/Projetos-Python" target="_blank"><img alt="Dorival-Python" height="100" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"/></a>
      <a href="https://github.com/DorivalJunior23/Login_Valorant" target="_blank"><img  alt="Dorival-HTML" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/></a>
   <a href="https://github.com/DorivalJunior23/Login_Valorant" target="_blank"><img  alt="Dorival-CSS" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"/></a>
   <a href="https://github.com/DorivalJunior23/NLW_Esports" target="_blank"><img alt="Dorival-JS" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/></a>
  <a href="https://github.com/DorivalJunior23/NLW_Esports" target="_blank"><img  alt="Dorival-NodeJS" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"/></a>
  <a href="https://github.com/DorivalJunior23/NLW_Esports" target="_blank"><img  alt="Dorival-JS" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"/></a>
   <a href="https://github.com/DorivalJunior23/NLW_Esports" target="_blank"><img  alt="Dorival-JS" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/></a>
     <a href="https://tailwindcss.com/" target="_blank"><img  alt="Dorival-Tailwindcss" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"/></a>

     </div>
     </div>
     <h2 className="relative z-40 my-4 text-3xl font-bold lowercase leading-none md:text-5xl ">
        Cursos e Certificados
        <span className="text-[#6272a4]">.</span>
      </h2>
      <div className='px-8 grid grid-cols-3 gap-6 mt-16'>
       
       <div className='relative rounded-lg overflow-hidden'>
         <a href="https://cursos.alura.com.br/degree/certificate/8dec02f8-5641-4505-9433-9f09becfd5e9">
       <img src="/InternetDasCoisas.jpeg"/>
    
     <div className='w-full pt-16 pb-5 px-2 bg-background-gredient absolute bottom-0 left-0 right-0'>
       <strong className="font-bold text-white inline-flex">Formação internet das coisas</strong>
       <span className="font-thin text-white inline-flex">Alura</span>
     </div>
     </a>
     </div>
     <div className='relative rounded-lg overflow-hidden'>
         <a href="https://cursos.alura.com.br/certificate/5a813804-9d77-493b-9e40-9808b3758e2a">
       <img src="/gitAlura.jpeg"/>
    
     <div className='w-full pt-16 pb-5 px-2 bg-background-gredient absolute bottom-0 left-0 right-0'>
       <strong className="font-bold text-white inline-flex">Git Github</strong><br />
       <span className="font-thin text-white inline-flex">Alura</span>
     </div>
     </a>
     </div>
     <div className='relative rounded-lg overflow-hidden'>
     <a href="https://www.treinaweb.com.br/certificado/XWVTLKYSFD23">
       <img src="/ReactPython.jpeg"/>
    
     <div className='w-full pt-16 pb-5 px-2 bg-background-gredient absolute bottom-0 left-0 right-0'>
       <strong className="font-bold text-white inline-flex">Multi-stack #4 - React Python</strong>
       <span className="font-thin text-white inline-flex">TreinaWeb</span>
     </div>
     </a>
      </div>
      
      </div>
      

    </div>
    </div>
    )
  };
  
export default Experiencia;