import React from 'react'
import './style.css'

const index = () => {
  return (
    <>
    <div className="Navbar">
      <ul className='Navbar__item'>
        <li className="navbar__item__list">
          <button className='button button-black'>Register</button>
        </li>
        <li className="navbar__item__list">
          <button className='button button-orange'>Login</button>
        </li>
      </ul>
     
    </div>
    </>
  )
}

export default index