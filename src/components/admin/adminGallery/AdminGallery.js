import React from 'react'
import './AdminGallery.css'

export function PendingGallery({ pendingSubs, handleSort }) {
  return (
    <div className="pending-gallery">
      {pendingSubs.map((submission) => (
        <div className="pending-photo" key={submission._id}>
          <img src={submission.imagePath} alt="submission" />
          <p>Category: {submission.category}</p>
          <p>Location: {submission.locationDescription}</p>
          <button onClick={() => handleSort(submission._id, true)}>
            Approve
          </button>
          <button onClick={() => handleSort(submission._id, false)}>
            Deny
          </button>
        </div>
      ))}
    </div>
  )
}

export function ApprovedGallery({ approvedSubs }) {
  return (
    <div className="classified-gallery">
      {approvedSubs.map((submission) => (
        <div className="pending-photo" key={submission._id}>
          <img src={submission.imagePath} alt="submission" />
          <p>Category: {submission.category}</p>
          <p>Location: {submission.locationDescription}</p>
        </div>
      ))}
    </div>
  )
}

export function DeniedGallery({ deniedSubs }) {
  return (
    <div className="classified-gallery">
      {deniedSubs.map((submission) => (
        <div className="pending-photo" key={submission._id}>
          <img src={submission.imagePath} alt="submission" />
          <p>Category: {submission.category}</p>
          <p>Location: {submission.locationDescription}</p>
        </div>
      ))}
    </div>
  )
}
