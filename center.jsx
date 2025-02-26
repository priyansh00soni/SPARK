import React from 'react'

const Center = () => {
  return (
    <div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",marginTop:"90px"}}>
            <div style={{marginLeft:"40px"}}>
              <img src="./src/bg.PNG"/>
            </div>
            <div style={{fontSize:"50px"}}><p style={{fontFamily:"pacifico",justifyContent:"center",alignItems:"center"}}>
                Welcome to <p style={{fontFamily:"Caveat",marginLeft:"140px",marginTop:"-30px"}}> Herbo Verse</p></p><p style={{marginTop:"170px"}}>
                    Unlock The Power Of <p style={{marginLeft:"140px",marginTop:"-15px"}}>Herbs</p>
                </p>
            </div>
            <div style={{marginLeft:"90px"}}>
                <img src='./src/sidelogo.PNG' />
            </div>
        </div>
    </div>
  )
}

export default Center