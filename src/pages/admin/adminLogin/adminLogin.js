import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { login } from '../../utilities/admin-services'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const admin = await login({ username, password })
      if (admin) {
        history.push('/admin/dashboard')
      }
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
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  )
}
