import React, { useState } from 'react'
import coffeeman from './coffeeman.png'
import animelist from './animelist.png'
import suvaiexpress from './suvaiexpress.png'
import './Project.css'
function Project() {
    const [data,setdata]=useState({title:"Coffeeman",
    imgurl:coffeeman,
    demo:"https://coffeeman.netlify.app/",
    code:"https://github.com/jeeva-codes/Coffeman",
    tools:[{tl:'React'},{tl:'Mongodb'},{tl:'Express js'}],
    content:"Developed Coffeeman, a responsive e-commerce web application showcasing coffee, tea, and cool drink products using React.js and Tailwind CSS.Implemented user authentication (register & login) with Express.js and MongoDB Atlas, ensuring secure data handling."})
 
  const info1={
    title:"Coffeeman",
    imgurl:coffeeman,
    demo:"https://coffeeman.netlify.app/",
    code:"https://github.com/jeeva-codes/Coffeman",
    tools:[{tl:'React'},{tl:'Mongodb'},{tl:'Express js'}],
    content:"Developed Coffeeman, a responsive e-commerce web application showcasing coffee, tea, and cool drink products using React.js and Tailwind CSS.Implemented user authentication (register & login) with Express.js and MongoDB Atlas, ensuring secure data handling."}
  
    const info2={
    title:"Anime List",
    imgurl:animelist,
    demo:"https://animelist-project.netlify.app/",
    code:"https://github.com/jeeva-codes/AnimeList",
    tools:[{tl:'React'}],
    content:'I developed a professional-grade anime list project that leverages an API for dynamic data retrieval, incorporates responsive design principles for an optimal user experience, expertly handles user input, and utilizes React Router DOM for efficient navigation and routing.'
  }
    const info3={
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
    <button onClick={()=>setdata(info1)} className="pro-nav-btn"> Coffeeman</button>
    <button onClick={()=>setdata(info3)} className="pro-nav-btn"> Suvai Express</button>
    <button onClick={()=>setdata(info2)} className="pro-nav-btn"> Anime List</button>
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