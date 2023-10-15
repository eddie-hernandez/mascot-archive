import React from 'react'
import './Animal.css'
import Gallery from '../../components/gallery/Gallery'

export default function Animal({
  images,
  setImages,
  setMascot,
  shuffleImages,
  logoClicked,
  setLogoClicked,
  isLoading
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
        isLoading={isLoading}
      />
    </div>
  )
}
