import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'

// importing logo
import logoInactive from '../../assets/logo/mascot-archive-logo-black.svg'
import logoActive from '../../assets/logo/mascot-archive-logo-green.svg'

export default function Logo() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="logo-container">
      <Link to="/">
        <img
          className="logo"
          src={isHovered ? logoActive : logoInactive}
          alt="mascot archive logo"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </Link>
    </div>
  )
}
