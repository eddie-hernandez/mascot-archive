import React from 'react'
import './Photo.css'

export default function Photo({ image, style }) {
  return (
    <img
      className="mascot-photo"
      src={image}
      alt=''
      style={style}
    />
  )
}
