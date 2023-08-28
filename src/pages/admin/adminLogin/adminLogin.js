import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as adminService from '../../../utilities/admin-service'
import { useDispatch } from 'react-redux'
import { login } from '../../../features/authSlice'

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
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  )
}
