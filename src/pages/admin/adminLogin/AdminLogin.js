import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as adminService from '../../../utilities/admin-service'
import { useDispatch } from 'react-redux'
import { login } from '../../../features/authSlice'
import './AdminLogin.css'

export default function AdminLogin({ setAdmin }) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  })
  const [error, setError] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleChange(event) {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
    setError('')
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const admin = await adminService.login(credentials)
      setAdmin(admin)
      dispatch(login())
      navigate('/admin/dashboard')
    } catch (error) {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="admin-login-container">
      <h3 style={{ fontWeight: 'bold' }}>admin login</h3>
      <form onSubmit={handleSubmit} className="admin-login-form">
        <div className="admin-credential-container">
          <input
            type="text"
            name="username"
            placeholder="username"
            value={credentials.username}
            onChange={handleChange}
            required
            className="admin-input"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={credentials.password}
            onChange={handleChange}
            required
            className="admin-input"
          />
        </div>
        <button type="submit" className="admin-submit">
          login
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  )
}
