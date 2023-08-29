import React from 'react'
import { Link } from 'react-router-dom'
import Photo from '../photo/Photo'
import './Gallery.css'

export default function Gallery({ images }) {

  const imageWidth = 150 // setting image width
  const imageHeight = 150 // setting image height

  // calculating the maximum positions for the images based on the container size
  const maxX = window.innerWidth - imageWidth
  const maxY = window.innerHeight - imageHeight

  const margin = 20 // Adjust this value to control the spacing between images

  const placedImages = []

  return (
    <div className="gallery-container">
      {images.map((image, index) => {
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
          <Link to={`/mascot/${image._id}`} key={image._id}>
            <Photo image={image} alt={`Mascot ${index}`} style={imageStyle} />
          </Link>
        )
      })}
    </div>
  )
}
