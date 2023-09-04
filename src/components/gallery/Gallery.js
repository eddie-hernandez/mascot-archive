import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Photo from '../photo/Photo'
import './Gallery.css'

export default function Gallery({ images }) {
  const imageWidth = 150
  const imageHeight = 150
  // adjust value to control the spacing between images
  const margin = 20

  const [placedImages, setPlacedImages] = useState([])

  useEffect(() => {
    // Check if placedImages is empty and resetPlacement is true to re-randomize positions
    const maxX = window.innerWidth - imageWidth
    const maxY = window.innerHeight - imageHeight
    const initialY = margin // Initial vertical position
    let currentY = initialY // Current vertical position

    const newPlacedImages = []
    images.forEach((image) => {
      let newRandomX, newRandomY
      do {
        newRandomX = Math.random() * (maxX - imageWidth - margin) + margin
        newRandomY = currentY // Use the currentY value for vertical position
      } while (
        newPlacedImages.some(
          ({ x, y }) =>
            Math.abs(newRandomX - x) < imageWidth &&
            Math.abs(newRandomY - y) < imageHeight
        )
      )

      newPlacedImages.push({ x: newRandomX, y: newRandomY })

      // Increment the currentY value to space images vertically
      currentY += imageHeight + margin
    })

    setPlacedImages(newPlacedImages)
  }, [images])

  // REGUALAR POSITIONS
  //   return (
  //     <div className="gallery-container">
  //       {images.map((image, index) => {
  //         return (
  //           <Link to={`mascot/${image._id}`} key={image._id}>
  //             <Photo image={image} alt={`Mascot ${index}`} />
  //           </Link>
  //         )
  //       })}
  //     </div>
  //   )
  // }

  return (
    <div className="gallery-container">
      {/* map thru images to compare with placedImages array */}
      {images.map((image, index) => {
        // check if placedImages[index] is defined before accessing its properties
        const imageStyle = placedImages[index]
          ? {
              left: `${placedImages[index].x}px`,
              top: `${placedImages[index].y}px`,
            }
          : {}

        return (
          <Link to={`/mascot/${image._id}`} key={image._id}>
              <Photo image={image} alt={`Mascot ${index}`} style={imageStyle} />
          </Link>
        )
      })}
    </div>
  )
}
