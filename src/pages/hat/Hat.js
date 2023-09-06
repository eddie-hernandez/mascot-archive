import React from 'react'
import './Hat.css'
import Gallery from '../../components/gallery/Gallery'

export default function Hat({ images }) {
  return (
    <div className="gallery-wrapper">
      <Gallery images={images} />
    </div>
  )
}
