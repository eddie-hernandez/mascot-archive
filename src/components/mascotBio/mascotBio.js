import React, { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import './MascotBio.css'
import * as mascotService from '../../utilities/mascot-service'

export default function MascotBio({ setMascot, mascot }) {
  const { id } = useParams()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/random') {
      mascotService
        .showMascot(id)
        .then((response) => {
          console.log(response)
          setMascot(response.mascot)
        })
        .catch((error) => {
          console.error('Error fetching mascot details', error)
        })
    }
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
              <h6>TYPE(S)</h6>
              <p><i>{mascot.types.join(', ')}</i></p>
            </div>
            <div className="mascot-bio-group">
              <h6>LOCATION</h6>
              <p><i>{mascot.locationDescription}</i></p>
            </div>
            <div className="mascot-bio-group">
              <h6>ETC</h6>
              <p><i>{mascot.comments ? mascot.comments : 'n/a'}</i></p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
