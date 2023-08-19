import React, { useState, useEffect } from 'react'
import './Home.css'
import Photo from '../../components/photo/Photo'

// importing photos (HARD CODED, REMOVE WHEN SERVER IS BUILT)
import image1 from '../../assets/mascots/30D6B739-4EBE-4A06-B97B-EA9E070FEE31.jpg'
import image2 from '../../assets/mascots/IMG_0578.jpg'
import image3 from '../../assets/mascots/IMG_0611.jpeg'
import image4 from '../../assets/mascots/IMG_3126.jpg'
import image5 from '../../assets/mascots/IMG_3937.jpg'
import image6 from '../../assets/mascots/IMG_4154.jpg'
import image7 from '../../assets/mascots/IMG_4155.jpg'
import image8 from '../../assets/mascots/IMG_4175.jpg'
import image9 from '../../assets/mascots/IMG_4400.jpeg'
import image10 from '../../assets/mascots/IMG_4405.jpeg'
import image11 from '../../assets/mascots/IMG_4818.jpg'
import image12 from '../../assets/mascots/IMG_5083.jpeg'
import image13 from '../../assets/mascots/IMG_5399.jpeg'
import image14 from '../../assets/mascots/IMG_5588.jpeg'
import image15 from '../../assets/mascots/IMG_6311.jpg'
import image16 from '../../assets/mascots/IMG_6704.jpeg'
import image17 from '../../assets/mascots/IMG_6923.jpeg'
import image18 from '../../assets/mascots/IMG_7223.jpeg'
import image19 from '../../assets/mascots/IMG_7757.jpeg'
import image20 from '../../assets/mascots/IMG_7981.jpg'
import image21 from '../../assets/mascots/IMG_7982.jpg'
import image22 from '../../assets/mascots/IMG_8263.jpeg'
import image23 from '../../assets/mascots/IMG_8611.jpeg'
import image24 from '../../assets/mascots/IMG_8727.jpeg'
import image25 from '../../assets/mascots/IMG_9042.jpeg'
import image26 from '../../assets/mascots/IMG_9139.jpeg'

export default function Home() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
  ]

  // Shuffle the images array
  const shuffledImages = [...images].sort(() => Math.random() - 0.5)

  const [imagePositions, setImagePositions] = useState([])

  const gridWidth = 100
  const gridHeight = 100
  const cellSize = 25

  const cellsPerRow = Math.floor(gridWidth / cellSize)
  const totalCells =
    Math.floor(gridWidth / cellSize) * Math.floor(gridHeight / cellSize)

  useEffect(() => {
    const positions = []
    const occupiedCells = new Set()

    images.forEach((image, index) => {
      let attempts = 0

      while (attempts < totalCells) {
        const randomCell = Math.floor(Math.random() * totalCells)

        if (!occupiedCells.has(randomCell)) {
          const row = Math.floor(randomCell / cellsPerRow)
          const col = randomCell % cellsPerRow

          const left = `${col * cellSize}vw`
          const top = `${row * cellSize}vh`

          const xOffset = Math.random() * cellSize * 0.5
          const yOffset = Math.random() * cellSize * 0.5

          positions[index] = {
            top: `calc(${top} + ${yOffset}vh)`,
            left: `calc(${left} + ${xOffset}vw)`,
          }

          occupiedCells.add(randomCell)
          break
        }

        attempts++
      }
    })

    setImagePositions(positions)
  }, [])

  return (
    <div className="home-container">
      {shuffledImages.map((image, index) => (
        <Photo key={index} image={image} style={imagePositions[index]} />
      ))}
    </div>
  )
}
