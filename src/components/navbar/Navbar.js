import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCursorHover } from '../../features/cursorSlice'
import './Navbar.css'
import * as mascotService from '../../utilities/mascot-service'

export default function Navbar({ setImages, setMascot }) {
  const dispatch = useDispatch()
  function handleTypeClick(type) {
    try {
      setMascot(null)
      setImages([])

      mascotService.indexMascotsByType(type).then((mascots) => {
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
        onClick={() => handleTypeClick('animal')}
        onMouseEnter={() => dispatch(setCursorHover(true))}
        onMouseLeave={() => dispatch(setCursorHover(false))}
      >
        <div className="link-container">
          <h5 className="link-text">animal</h5>
          <div className="active-dot" />
        </div>
      </NavLink>
      <NavLink
        to="/food"
        className={({ isActive }) =>
          isActive ? 'active-link navbar-link' : 'navbar-link'
        }
        onClick={() => handleTypeClick('food')}
        onMouseEnter={() => dispatch(setCursorHover(true))}
        onMouseLeave={() => dispatch(setCursorHover(false))}
      >
        <div className="link-container">
          <h5 className="link-text">food</h5>
          <div className="active-dot" />
        </div>
      </NavLink>
      <NavLink
        to="/lil-hat"
        className={({ isActive }) =>
          isActive ? 'active-link navbar-link' : 'navbar-link'
        }
        onClick={() => handleTypeClick('lil-hat')}
        onMouseEnter={() => dispatch(setCursorHover(true))}
        onMouseLeave={() => dispatch(setCursorHover(false))}
      >
        <div className="link-container">
          <h5 className="link-text">lil hat</h5>
          <div className="active-dot" />
        </div>
      </NavLink>
      <NavLink
        to="/random"
        className={({ isActive }) =>
          isActive ? 'active-link navbar-link' : 'navbar-link'
        }
        onClick={handleRandomClick}
        onMouseEnter={() => dispatch(setCursorHover(true))}
        onMouseLeave={() => dispatch(setCursorHover(false))}
      >
        <div className="link-container">
          <h5 className="link-text">random</h5>
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
        onMouseEnter={() => dispatch(setCursorHover(true))}
        onMouseLeave={() => dispatch(setCursorHover(false))}
      >
        <div className="link-container">
          <h5 className="link-text">submit</h5>
          <div className="active-dot" />
        </div>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? 'active-link navbar-link' : 'navbar-link'
        }
        onMouseEnter={() => dispatch(setCursorHover(true))}
        onMouseLeave={() => dispatch(setCursorHover(false))}
      >
        <div className="link-container">
          <h5 className="link-text">about</h5>
          <div className="active-dot" />
        </div>
      </NavLink>
    </nav>
  )
}
