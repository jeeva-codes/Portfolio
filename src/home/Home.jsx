import React from 'react'
import profilepic from "./1754115403967.jpg"
import './Home.css'
function Home() {
  return (
    <>
     <div className="container">
     <div className="main-container">
        <div className="img-container">
         <picture>
                <img src={profilepic} alt="me"  width={'200px'} height={'200px'}/>
      </picture>
        </div>
     <div className="title">
        <h2>Hi i'm <span>Jeeva</span></h2>
        <h2><span>front</span>end Develope<span>r</span></h2>
     </div>
     <div className="objective">
        <p className='objective-text'>A passionate frontend developer eager to create engaging web experiences</p>
     </div>
     <div className="home-bottom">
      <button className='resume-btn'>
     <a href="/Jeeva-Frontend_dev-Resume.pdf" download  >download resume</a>
      </button>
     </div>
     </div>
     </div>
    
    </>  )
}

export default Home