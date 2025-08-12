import React from 'react'
import assets from '../assets/assests.jsx'

const Footer = () => {
  return (
    
      <footer className='bg-blue-950 h-{595px}'>
        <div className='justify-between py-8 px-8 flex align-center'>
        {/* right side */}
        <div>
          <img src="assets.logo" alt="" />
          <div>
            <p><span>Address</span>39, 1st Circular Crescent Cantoment, Accra - Ghana</p>
            <p><span>Digital Address: </span>GL059-9755</p>
            <p><span>Tel: </span>+1 (469) 410-9683</p>
          </div>
        </div>

        {/*footer left side */}
        <div>
          <a href="">Privacy</a>
          <a href="">Carrers</a>
          <a href="">Legal</a>
          <a href="">Realtors</a>
          <a href="">Contact Us</a>
          <a href="">Site Map</a>
        </div>
        </div>

       <div className='flex justify-between items-center'> 
          <div>
            <p>Copyright 2025 Honest Builders, LLC, All right reserved</p>
          </div>

          {/* socials */}
          <div className=''>
            <img src={assets.instagram} alt="" />
            <img src={assets.linkedIn} alt="" />
            <img src={assets.youtube} alt="" />
          </div>
        </div>
       
      </footer>
  )
}

export default Footer