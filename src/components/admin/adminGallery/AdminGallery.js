import React from 'react'
import { useDispatch } from 'react-redux'
import { setCursorHover } from '../../../features/cursorSlice'
import './AdminGallery.css'

export function PendingGallery({ pendingSubs, handleSort }) {
  const dispatch = useDispatch()
  return (
    <div className="admin-gallery">
      {pendingSubs.map((submission) => (
        <div className="admin-sub-container" key={submission._id}>
          <img
            className="admin-sub-img"
            src={submission.imagePath}
            alt="submission"
          />
          <h6><u><span style={{ fontWeight: 'bold' }}>Types</span></u>: {submission.types.length !== 0 ? submission.types.join(', ') : 'n/a'}</h6>
          <h6><u><span style={{ fontWeight: 'bold' }}>Location</span></u>: {submission.locationDescription ? submission.locationDescription : 'n/a'}</h6>
          <h6><u><span style={{fontWeight: 'bold'}}>Comments</span></u>: {submission.comments ? submission.comments : 'n/a'}</h6>
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
    <div className="admin-gallery">
      {approvedSubs.map((submission) => (
        <div className="admin-sub-container" key={submission._id}>
          <img
            className="admin-sub-img"
            src={submission.imagePath}
            alt="submission"
          />
          <h6><u><span style={{fontWeight: 'bold'}}>Types</span></u>: {submission.types.length !== 0 ? submission.types.join(', ') : 'n/a'}</h6>
          <h6><u><span style={{fontWeight: 'bold'}}>Location</span></u>: {submission.locationDescription ? submission.locationDescription : 'n/a'}</h6>
          <h6><u><span style={{fontWeight: 'bold'}}>Comments</span></u>: {submission.comments ? submission.comments : 'n/a'}</h6>
        </div>
      ))}
    </div>
  )
}

export function DeniedGallery({ deniedSubs }) {
  return (
    <div className="admin-gallery">
      {deniedSubs.map((submission) => (
        <div className="admin-sub-container" key={submission._id}>
          <img
            className="admin-sub-img"
            src={submission.imagePath}
            alt="submission"
          />
          <h6><u><span style={{fontWeight: 'bold'}}>Types</span></u>: {submission.types.length !== 0 ? submission.types.join(', ') : 'n/a'}</h6>
          <h6><u><span style={{fontWeight: 'bold'}}>Location</span></u>: {submission.locationDescription ? submission.locationDescription : 'n/a'}</h6>
          <h6><u><span style={{fontWeight: 'bold'}}>Comments</span></u>: {submission.comments ? submission.comments : 'n/a'}</h6>
        </div>
      ))}
    </div>
  )
}
