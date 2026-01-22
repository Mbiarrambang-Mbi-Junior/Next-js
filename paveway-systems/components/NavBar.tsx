import React from 'react'
import data from '../utils/data.json'
import PaveWay from './icons/PaveWay'
import { BiSearch, BiMoon, BiSun } from 'react-icons/bi'

function NavBar() {
  return (
   <header className='flex justify-between items-center'>
    <div className="header-logo">
        <PaveWay />
        <h1>Paveway Systems</h1>
    </div>
    <nav className="header-nav">
        <ul className="header-nav-list">
            {data.navbar.map((item) => (
                <li key={item.name}>{item.name}</li>
            ))}
        </ul>
    </nav>
    <div className="header-buttons">
        <button>Sign In</button>
        <button>Sign Up</button>
    </div>
   </header>
  )
}

export default NavBar