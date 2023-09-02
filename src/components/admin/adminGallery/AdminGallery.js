import React from 'react'
import { useDispatch } from 'react-redux'
import { setCursorHover } from '../../../features/cursorSlice'
import './AdminGallery.css'

export function PendingGallery({ pendingSubs, handleSort }) {
  const dispatch = useDispatch()
  return (
    <div className="gallery">
      {pendingSubs.map((submission) => (
        <div className="admin-sub-container" key={submission._id}>
          <img
            className="admin-sub-img"
            src={submission.imagePath}
            alt="submission"
          />
          <p><u><span style={{ fontWeight: 'bold' }}>Types</span></u>: <i>{submission.types.join(', ')}</i></p>
          <p><u><span style={{ fontWeight: 'bold' }}>Location</span></u>: <i>{submission.locationDescription}</i></p>
          <p><u><span style={{fontWeight: 'bold'}}>Comments</span></u>: <i>{submission.comments ? submission.comments : 'n/a'}</i></p>
          <div className='classify-btns'>
            <button
              className="styledbtn"
              onClick={() => handleSort(submission._id, true)}
              onMouseEnter={() => dispatch(setCursorHover(true))} 
              onMouseLeave={() => dispatch(setCursorHover(false))}
            >
              Approve
            </button>
            <button
              className="styledbtn"
              onClick={() => handleSort(submission._id, false)}
              onMouseEnter={() => dispatch(setCursorHover(true))} 
              onMouseLeave={() => dispatch(setCursorHover(false))}
            >
              Deny
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export function ApprovedGallery({ approvedSubs }) {
  return (
    <div className="gallery">
      {approvedSubs.map((submission) => (
        <div className="admin-sub-container" key={submission._id}>
          <img
            className="admin-sub-img"
            src={submission.imagePath}
            alt="submission"
          />
          <p><u><span style={{fontWeight: 'bold'}}>Types</span></u>: <i>{submission.types.join(', ')}</i></p>
          <p><u><span style={{fontWeight: 'bold'}}>Location</span></u>: <i>{submission.locationDescription}</i></p>
          <p><u><span style={{fontWeight: 'bold'}}>Comments</span></u>: <i>{submission.comments ? submission.comments : 'n/a'}</i></p>
        </div>
      ))}
    </div>
  )
}

export function DeniedGallery({ deniedSubs }) {
  return (
    <div className="gallery">
      {deniedSubs.map((submission) => (
        <div className="admin-sub-container" key={submission._id}>
          <img
            className="admin-sub-img"
            src={submission.imagePath}
            alt="submission"
          />
          <p><u><span style={{fontWeight: 'bold'}}>Types</span></u>: <i>{submission.types.join(', ')}</i></p>
          <p><u><span style={{fontWeight: 'bold'}}>Location</span></u>: <i>{submission.locationDescription}</i></p>
          <p><u><span style={{fontWeight: 'bold'}}>Comments</span></u>: <i>{submission.comments ? submission.comments : 'n/a'}</i></p>
        </div>
      ))}
    </div>
  )
}
