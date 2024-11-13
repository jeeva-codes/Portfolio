import React from 'react'
import Home from '../home/Home'
import Skills from '../skills/Skills'
import Project from '../Project/Project'
import Contact from '../contact/Contact'
import '../navbar/Navbar.css'
 import { BrowserRouter,Routes,Route,Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
    <BrowserRouter>
    <div className="nav-container">
    <nav>
        <ul>
        <li><Link to='/' id='links' className={"link-styles"}>Home</Link></li>
        <li><Link to='/skills' id='links' className={"link-styles"}>Skills</Link></li>
        <li><Link to='/projects' id='links' className={"link-styles"}>projects</Link></li>
        <li><Link to='/contact' id='links' className={"link-styles"}>Contact</Link></li>
        </ul>
    </nav>
    </div>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/skills' element={<Skills/>}/>
    <Route path='/projects' element={<Project/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Navbar