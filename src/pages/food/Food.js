import React from 'react'
import './Food.css'
import Gallery from '../../components/gallery/Gallery'

export default function Food({ images, setCursorHover }) {
  return (
    <div className="food-container">
      <Gallery images={images} setCursorHover={setCursorHover} />
    </div>
  )
}
