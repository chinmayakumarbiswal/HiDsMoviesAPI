import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
        <div className="logo left">
            <i id="menu" className="material-icons">menu</i>
            <img src="yt-logo.png" alt="youtube"/>
        </div>
            
        <div className="search center">
            <form action="">
                <input type="text" placeholder="Search" />
                <button><i className="material-icons">search</i></button>
            </form>
            <i className="material-icons mic">mic</i>
        </div>
            
        <div className="icons right">
            <i className="material-icons">videocam</i>
            <i className="material-icons">apps</i>
            <i className="material-icons">notifications</i>
            <i className="material-icons display-this">account_circle</i>
        </div>
    </header>
  )
}

export default Header