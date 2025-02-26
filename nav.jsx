import React, { useState } from 'react'
import "./nav.css";
const Nav = () => {
    
     const [isOpen,setIsOpen]=useState(false);
       const toggleMenu=()=>{
           setIsOpen(!isOpen)
       }

  return (
    <div className='content' style={{width:"fit-content",border:"2px solid white",display:"flex",fontSize:"20px",gap:"70px",marginTop:"19px",paddingTop:"0.3rem" ,marginLeft:"180px",paddingLeft:"4rem",paddingRight:"4rem",height:"33px",color:"white",borderRadius:"14px",position:"relative",backgroundColor:"green",opacity:"0.5"}}>
        <div>
            Herbo verse<p style={{marginTop:"-10px",marginLeft:"-36px",opacity:"1"}} >
            virtual herbal garden
            </p>
        </div>
        <div>
        <div onClick={toggleMenu} style={{color:"white",borderColor:"green"}}> 
        <i class="fa-solid fa-bars"></i>
        </div>
        <ul style={{     display: isOpen ? "block" : "none",
                    position: "absolute",
                    top: "100%", // Places it below the button
                    left: "0",
                    background: "green",
                    color: "white",
                    padding: "10px",
                    listStyle: "none",
                    borderRadius: "5px"}}>
            <li>Herb</li>
            <li>Camera</li>
        </ul>
        </div>
        <div>
            HOME
        </div>
        <div>
            About
        </div>
        <div>
            BENEFITS
        </div>
        <div>
            <input type='text' className='value'/>
        </div>
        <div>
        <i class="fa-regular fa-heart"></i>
        </div>
        <div>
        <i class="fa-solid fa-note-sticky"></i>
        </div>
    </div>
  )
}

export default Nav