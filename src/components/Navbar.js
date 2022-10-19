import React, { useState } from 'react'
import Logo from '../assets/maquina4.webp'
import { Link } from 'react-router-dom'
import ReorderIcon from "@material-ui/icons/Reorder";
import '../styles/Navbar.css'


function Navbar() {

      
    return <div className='navbar'>
            <div className='navbar2'>
                <button> Início </button>
                <button> Sobre </button>
                <button> Bibliografia </button>
                <button> Contato </button>
            </div>
        </div>

}

export default Navbar;