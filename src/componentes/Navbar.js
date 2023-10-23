import React, { useState } from 'react'

//import { Link } from 'react-router-dom'
//import ReorderIcon from "@material-ui/icons/Reorder";

import '../styles/Navbar.css'


function Navbar() {

      
    return <div className='navbar'>

            <div className='navbar1'>
                <button>H TAVARES</button>
            </div>

            <div className='navbar2'>
                <button> Home </button>
                <button> Livros </button>
                <button> Mídia </button>
                <button> Contato </button>
            </div>
        </div>

}

export default Navbar;