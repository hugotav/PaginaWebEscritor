import React from "react";
import imagem2 from "../assets/maquina4.webp";
import "../styles/Home.css";

function Home() {
  return <div className='home'> 

          <div className="home2">
            <h1> H Tavares </h1>
            <p> Escritor</p>
          </div>

          <div className="home3">
            <img src={imagem2}/>

          </div>
            
      </div>
}

export default Home;