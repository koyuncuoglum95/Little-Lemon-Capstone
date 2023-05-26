import React from 'react'
import './Navbar.css'
import lemon from '../../assets/littleLemon.png';


const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
        <img src={lemon} alt='lemon' style={{height: '35px', paddingTop: '8px'}}/>
        </li>
        <li><a className="active" href="/">Home</a></li>
        <li><a href="/">Menus</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </div>
  )
}

export default Navbar