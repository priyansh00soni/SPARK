import React from "react";
import PlantList from "./plantlist";
import "./App.css";
import { Canvas } from "@react-three/fiber";


import { OrbitControls,  PerspectiveCamera } from "@react-three/drei";
import Alovera from "./Alovera";
import Ashwgandha from "./Ashwgandha";
import Background from "./Background";
import Nav from "./nav";
import Center from "../center";

function App() {
  return (
   <div>
    <div style={{height:"900px"}}>
    <Background/>
    </div>
    <div style={{backgroundImage:"Url('./src/fog.jpg')",height:"900px",backgroundRepeat:"no-repeat",backgroundSize:"cover",marginTop:"-22px",paddingTop:"3rem",zIndex:"-2"}}>
    <div className="w-full" >
    <Nav/>
    </div>
    <div style={{marginTop:"50px",fontSize:"39px",color:"white"}}>
      <Center/>
    </div>

    </div>
    </div>
  );
}

export default App;