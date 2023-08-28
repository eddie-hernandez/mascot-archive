import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './mascotBio.css'
import * as mascotService from '../../utilities/mascot-service'

export default function MascotBio() {
  const { id } = useParams()
  const [mascot, setMascot] = useState(null)

  useEffect(() => {
    mascotService
      .showMascot(id)
      .then((response) => {
        setMascot(response.mascot)
      })
      .catch((error) => {
        console.error('Error fetching mascot details', error)
      })
  }, [id])

  console.log(mascot)

  return (
    <>
      {mascot && (
        <div className="mascot-bio-container">
          <img src={mascot.imagePath} className="mascot-bio-photo" />
          <div className="mascot-bio">
            <div className='mascot-bio-group'>
              <p>TYPE</p>
              <p>{mascot.category}</p>
            </div>
            <div className='mascot-bio-group'>
              <p>LOCATION</p>
              <p>{mascot.locationDescription}</p>
            </div>
            <div className='mascot-bio-group'>
              <p>ETC</p>
              <p>{mascot.comments}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
