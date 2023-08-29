import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import * as mascotService from '../../utilities/mascot-service'

export default function Navbar({ setImages, setMascot }) {
  function handleCategoryClick(category) {
    try {
      setImages([])
      setMascot(null)
      mascotService.indexMascotsByCategory(category).then((mascots) => {
        setImages(mascots)
      })
    } catch (error) {
      console.error('Error fetching mascots:', error)
    }
  }

  function handleRandomClick() {
    try {
      setImages([])
      setMascot(null)
      mascotService.indexRandomMascot().then((data) => {
        console.log(data)
        setMascot(data)
      })
    } catch (error) {
      console.error('Error fetching random mascot:', error)
    }
  }

  return (
    <nav className="navbar">
      <NavLink
        to="/animal"
        className={({ isActive }) =>
          isActive ? 'active-link navbar-link' : 'navbar-link'
        }
        onClick={() => handleCategoryClick('animal')}
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
        onClick={() => handleCategoryClick('food')}
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
        onClick={() => handleCategoryClick('lil-hat')}
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
        onClick={handleRandomClick}
      >
        <div className="link-container">
          <p className="link-text">random</p>
          <div className="active-dot" />
        </div>
      </NavLink>
      <NavLink
        to="/submit"
        className={({ isActive }) =>
          isActive ? 'active-link navbar-link' : 'navbar-link'
        }
        onClick={() => {
          setMascot(null)
          setImages([])
        }}
      >
        <div className="link-container">
          <p className="link-text">submit</p>
          <div className="active-dot" />
        </div>
      </NavLink>
    </nav>
  )
}
