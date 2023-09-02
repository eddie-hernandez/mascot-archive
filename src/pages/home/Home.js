import React, { useEffect } from 'react'
import './Home.css'
import * as mascotService from '../../utilities/mascot-service'
import Gallery from '../../components/gallery/Gallery'

export default function Home({ images, setImages, setCursorHover }) {

  useEffect(() => {
    mascotService
      .indexApprovedMascots()
      .then((data) => {
        setImages(data);
      })
      .catch((error) => {
        console.error('Error fetching mascots', error);
      });
  }, [setImages]);

  return (
    <>
      <Gallery images={images} setCursorHover={setCursorHover} />
    </>
  )
}
