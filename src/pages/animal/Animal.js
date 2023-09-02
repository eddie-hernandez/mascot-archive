import React from 'react'
import './Animal.css'
import Gallery from '../../components/gallery/Gallery'

export default function Animal({ images, setCursorHover }) {
  return (
    <div className="animal-container">
      <Gallery images={images} setCursorHover={setCursorHover} />
    </div>
  )
}
