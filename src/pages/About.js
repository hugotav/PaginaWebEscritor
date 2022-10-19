import React from "react";
import FotoAutor from "../assets/foto-autor2.jpg";
import "../styles/About.css";
function About() {
  return <div className="about">

    <div className="about2">

      <h1> Sobre o autor</h1> 
      <img src={FotoAutor}/>
      <p>
        Hugo Tavares nasceu em 1995, em Belém, Pará.
        Publicou os livros Relatos Urbanos, em 2019, e Estórias Tétricas, em 2020. 
        Contribuiu com os contos “Queixo”, na Antologia Conto Brasil Vol. 6, e “Operação Farinha”, 
        na Antologia Contos Contemporâneos da Violência Urbana.
        A Penumbra na Janela é sua obra de estreia como romancista.
      </p>

    </div>

      
    </div>

}

export default About;