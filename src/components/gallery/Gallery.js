import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Photo from '../photo/Photo'
import './Gallery.css'

export default function Gallery({ images, setCursorHover }) {
  const imageWidth = 150
  const imageHeight = 150
  // Adjust value to control the spacing between images
  const margin = 20

  const [placedImages, setPlacedImages] = useState([])

  useEffect(() => {
    // Check if placedImages is empty and resetPlacement is true to re-randomize positions

    const maxX = window.innerWidth - imageWidth
    const maxY = window.innerHeight - imageHeight

    const newPlacedImages = []
    images.forEach((image) => {
      let newRandomX, newRandomY
      do {
        newRandomX = Math.random() * (maxX - imageWidth - margin) + margin
        newRandomY = Math.random() * (maxY - imageHeight - margin) + margin
      } while (
        newPlacedImages.some(
          ({ x, y }) =>
            Math.abs(newRandomX - x) < imageWidth &&
            Math.abs(newRandomY - y) < imageHeight
        )
      )

      newPlacedImages.push({ x: newRandomX, y: newRandomY })
    })

    setPlacedImages(newPlacedImages)
  }, [images])

  return (
    <div className="gallery-container">
      {images.map((image, index) => {
        // Check if placedImages[index] is defined before accessing its properties
        const imageStyle = placedImages[index]
          ? {
              left: `${placedImages[index].x}px`,
              top: `${placedImages[index].y}px`,
            }
          : {}

        return (
          <Link to={`/mascot/${image._id}`} key={image._id}>
            <motion.div
              className="photo-container"
              onMouseEnter={() => setCursorHover(true)} 
              onMouseLeave={() => setCursorHover(false)}
            >
              <Photo image={image} alt={`Mascot ${index}`} style={imageStyle} />
            </motion.div>
          </Link>
        )
      })}
    </div>
  )
}
