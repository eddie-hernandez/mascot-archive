import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'

// importing services
import { getAdmin } from './utilities/admin-service'
// import wakeServer from '../../utilities/wake-service'

// importing components
import PrivateRoute from './components/privateRoute'
import Logo from './components/logo/Logo'
import Navbar from './components/navbar/Navbar'

// importing pages
import Animal from './pages/animal/Animal.js'
import Food from './pages/food/Food.js'
import Hat from './pages/hat/Hat.js'
import Random from './pages/random/Random.js'
import Home from './pages/home/Home'
import Submit from './pages/submit/Submit'
import AdminDashboard from './pages/admin/adminDashboard/AdminDashboard'
import AdminLogin from './pages/admin/adminLogin/AdminLogin'
import MascotBio from './components/mascotBio/MascotBio.js'
import { useLocation } from 'react-router-dom'
import * as mascotService from './utilities/mascot-service'

export default function App() {
  const [admin, setAdmin] = useState(getAdmin())
  const [images, setImages] = useState([])
  const [mascot, setMascot] = useState(null)
  const location = useLocation()

  const typeLocation = location.pathname.slice(1)

  // useEffect(() => {
  //   wakeServer()
  // })

  function handleMascotArchiveClick() {
    if (location.pathname !== '/') {
      return
    } else {
      // Shuffle the existing images without making another API call
      const newShuffledImages = [...images]
      newShuffledImages.sort(() => Math.random() - 0.5)
      setImages(newShuffledImages)
    }
  }

  useEffect(() => {
    if (location.pathname === '/random') {
      // fetch a random mascot and set it in the state
      mascotService
        .indexRandomMascot()
        .then((data) => {
          setMascot(data)
        })
        .catch((error) => {
          console.error('Error fetching random mascot:', error)
        })
    } else if (
      location.pathname === '/animal' ||
      location.pathname === '/food' ||
      location.pathname === '/lil-hat'
    ) {
      mascotService
        .indexMascotsByType(typeLocation)
        .then((mascots) => {
          setImages(mascots)
        })
        .catch((error) => {
          console.error('Error fetching mascots:', error)
        })
    }
  }, [location.pathname, typeLocation])

  return (
    <div className="App">
      <div className="mobile-header">
        <Logo />
      </div>
      <div className='mobile-nav'>
        <Navbar setImages={setImages} setMascot={setMascot} />
      </div>
      <div className="desktop-header">
        <div className='blank' />
        <Navbar setImages={setImages} setMascot={setMascot} />
        <Logo />
      </div>
      <Routes>
        {/* Establishing routes */}
        <Route
          path="/"
          element={<Home images={images} setImages={setImages} />}
        />
        <Route
          path="/mascot/:id"
          element={<MascotBio mascot={mascot} setMascot={setMascot} />}
        />
        <Route path="/animal" element={<Animal images={images} />} />
        <Route path="/food" element={<Food images={images} />} />
        <Route path="/lil-hat" element={<Hat images={images} />} />
        <Route path="/random" element={<Random mascot={mascot} />} />
        <Route path="/submit" element={<Submit />} />
        <Route element={<PrivateRoute />}>
          <Route
            element={<AdminDashboard setAdmin={setAdmin} />}
            path="/admin/dashboard"
            exact
          />
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
