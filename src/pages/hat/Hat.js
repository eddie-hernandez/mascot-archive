import React from 'react'
import './Hat.css'
import Gallery from '../../components/gallery/Gallery'

export default function Hat({
  images,
  setMascot,
  setImages,
  shuffleImages,
  logoClicked,
  setLogoClicked,
}) {
  return (
    <div className="gallery-wrapper">
      <Gallery
        images={images}
        setMascot={setMascot}
        setImages={setImages}
        shuffleImages={shuffleImages}
        logoClicked={logoClicked}
        setLogoClicked={setLogoClicked}
      />
    </div>
  )
}
