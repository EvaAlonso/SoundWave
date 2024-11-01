import React from 'react'
import logo from"../../../assets/logo.png"
import "./logo.css"

function Logo() {
  return (
    <>
    <div className="logo-container">
    <img src={logo} alt=""/>
    <p>Soundwave</p>
    </div>
    
    </>
  )
}

export default Logo