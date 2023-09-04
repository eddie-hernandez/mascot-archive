import React from 'react'
import './Hat.css'
import Gallery from '../../components/gallery/Gallery'

export default function Hat({ images }) {
  return (
    <div className="hat-container">
      <Gallery images={images} />
    </div>
  )
}
