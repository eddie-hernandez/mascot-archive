import React from 'react'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header({ setImages, setMascot, handleMascotArchiveClick }) {

  return (
    <div className="header">
      <div className="blank" />
      <Navbar setImages={setImages} setMascot={setMascot} />
      <Link to="/" className="logo">
        <h1 className="logo-text" onClick={handleMascotArchiveClick}>
          mascot
          <span className="logo-subtext"> archive</span>
        </h1>
      </Link>
    </div>
  )
}
