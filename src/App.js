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
import MascotBio from './components/mascotBio/MascotBio.js'
import CustomCursor from './components/customCursor/CustomCursor'
import CursorColorPicker from './components/cursorColorPicker/CursorColorPicker'

// importing pages
import Home from './pages/home/Home'
import Animal from './pages/animal/Animal.js'
import Food from './pages/food/Food.js'
import Hat from './pages/hat/Hat.js'
import Random from './pages/random/Random.js'
import Submit from './pages/submit/Submit'
import About from './pages/about/About'
import AdminDashboard from './pages/admin/adminDashboard/AdminDashboard'
import AdminLogin from './pages/admin/adminLogin/AdminLogin'
import { useLocation } from 'react-router-dom'
import * as mascotService from './utilities/mascot-service'

export default function App() {
  const [admin, setAdmin] = useState(getAdmin())
  const [images, setImages] = useState([])
  const [mascot, setMascot] = useState(null)
  const [cursorColor, setCursorColor] = useState('#C600EB')
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
        window.scrollTo(0, 0)
      })
      .catch((error) => {
        console.error('Error fetching mascots', error)
      })
  }

  function handleCursorColor() {
    const cursorColors = [
      '#00a8dd', // orange
      '#FFD700', // dark blue
      '#0013FF', // yellow
      '#FFFFFF', // black
      '#84765E', // gray
      '#ff5722', // sea blue
      '#00FFFF', // deep red
      '#FF69B4', // dark green
      '#20E700', // magenta
    ]

    // receive a random color from cursor array
    // const randomCursorColor = Math.floor(Math.random() * cursorColors.length)
    // setCursorColor(cursorColors[randomCursorColor])

    // find current cursorColor index
    const currentIndex = cursorColors.findIndex(
      (color) => color === cursorColor
    )

    // Calculate next index
    const nextIndex = (currentIndex + 1) % cursorColors.length

    // Set cursor color to the next color
    setCursorColor(cursorColors[nextIndex])

    if (cursorColors[currentIndex] === '#20E700') {
      setCursorColor('#C600EB')
    }
  }

  return (
    <div className="App">
      <CustomCursor cursorColor={cursorColor} />
      <div className="mobile-header">
        <Logo handleLogoClick={handleLogoClick} />
      </div>
      <div className="mobile-nav">
        <Navbar setImages={setImages} setMascot={setMascot} />
      </div>
      <div className="desktop-header">
        <div className="blank" />
        <CursorColorPicker handleCursorColor={handleCursorColor} />
        <Navbar setImages={setImages} setMascot={setMascot} />
        <Logo handleLogoClick={handleLogoClick} />
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
        <Route path="/about" element={<About />} />
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
