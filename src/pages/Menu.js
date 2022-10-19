import React from "react";
import "../styles/Menu.css";
import Relatos from "../assets/Relatos.jpg";
import Estorias from "../assets/Estorias.png";
import Penumbra from "../assets/Penumbra.jpg";

function Menu() {
  return <div className="menu">

    <div className="menu2">
        <h2>Bibliografia</h2>
        <img src={Relatos}/>
        <h1>Relatos Urbanos, 2019</h1>
        <p>
        Relatos Urbanos reúne treze contos com narrativas breves, 
        ágeis e concisas, que abordam a obsessão e a barbárie humana no cotidiano. 
        Ambientadas nos anos 80 e 90, as estórias são marcadas pelo ar sombrio, realista e sarcástico.
        </p>
    </div>

    <div className="menu3">
      <img src={Estorias}/>
      <h1>Estórias Tétricas, 2020</h1>
      <p>
      Estórias tétricas apresenta onze contos ambientados em terras paraenses que retratam a 
      violência urbana por lentes realistas, cruas e, por vezes, até irônicas. A narrativa aguda e 
      visceral escancara a sociedade na sarjeta, onde selvageria e condutas humanas se fundem.
      </p>
    </div>

    <div className="menu4">
      <img src={Penumbra}/>
      <h1>A Penumbra na Janela, 2022</h1>
      <p>
      Belém, 1984. A rotina do investigador de polícia Charles Magno cruza com um suicídio em um prédio 
      no centro da cidade. À medida que a investigação avança, mais ocorrências são deflagradas, tornando 
      o edifício conhecido pelo encontro com a morte. Breu, violência e misticismo se misturam em uma 
      narrativa intensa sobre a busca por fatos.
      </p>
    </div>

  </div>
}

export default Menu;