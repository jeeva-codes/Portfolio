import React from 'react'
import rb from "./rb_60111.png"
import './Home.css'
function Home() {
  return (
    <>
     <div className="container">
     <div className="main-container">
        <div className="img-container">
                <img src={rb} alt="me"  width={'200px'} height={'200px'}/>
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
     <a href="src\home\jeeva-resume.pdf" download  >download resume</a>
      </button>
     </div>
     </div>
     </div>
    
    </>  )
}

export default Home