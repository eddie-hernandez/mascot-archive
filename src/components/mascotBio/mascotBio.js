import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './MascotBio.css'
import * as mascotService from '../../utilities/mascot-service'

export default function MascotBio({ setMascot, mascot }) {
  const { id } = useParams()

  useEffect(() => {
    mascotService
      .showMascot(id)
      .then((response) => {
        console.log(response)
        setMascot(response.mascot)
      })
      .catch((error) => {
        console.error('Error fetching mascot details', error)
      })
  }, [])

  return (
    <>
      {mascot && (
        <div className="mascot-bio-container">
          <img
            src={mascot.imagePath}
            className="mascot-bio-photo"
            alt={mascot._id}
          />
          <div className="mascot-bio">
            <div className="mascot-bio-group">
              <p>TYPE</p>
              <p>{mascot.category}</p>
            </div>
            <div className="mascot-bio-group">
              <p>LOCATION</p>
              <p>{mascot.locationDescription}</p>
            </div>
            <div className="mascot-bio-group">
              <p>ETC</p>
              <p>{mascot.comments}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
