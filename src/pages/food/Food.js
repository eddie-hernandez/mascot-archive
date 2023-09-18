import React from 'react'
import './Food.css'
import Gallery from '../../components/gallery/Gallery'

export default function Food({
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
