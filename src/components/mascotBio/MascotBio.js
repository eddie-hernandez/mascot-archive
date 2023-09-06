import React, { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCursorHover } from '../../features/cursorSlice'
import './MascotBio.css'
import * as mascotService from '../../utilities/mascot-service'

export default function MascotBio({ setMascot, mascot }) {
  const dispatch = useDispatch()
  const { id } = useParams()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/random') {
      mascotService
        .showMascot(id)
        .then((response) => {
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
            onMouseEnter={() => dispatch(setCursorHover(true))}
            onMouseLeave={() => dispatch(setCursorHover(false))}
          />
          <div className="mascot-bio">
            <div className="mascot-bio-group">
              <h6>TYPE(S)</h6>
              <p>{mascot.types ? mascot.types.join(', ') : 'n/a'}</p>
            </div>
            <div className="mascot-bio-group">
              <h6>LOCATION</h6>
              <p>{mascot.locationDescription ? mascot.locationDescription : 'n/a'}</p>
            </div>
            <div className="mascot-bio-group">
              <h6>ETC</h6>
              <p>{mascot.comments ? mascot.comments : 'n/a'}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
