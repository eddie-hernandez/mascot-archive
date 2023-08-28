import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'

// importing services
import { getAdmin } from './utilities/admin-service'
// import wakeServer from '../../utilities/wake-service'

// importing components
import PrivateRoute from './components/privateRoute'
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
import MascotBio from './components/mascotBio/mascotBio.js'

export default function App() {
  const [admin, setAdmin] = useState(getAdmin())
  // useEffect(() => {
  //   wakeServer()
  // })

  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Establishing routes */}
        <Route path="/" element={<Home />} />
        <Route path="/mascot/:id" element={<MascotBio />} />
        <Route path="/animal" element={<Animal />} />
        <Route path="/food" element={<Food />} />
        <Route path="/hats" element={<Hat />} />
        <Route path="/random" element={<Random />} />
        <Route path="/submit" element={<Submit />} />
        <Route element={<PrivateRoute />}>
          <Route element={<AdminDashboard setAdmin={setAdmin} />} path='/admin/dashboard' exact />
        </Route>
        <Route
          path="/admin/login"
          element={<AdminLogin setAdmin={setAdmin} />}
        />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}
