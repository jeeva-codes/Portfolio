import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import './Contact.css'
function Contact() {
  return (
    <>
    <div className="contact-container">
      <div className="contact-links">
             <h2 className='contact-links-title'>Get in Touch</h2>
        <div className="contact-links-icons">
              <ul style={{listStyleType:'none'}} className='icons'>
                <li><a href='https://github.com/jeeva-codes' target="_blank"> <IoLogoGithub className='icon' /></a></li>
                <li><a href='https://www.linkedin.com/in/jeeva-m-b9b373334' target="_blank">  <FaLinkedin  className='icon'/></a></li>
                <li><a href='mailto: jeevacode2@gmail.com' target="_blank">  <BiLogoGmail  className='icon'/></a></li>
                <li><a href='https://www.instagram.com/_jeeva_madjack_?igsh=MTJ5dphMjL3Zjg0OQ==' target="_blank">  <FaInstagram  className='icon'/></a></li>
              </ul>
      <p><FaMobileAlt /> : +91 6374874464</p>
        </div>
      </div>
      <div className="contact-form">
      <form action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="28bfeca3-c4f9-440b-b8b1-43170f36278a"></input>
      <input type="text" name='name' required placeholder='Enter Your Name' className='contact-input' />
      <input type="email" name='email' required placeholder='Enter Your E-mail' className='contact-input' />
      <textarea name="message" required placeholder='Convey the message' className='contact-input'></textarea>
      <button type='submit' className='submit-btn'>Submit<FaArrowRight className='arrowicon' /></button>
      </form>
      </div>
    </div>
    
    </>
  )
}
  
export default Contact