import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <div style={{height:'400px',backgroundColor:'purple'}} className='d-flex align-items-center justify-content-center text-light flex-column'>
          <h3>Contact Us</h3>
          <h5><MdEmail />resumebuilder@gmail.com</h5>
          <h5><FaPhoneAlt />7845254810</h5>
          <h4>Connect With Us</h4>
          <div className='d-flex align-items-center my-3'>
            <IoLogoWhatsapp className='fs-3 me-2' />
            <FaInstagramSquare className='fs-3 me-2'/>
            <FaFacebook className='fs-3 me-2'/>
          </div>
            <p>Designed & Build with React ❤️</p>
    </div>
  )
}

export default Footer