import React from 'react'
import './Food.css'
import Gallery from '../../components/gallery/Gallery'

export default function Food({ images }) {
  return (
    <div className="food-container">
      <Gallery images={images} />
    </div>
  )
}
