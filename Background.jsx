import React from 'react'

const Background = () => {
  return (
    <div style={{height:"900px",overflow:"hidden",position:"relative",top:"0",backgroundSize:"cover"}}>
        <div>
        <video autoPlay loop playsInline muted>

                <source src="./src/backvideo.mp4" type='video/mp4'/>
            </video>
        </div>
        <div>
            
            <div className='Content' style={{fontFamily:"Pacifico",marginTop:"-800px",display:"flex",flexDirection:"column",marginLeft:"650px",color:"white",fontSize:"40px"} }>
              
             <p style={{textDecoration:"underline"}}><img src='./src/pot.PNG' width={60}/> Herbo Verse</p> 
             <p style={{marginTop:"-40px"}}> Virtual herbal garden</p> 
                
            </div>
            <div style={{marginLeft:"690px",marginTop:"90px"}}>
                <button style={{color:"white", opacity:"0.5",backgroundColor:"black",border:"none",fontSize:"40px",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>explore now</button>
            </div>
        </div>
    </div>
  )
}

export default Background