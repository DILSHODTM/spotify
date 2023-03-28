import React from 'react'
import Logo from '../../assets/Images/Logo.png'
import './style.css'

const index = () => {
  return (
    <>
      <div className="menubar">
        <div className="menubar__logo">
          <img src={Logo} className="logo" alt="Netflix Logo" />
          <h1>Spotify</h1>
        </div>
        <div>
          <ul className="menubar__list">
            <li className="menubar__list-item">Home</li>
            <li className="menubar__list-item">Search</li>
            <li className="menubar__list-item">My List</li>

          </ul>

        <ul className='menubar__list'>
          <li className="menubar__list-item">Create playlist</li>
          <li className="menubar__list-item">Liked tracks</li>

        </ul>


        </div>
        </div>

    
    </>
  )
}

export default index
