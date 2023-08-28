import React, { useEffect, useState } from 'react'
import { fetchPendingSubs, sortSubs } from '../../../utilities/admin-service'
import { useDispatch } from 'react-redux'
import { logout } from '../../../features/authSlice'
import { logOut } from '../../../utilities/admin-service'
import { useNavigate } from 'react-router-dom'

export default function AdminDashboard({ setAdmin }) {
  const [pendingSubs, setPendingSubs] = useState([])

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    fetchPendingSubs()
      .then((submissions) => {
        setPendingSubs(submissions)
      })
      .catch((error) => {
        console.error('Error fetching pending submissions:', error)
      })
  }, [])

  function handleSort(submissionId, status) {
    sortSubs(submissionId, status)
      .then((response) => {
        console.log('Submission status updated:', response)
        // refresh pending submissions list
        fetchPendingSubs()
          .then((submissions) => {
            setPendingSubs(submissions)
          })
          .catch((error) => {
            console.error('Error fetching pending submissions:', error)
          })
      })
      .catch((error) => {
        console.error('Error updating submission status:', error)
      })
  }

  function handleLogOut() {
    setAdmin(null)
    logOut()
    dispatch(logout())
    navigate('/')
  }

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={handleLogOut}>Admin Logout</button>
      <ul>
        {pendingSubs.map((submission) => (
          <li key={submission._id}>
            <img src={submission.imagePath} alt="submission" />
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
