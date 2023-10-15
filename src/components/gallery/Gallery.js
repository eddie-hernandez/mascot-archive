import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Photo from '../photo/Photo'
// import InfiniteScroll from 'react-infinite-scroll-component'
// import Navbar from '../navbar/Navbar'
import './Gallery.css'

export default function Gallery({
  images,
  isLoading,
  // setMascot,
  // setImages,
  // shuffleImages,
  logoClicked,
  setLogoClicked,
}) {
  // const [galleryContainers, setGalleryContainers] = useState([])
  // const [galleryCount, setGalleryCount] = useState(0)
  // const [isEndOfImages, setIsEndOfImages] = useState(false)
  // const scrollContainerRef = useRef(null)

  // reset gallery on logo click
  useEffect(() => {
    if (logoClicked) {
      // setGalleryContainers([])
      // setGalleryCount(0)
      // setIsEndOfImages(false)
      setLogoClicked(false)
    }
  }, [logoClicked, setLogoClicked])

  // useEffect(() => {
  //   setGalleryContainers([createGalleryContainer(images.slice(0, 10))])

  //   if (scrollContainerRef.current) {
  //     const infiniteScrollElement = scrollContainerRef.current.querySelector(
  //       '.infinite-scroll-component'
  //     )
  //     infiniteScrollElement.scrollableTarget = scrollContainerRef.current
  //   }
  // }, [images])

  //   function createGalleryContainer(images) {
  //     const containerWidth = window.innerWidth - 50
  //     const containerHeight = window.innerHeight - 50
  //     const minDistance = 20
  //     const imageSize = 100
  //     const maxAttempts = 100
  //     const positions = []

  //     function getRandomPosition() {
  //       let attempt = 0
  //       while (attempt < maxAttempts) {
  //         const randomLeft = Math.floor(
  //           minDistance +
  //             Math.random() * (containerWidth - imageSize - minDistance)
  //         )

  //         const randomTop = Math.floor(
  //           minDistance +
  //             Math.random() * (containerHeight - imageSize - minDistance)
  //         )

  //         const newPosition = { left: randomLeft, top: randomTop }
  //         const isOverlap = positions.some((existingPosition) => {
  //           const dx = newPosition.left - existingPosition.left
  //           const dy = newPosition.top - existingPosition.top
  //           const distance = Math.sqrt(dx * dx + dy * dy)
  //           return distance < imageSize
  //         })

  //         if (!isOverlap) {
  //           positions.push(newPosition)
  //           return { left: `${randomLeft}px`, top: `${randomTop}px` }
  //         }

  //         attempt++
  //       }

  //       // if we can't find a non-overlapping position after maxAttempts, just use a default position
  //       return { left: '20px', top: '20px' }
  //     }

  //     setGalleryCount((prevCount) => prevCount + 1)

  //     return (
  //       <div className="image-container" key={galleryCount}>
  //         {images.map((image, index) => {
  //           const position = getRandomPosition()

  //           return (
  //             <Link to={`/mascot/${image._id}`} key={image._id}>
  //               <Photo image={image} alt={`Mascot ${index}`} style={position} />
  //             </Link>
  //           )
  //         })}
  //       </div>
  //     )
  //   }

  //   function loadMoreImages() {
  //     if (isLoading) {
  //       return
  //     }

  //     setIsLoading(true)

  //     const imagesToLoad = 10
  //     const currentCount = galleryContainers.length * imagesToLoad
  //     const newImages = images.slice(currentCount, currentCount + imagesToLoad)

  //     if (newImages.length > 0) {
  //       const newContainer = createGalleryContainer(newImages)
  //       setGalleryContainers([...galleryContainers, newContainer])
  //     }

  //     setIsLoading(false)

  //     if (currentCount + newImages.length >= images.length) {
  //       setIsEndOfImages(true)
  //     } else {
  //       setIsEndOfImages(false)
  //     }
  //   }

  //   return (
  //     <div ref={scrollContainerRef} id="scrollableDiv">
  //       <div className="mobile-nav">
  //         <Navbar
  //           setImages={setImages}
  //           setMascot={setMascot}
  //           shuffleImages={shuffleImages}
  //         />
  //       </div>
  //       <InfiniteScroll
  //         dataLength={galleryContainers.length}
  //         next={loadMoreImages}
  //         hasMore={!isEndOfImages}
  //         scrollableTarget="scrollableDiv"
  //         loader={<p className="scroll-message">loading...</p>}
  //         endMessage={<div className="scroll-message"></div>}
  //         // endMessage={<div className="scroll-message">hello i am a test :)</div>}
  //       >
  //         {galleryContainers}
  //       </InfiniteScroll>
  //     </div>
  //   )

  return (
    // isLoading ?
    <div className="loading-container">
      <h2 className="loading-message">(the archive is loading...)</h2>
    </div>
  )
  // ) : (
  //   <div className="gallery-container">
  //     {images.map((image, index) => (
  //       <div className="mascot-photo-container" key={image._id}>
  //         <Link to={`/mascot/${image._id}`}>
  //           <Photo image={image} alt={`Mascot ${index}`} />
  //         </Link>
  //       </div>
  //     ))}
  //     {/* <h4>congrats!<br />you've reached the end of the mascots on this page ; )!</h4> */}
  //   </div>
  // )
}

// TO-DOS: figure out how to generate a random position as a default after max attempts
// PRIORITY TO-DO: figure out how to refresh the states of everything on this page on a logo click
