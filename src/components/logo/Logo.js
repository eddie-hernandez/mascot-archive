import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { setCursorHover } from '../../features/cursorSlice'
import './Logo.css'

// importing logo
import logoInactive from '../../assets/logo/mascot-archive-logo-black.svg'
import logoActive from '../../assets/logo/mascot-archive-logo-green.svg'

export default function Logo({ handleLogoClick }) {
  const dispatch = useDispatch()
  const [isHovered, setIsHovered] = useState(false)

  function logoHoverOn() {
    dispatch(setCursorHover(true))
    setIsHovered(true)
  }

  function logoHoverOff() {
    dispatch(setCursorHover(false))
    setIsHovered(false)
  }

  return (
    <motion.div className="logo-container">
      <Link to="/">
        <img
          className="logo"
          src={isHovered ? logoActive : logoInactive}
          alt="mascot archive logo"
          onMouseEnter={logoHoverOn}
          onMouseLeave={logoHoverOff}
          onClick={handleLogoClick}
        />
      </Link>
    </motion.div>
  )
}
