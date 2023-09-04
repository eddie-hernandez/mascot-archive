import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Photo from '../photo/Photo';
import './Gallery.css';

export default function Gallery({ images }) {
  const imageWidth = 150;
  const imageHeight = 150;
  const margin = 20;

  const [placedImages, setPlacedImages] = useState([]);

  useEffect(() => {
    const maxX = window.innerWidth - imageWidth - margin;
    const maxY = window.innerHeight - imageHeight;

    const shuffledImages = [...images].sort(() => Math.random() - 0.5);

    const newPlacedImages = [];

    shuffledImages.forEach((image, index) => {
      let newRandomX, newRandomY;
      let attempts = 0;

      // keep generating new X-coordinate until it's within screen boundaries
      do {
        newRandomX = Math.random() * maxX;
        newRandomY = Math.random() * maxY;

        attempts++;

        // if it takes too many attempts, break to prevent infinite loop
        if (attempts > 100) {
          break;
        }
      } while (
        newPlacedImages.some(
          ({ x, y }) =>
            Math.abs(newRandomX - x) < imageWidth &&
            Math.abs(newRandomY - y) < imageHeight
        )
      );

      newPlacedImages.push({ x: newRandomX, y: newRandomY, id: image._id });
    });

    setPlacedImages(newPlacedImages);
  }, [images]);

  return (
    <div className="gallery-container">
      {images.map((image, index) => {
        const placedImage = placedImages.find((pi) => pi.id === image._id);

        if (!placedImage) {
          // handle images not yet placed
          return null;
        }

        const imageStyle = {
          left: `${placedImage.x}px`,
          top: `${placedImage.y}px`,
        };

        return (
          <Link to={`/mascot/${image._id}`} key={image._id}>
            <Photo image={image} alt={`Mascot ${index}`} style={imageStyle} />
          </Link>
        );
      })}
    </div>
  );
}