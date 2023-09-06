import React from 'react'
import './Animal.css'
import Gallery from '../../components/gallery/Gallery'

export default function Animal({ images }) {
  return (
    <div className="gallery-wrapper">
      <Gallery images={images} />
    </div>
  )
}
