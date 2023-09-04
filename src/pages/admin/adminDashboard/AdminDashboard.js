import React, { useEffect, useState } from 'react'
import * as adminService from '../../../utilities/admin-service'
import { useDispatch } from 'react-redux'
import { setCursorHover } from '../../../features/cursorSlice'
import { logout } from '../../../features/authSlice'
import { logOut } from '../../../utilities/admin-service'
import { useNavigate } from 'react-router-dom'
import {
  PendingGallery,
  ApprovedGallery,
  DeniedGallery,
} from '../../../components/admin/adminGallery/AdminGallery'
import './AdminDashboard.css'

export default function AdminDashboard({ setAdmin }) {
  const [pendingSubs, setPendingSubs] = useState([])
  const [approvedSubs, setApprovedSubs] = useState([])
  const [deniedSubs, setDeniedSubs] = useState([])
  const [showPending, setShowPending] = useState(false)
  const [showApproved, setShowApproved] = useState(false)
  const [showDenied, setShowDenied] = useState(false)

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
      .then(() => {
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
    <div className="admin-dashboard">
      <div className="admin-dashboard-header">
        <h5>Admin Dashboard</h5>
        <button onClick={handleLogOut} className="styledbtn">
          Admin Logout
        </button>
      </div>
      <div className="admin-gallery-container">
        <div className="admin-gallery-section">
          <h5
            className={showPending ? 'dropdown active-dropdown pending' : 'dropdown pending'}
            onClick={() => setShowPending(!showPending)}
            onMouseEnter={() => dispatch(setCursorHover(true))}
            onMouseLeave={() => dispatch(setCursorHover(false))}
            style={{textAlign: 'left'}}
          >
            Pending ({pendingSubs.length})
          </h5>
          {showPending && (
            <PendingGallery
              pendingSubs={pendingSubs}
              handleSort={handleSort}
            />
          )}
        </div>
        <div className="admin-gallery-section">
          <h5
            className={showApproved ? 'dropdown active-dropdown approved' : 'dropdown approved'}
            onClick={() => setShowApproved(!showApproved)}
            onMouseEnter={() => dispatch(setCursorHover(true))}
            onMouseLeave={() => dispatch(setCursorHover(false))}
            style={{textAlign: 'left'}}
          >
            Approved ({approvedSubs.length})
          </h5>
          {showApproved && <ApprovedGallery approvedSubs={approvedSubs} />}
        </div>
        <div className="admin-gallery-section">
          <h5
            className={showDenied ? 'dropdown active-dropdown ' : 'dropdown'}
            onClick={() => setShowDenied(!showDenied)}
            onMouseEnter={() => dispatch(setCursorHover(true))}
            onMouseLeave={() => dispatch(setCursorHover(false))}
            style={{textAlign: 'left'}}
          >
            Denied ({deniedSubs.length})
          </h5>
          {showDenied && <DeniedGallery deniedSubs={deniedSubs} />}
        </div>
      </div>
    </div>
  )
}
