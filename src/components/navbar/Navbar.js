import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/animal"
        className={({ isActive }) =>
          isActive ? 'active-link navbar-link' : 'navbar-link'
        }
      >
        <div className="link-container">
          <p className="link-text">animal</p>
          <div className="active-dot" />
        </div>
      </NavLink>
      <NavLink
        to="/food"
        className={({ isActive }) =>
          isActive ? 'active-link navbar-link' : 'navbar-link'
        }
      >
        <div className="link-container">
          <p className="link-text">food</p>
          <div className="active-dot" />
        </div>
      </NavLink>
      <NavLink
        to="/hats"
        className={({ isActive }) =>
          isActive ? 'active-link navbar-link' : 'navbar-link'
        }
      >
        <div className="link-container">
          <p className="link-text">lil hats</p>
          <div className="active-dot" />
        </div>
      </NavLink>
      <NavLink
        to="/random"
        className={({ isActive }) =>
          isActive ? 'active-link navbar-link' : 'navbar-link'
        }
      >
        <div className="link-container">
          <p className="link-text">random</p>
          <div className="active-dot" />
        </div>
      </NavLink>
    </nav>
  )
}
