import React, { useEffect, useState } from 'react'
import * as adminService from '../../../utilities/admin-service'
import { useDispatch } from 'react-redux'
import { logout } from '../../../features/authSlice'
import { logOut } from '../../../utilities/admin-service'
import { useNavigate } from 'react-router-dom'
import { PendingGallery, ApprovedGallery, DeniedGallery } from '../../../components/admin/adminGallery/AdminGallery'

export default function AdminDashboard({ setAdmin }) {
  const [pendingSubs, setPendingSubs] = useState([])
  const [approvedSubs, setApprovedSubs] = useState([])
  const [deniedSubs, setDeniedSubs] = useState([])

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    adminService.fetchPendingSubs().then((submissions) => {
      setPendingSubs(submissions)
    })
    adminService.fetchApprovedSubs().then((submissions) => {
      setApprovedSubs(submissions)
    })
    adminService
      .fetchDeniedSubs()
      .then((submissions) => {
        setDeniedSubs(submissions)
      })
      .catch((error) => {
        console.error('Error fetching pending submissions:', error)
      })
  }, [])

  function handleSort(submissionId, status) {
    adminService
      .sortSubs(submissionId, status)
      .then((response) => {
        console.log('Submission status updated:', response)
        // refresh all submission lists
        adminService
          .fetchPendingSubs()
          .then((submissions) => {
            const pending = submissions.filter(
              (sub) => sub.approved !== true && sub.denied !== true
            )
            setPendingSubs(pending)
          })
          .catch((error) => {
            console.error('Error fetching pending submissions:', error)
          })

        adminService
          .fetchApprovedSubs()
          .then((submissions) => {
            const approved = submissions.filter((sub) => sub.approved === true)
            setApprovedSubs(approved)
          })
          .catch((error) => {
            console.error('Error fetching approved submissions:', error)
          })

        adminService
          .fetchDeniedSubs()
          .then((submissions) => {
            const denied = submissions.filter((sub) => sub.denied === true)
            setDeniedSubs(denied)
          })
          .catch((error) => {
            console.error('Error fetching denied submissions:', error)
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
      <div className="admin-gallery-container">
        <h2>Pending({pendingSubs.length})</h2>
        <PendingGallery pendingSubs={pendingSubs} handleSort={handleSort} />
      </div>
      <div className="admin-gallery-container">
        <h2>Approved ({approvedSubs.length}) </h2>
        <ApprovedGallery approvedSubs={approvedSubs} />
      </div>
      <div className="admin-gallery-container">
        <h2>Denied ({deniedSubs.length})</h2>
        <DeniedGallery deniedSubs={deniedSubs} />
      </div>
    </div>
  )
}
