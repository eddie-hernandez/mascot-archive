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
import CustomCursor from './components/customCursor/CustomCursor'

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
  const [cursorHover, setCursorHover] = useState(false)
  const location = useLocation()

  const typeLocation = location.pathname.slice(1)

  // useEffect(() => {
  //   wakeServer()
  // })

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

  function handleLogoClick() {
    mascotService
      .indexApprovedMascots()
      .then((data) => {
        setImages(data)
      })
      .catch((error) => {
        console.error('Error fetching mascots', error)
      })
  }

  return (
    <div className="App">
      <CustomCursor cursorHover={cursorHover} />
      <div className="mobile-header">
        <Logo handleLogoClick={handleLogoClick} />
      </div>
      <div className="mobile-nav">
        <Navbar setImages={setImages} setMascot={setMascot} />
      </div>
      <div className="desktop-header">
        <div className="blank" />
        <Navbar
          setImages={setImages}
          setMascot={setMascot}
          setCursorHover={setCursorHover}
        />
        <Logo setCursorHover={setCursorHover} handleLogoClick={handleLogoClick} />
      </div>
      <Routes>
        {/* Establishing routes */}
        <Route
          path="/"
          element={
            <Home
              images={images}
              setImages={setImages}
              setCursorHover={setCursorHover}
            />
          }
        />
        <Route
          path="/mascot/:id"
          element={<MascotBio mascot={mascot} setMascot={setMascot} setCursorHover={setCursorHover} />}
        />
        <Route
          path="/animal"
          element={<Animal images={images} setCursorHover={setCursorHover} />}
        />
        <Route
          path="/food"
          element={<Food images={images} setCursorHover={setCursorHover} />}
        />
        <Route
          path="/lil-hat"
          element={<Hat images={images} setCursorHover={setCursorHover} />}
        />
        <Route path="/random" element={<Random mascot={mascot} setCursorHover={setCursorHover} />} />
        <Route
          path="/submit"
          element={<Submit setCursorHover={setCursorHover} />}
        />
        <Route element={<PrivateRoute />}>
          <Route
            element={
              <AdminDashboard
                setAdmin={setAdmin}
                setCursorHover={setCursorHover}
              />
            }
            path="/admin/dashboard"
            exact
          />
        </Route>
        <Route
          path="/admin/login"
          element={
            <AdminLogin setAdmin={setAdmin} />
          }
        />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}
