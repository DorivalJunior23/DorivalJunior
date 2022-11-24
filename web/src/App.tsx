import './styles/main.css'
import { BrowserRouter as Router,Outlet, Link, Routes, Route } from "react-router-dom";



import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Sobre from './pages/Sobre';
import Experiencia from './pages/Experiencia';


function App() {

  return (
<Router>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/projetos' element={<Projetos/>}/>
    <Route path='/experiencia' element={<Experiencia/>}/>
    <Route path='/sobre' element={<Sobre/>}/>
  </Routes>
</Router>
  )
}

export default App
