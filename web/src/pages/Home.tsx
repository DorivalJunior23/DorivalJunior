import Header from "../components/Header";

function Home() {
    return (
    <div>
      <Header/>
      <header className="mx-auto h-screen px-6 md:px-16 lg:px-32">
      
    <div className='flex h-4/6 w-full flex-col '>
      <div className="mx-auto my-auto w-fit">
          <h3 className='font-code mb-2 text-sm font-bold text-[#6272a4] md:text-xl'>
        // Hello World !
        </h3>
        <h1 className="pb-4 text-3xl font-bold leading-tight sm:text-5xl md:text-7xl text-white">
        Eu me chamo
        <br/>
        Dorival Junior.
        </h1>
        <h2 className="font-base text-base md:text-3xl text-white">
        Sou Estudante de engenharia de Software na UTFPR-DV.
        </h2>
        </div>
        </div>
        <div className="mx-auto flex h-1/6 justify-end gap-x-6 px-8">
        <a href="https://github.com/DorivalJunior23">
          <img src="/GithubLogo1.svg" className="w-14 h-14 bg-transparent"/>
        </a>
        <a href="https://www.linkedin.com/in/dorival-soares-da-silva-junior-174228220/">
          <img src="/iconmonstr-linkedin-4.svg" className="w-14 h-14 bg-transparent"/>
        </a>
        </div>



        </header>
    </div>
    )
  };
  
export default Home;