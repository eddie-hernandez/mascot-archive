import React, { useEffect, useState } from 'react'
import { fetchPendingSubs, sortSubs } from '../../utilities/admin-services'

export default function AdminDashboard() {
  const [pendingSubs, setPendingSubs] = useState([])

  useEffect(() => {
    async function getPendingSubs() {
      const submissions = await fetchPendingSubs()
      setPendingSubs(submissions)
    }
    getPendingSubs()
  }, [])

  async function handleSort(subId, approved) {
    await sortSubs(subId, { approved })
    // Refresh the pending submissions list
    const submissions = await fetchPendingSubs()
    setPendingSubs(submissions)
  }

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {pendingSubs.map((submission) => (
          <li key={submission._id}>
            <img src={submission.imagePath} alt="Submission" />
            <p>Category: {submission.category}</p>
            <p>Location: {submission.locationDescription}</p>
            <button onClick={() => handleSort(submission._id, true)}>
              Approve
            </button>
            <button onClick={() => handleSort(submission._id, false)}>
              Deny
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
