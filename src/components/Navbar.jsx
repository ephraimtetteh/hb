import React from 'react'
import assets from '../assets/assests.jsx'

const Navbar = () => {
  return (
    <div>
      <nav className='flex'>
        {/* navbar right section */}
        <div className="right">
          <img src={assets.logo} alt="" className='w-1xl'/>
        </div>

        {/* navbar left section */}
        <div>
          <ul className='flex'>
            <li><a href="">Find A Home</a></li>
            <li><a href="">Communities</a></li>
            <li><a href="">Plan & Design</a></li>
            <li><a href="">Catalogue</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar