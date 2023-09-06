import React, { useEffect } from 'react'
import './Home.css'
import * as mascotService from '../../utilities/mascot-service'
import Gallery from '../../components/gallery/Gallery'

export default function Home({ images, setImages }) {

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
    <div className='gallery-wrapper'>
      <Gallery images={images} />
    </div>
  )
}
