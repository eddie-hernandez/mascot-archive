import React, { useEffect } from 'react'
import './Home.css'
import * as mascotService from '../../utilities/mascot-service'
import Gallery from '../../components/gallery/Gallery'
import Navbar from '../../components/navbar/Navbar'

export default function Home({
  images,
  setImages,
  shuffleImages,
  setMascot,
  logoClicked,
  setLogoClicked,
}) {
  useEffect(() => {
    mascotService
      .indexApprovedMascots()
      .then((mascots) => {
        shuffleImages(mascots)
        setImages(mascots)
      })
      .catch((error) => {
        console.error('Error fetching mascots', error)
      })
  }, [setImages])

  return (
    <>
      <Gallery
        images={images}
        setMascot={setMascot}
        setImages={setImages}
        shuffleImages={shuffleImages}
        logoClicked={logoClicked}
        setLogoClicked={setLogoClicked}
      />
    </>
  )
}
