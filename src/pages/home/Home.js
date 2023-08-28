import React, { useState, useEffect } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Photo from '../../components/photo/Photo'
import * as mascotService from '../../utilities/mascot-service'

export default function Home() {
  const [images, setImages] = useState([])
  const [selectedMascot, setSelectedMascot] = useState(null)

  useEffect(() => {
    mascotService
      .indexAllMascots()
      .then((data) => {
        const mascotArray = data.mascot.filter((mascot) => mascot.approved)
        setImages(mascotArray)
      })
      .catch((error) => {
        console.error('Error fetching mascots', error)
      })
  }, [])

  function handleShowMascot(mascot) {
    setSelectedMascot(mascot)
  }

  // shuffling the images array
  const shuffledImages = [...images].sort(() => Math.random() - 0.5)

  const imageWidth = 150 // setting image width
  const imageHeight = 150 // setting image height

  // calculating the maximum positions for the images based on the container size
  const maxX = window.innerWidth - imageWidth
  const maxY = window.innerHeight - imageHeight

  const margin = 20 // Adjust this value to control the spacing between images

  const placedImages = []

  return (
    <div className="home-container">
      {shuffledImages.map((image, index) => {
        let newRandomX, newRandomY
        do {
          newRandomX = Math.random() * (maxX - imageWidth - margin) + margin
          newRandomY = Math.random() * (maxY - imageHeight - margin) + margin
        } while (
          placedImages.some(
            ({ x, y }) =>
              Math.abs(newRandomX - x) < imageWidth &&
              Math.abs(newRandomY - y) < imageHeight
          )
        )

        placedImages.push({ x: newRandomX, y: newRandomY })

        const imageStyle = {
          left: `${newRandomX}px`,
          top: `${newRandomY}px`,
        }

        return (
          <Link to={`/mascot/${image._id}`}>
            <Photo
              key={image._id}
              image={image}
              alt={`Mascot ${index}`}
              style={imageStyle}
            />
          </Link>
        )
      })}
    </div>
  )
}
