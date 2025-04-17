import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";


const Nav = () => {

   const [isOpen,setIsOpen] =  useState(false);

   const toggleMenu =() =>{
    setIsOpen(!isOpen);
   };

  return (
<>
    <header>
            <div className='container'>
        <nav>
       <div className='logo'>
       <h2>DesignStudio</h2>
       </div>

       <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><a href="/home" className='active'>Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact me</a></li>
       </ul>
       <div className="icon" onClick={toggleMenu}>
       <FaBars />

       </div>
       </nav>
    </div>
    </header>
<section>
    <div className='container'>
        <div className='content'>
            <h2>Responsive Navbar</h2>
        </div>
    </div>
</section>
</>
  )
}

export default Nav