import React from 'react'
import './Hat.css'
import Gallery from '../../components/gallery/Gallery'

export default function Hat({ images, setCursorHover }) {
  return (
    <div className="hat-container">
      <Gallery images={images} setCursorHover={setCursorHover} />
    </div>
  )
}
