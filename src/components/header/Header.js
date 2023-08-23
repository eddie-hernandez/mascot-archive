import React from 'react'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <div className='blank' />
      <Navbar />
      <Link to="/" className="logo">
        <h1 className="logo-text">
          mascot
          <span className="logo-subtext"> archive</span>
        </h1>
      </Link>
    </div>
  )
}
