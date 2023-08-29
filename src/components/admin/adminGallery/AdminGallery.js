import React from 'react'
import './AdminGallery.css'

export function PendingGallery({ pendingSubs, handleSort }) {
  return (
    <div className="gallery">
      {pendingSubs.map((submission) => (
        <div className="admin-sub-container" key={submission._id}>
          <img
            className="admin-sub-img"
            src={submission.imagePath}
            alt="submission"
          />
          <p>Category: {submission.category}</p>
          <p>Location: {submission.locationDescription}</p>
          <p>Comments: {submission.comments}</p>
          <div className='classify-btns'>
            <button
              className="styledbtn"
              onClick={() => handleSort(submission._id, true)}
            >
              Approve
            </button>
            <button
              className="styledbtn"
              onClick={() => handleSort(submission._id, false)}
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
          <p>Category: {submission.category}</p>
          <p>Location: {submission.locationDescription}</p>
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
          <p>Category: {submission.category}</p>
          <p>Location: {submission.locationDescription}</p>
        </div>
      ))}
    </div>
  )
}
