import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { PrivateRoute } from '../components/PrivateRoute'

// importing components
import Header from './components/header/Header'

// importing pages
import Animal from './pages/animal/Animal.js'
import Food from './pages/food/Food.js'
import Hat from './pages/hat/Hat.js'
import Random from './pages/random/Random.js'
import Home from './pages/home/Home'
import Submit from './pages/submit/Submit'
import AdminDashboard from './pages/admin/adminDashboard/adminDashboard'
import AdminLogin from './pages/admin/adminLogin/adminLogin'

export default function App() {
  const isAuthenticated = false

  return (
      <div className="App">
        <Header />
        <Routes>
          {/* Establishing routes */}
          <Route path="/" element={<Home />} />
          <Route path="/animal" element={<Animal />} />
          <Route path="/food" element={<Food />} />
          <Route path="/hats" element={<Hat />} />
          <Route path="/random" element={<Random />} />
          <Route path="/submit" element={<Submit />} />
          <PrivateRoute
            path="/admin/dashboard"
            element={<AdminDashboard />}
            authenticated={isAuthenticated}
          />
          <PrivateRoute
            path="/admin/login"
            element={<AdminLogin />}
            authenticated={!isAuthenticated}
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
  )
}
