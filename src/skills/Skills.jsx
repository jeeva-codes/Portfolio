import React from 'react'
import './Skills.css'
import { IoLogoHtml5 } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";


function Skills() {
  return (
   <>
    <div className="skill-container">
    <div className="skill-container-left">
      <CgWebsite className="skill-left-icon"/>
      <div className="skill-left-info">
        <h2>Frontend Developer</h2>
        <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
      </div>
    </div>
    <div className="skill-container-right">
    <div className="skillset1">
      <h2>Languages I speak:</h2>
     <ul>
      <li><IoLogoHtml5 id='icons' />HTML</li>
      <li><FaCss3Alt id='icons'/>CSS</li>
      <li><IoLogoJavascript id='icons'/>JavaScript</li>
      <li><FaReact id='icons'/>React js</li>
     </ul>
    </div>
    <div className="skillset2">
     <h2>Dev Tools:</h2>
     <ul>
      <li><FaBootstrap id='icons'/>Bootstrap</li>
      <li><FaGitAlt id='icons'/>Git & GitHub</li>
      <li></li>
     </ul>
    </div>
    </div>
    </div>
   </>
  )
}

export default Skills