import React, { useState } from 'react'
import sip from './sip.png'
import emi from './emi.png'
import todo from './todolist.png'
import animelist from './animelist.png'
import suvaiexpress from './suvaiexpress.png'
import './Project.css'
function Project() {
    const [data,setdata]=useState({
    title:"Anime List",
    imgurl:animelist,
    demo:"https://animelist-project.netlify.app/",
    code:"https://github.com/jeeva-codes/AnimeList",
    tools:[{tl:'React'}],
    content:'I developed a professional-grade anime list project that leverages an API for dynamic data retrieval, incorporates responsive design principles for an optimal user experience, expertly handles user input, and utilizes React Router DOM for efficient navigation and routing.'
  })
 
  const info1={
    title:"SIP Calculator",
    imgurl:sip,
    demo:"https://simple-sipcalculator.netlify.app/",
    code:"https://github.com/jeeva-codes/SIP-Calculator",
    tools:[{tl:'React'}],
    content:'Built with React, the SIP calculator features a responsive design that adapts to various devices, allowing for easy user input and efficient calculations, and is deployed on Netlify for fast and reliable access.'
  }
  const info2={
    title:"Anime List",
    imgurl:animelist,
    demo:"https://animelist-project.netlify.app/",
    code:"https://github.com/jeeva-codes/AnimeList",
    tools:[{tl:'React'}],
    content:'I developed a professional-grade anime list project that leverages an API for dynamic data retrieval, incorporates responsive design principles for an optimal user experience, expertly handles user input, and utilizes React Router DOM for efficient navigation and routing.'
  }
  const info3={
    title:"EMI Calculator",
    imgurl:emi,
    demo:"https://jeeva-codes.github.io/EMI-Calculator/",
    code:"https://github.com/jeeva-codes/EMI-Calculator",
    tools:[{tl:'HTML'},{tl:'CSS'},{tl:'JavaScript'}],
    content:'The EMI calculator, created using HTML, CSS, and JavaScript, incorporates a responsive design that enhances usability across devices, allowing for smooth user inputs, and is successfully deployed on GitHub Pages for easy access.'

  }
    const info4={
    title:"Suvai Express",
    imgurl:suvaiexpress,
    demo:"https://suvaiexpress.netlify.app",
    code:"https://github.com/jeeva-codes/Suvai-Express",
    tools:[{tl:'React'},{tl:'Tailwind CSS'},{tl:'Router Dom'}],
    content:'I developed a mobile-responsive food ordering web application centered around traditional Tamil cuisine. The app features seamless navigation between menu, cart, and checkout pages using React Router DOM. I efficiently managed the global cart state by leveraging the useReducer and useContext hooks, ensuring smooth state transitions across components. The application’s user interface was styled using Tailwind CSS, resulting in a clean and intuitive design. Through this project, I gained hands-on experience in building a component-based architecture and effectively managing application state in a real-world React environment.'

  }

  return (
   <>
   <div className="pro-container">
    <div className="pro-nav">
    <button onClick={()=>setdata(info2)} className="pro-nav-btn"> Anime List</button>
    <button onClick={()=>setdata(info4)} className="pro-nav-btn"> Suvai Express</button>
    <button onClick={()=>setdata(info1)} className="pro-nav-btn"> SIP Calculator</button>
   <button onClick={()=>setdata(info3)} className="pro-nav-btn"> EMI Calculator</button>
    </div>
    <div className="pro-display">
        <h2 className="pro-display-title" >{data.title}</h2>
        <div className="pro-img-container">
        <img src={data.imgurl} />
        </div>
        <div className="pro-tools">
          <label>Made with : </label>
            {data.tools.map((t)=><span>{t.tl}</span>)}
        </div>
        <div className="pro-discription">
            <p>{data.content}</p>
        </div>
        <div className="pro-views">
        <a href={data.demo}target="_blank">
  <button>Demo</button>
</a>
<a href={data.code}target="_blank">
  <button>View Code</button>
</a>
        </div>
    </div>
   </div>
  
   </>
  )
}

export default Project