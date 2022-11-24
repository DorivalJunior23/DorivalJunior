import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="w-screen px-4 py-5 flex justify-content align-items text-white">
                
                <ul className="grid grid-flow-col gap-10 ">
                    <li><Link to="/" className="hover:text-[#6272a4]">Home</Link></li>
                    <li><Link to="/sobre" className="hover:text-[#6272a4]">Sobre</Link></li>
                    <li><Link to="/experiencia" className="hover:text-[#6272a4]">Experiencia</Link></li>
                    <li><Link to="/projetos" className="hover:text-[#6272a4]">Projetos</Link></li>
                </ul>
                </div>
        </header>
    )
}
export default Header;