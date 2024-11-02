import React from 'react'
import logo from"../../../assets/logo.png"
import "./logo.css"
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <>
    <Link to="/">
    <div className="logo-container">
    <img src={logo} alt=""/>
    <p>Soundwave</p>
    </div>
    </Link>
    </>
  )
}

export default Logo