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
import { useLocation } from 'react-router-dom'

export default function App() {
  const [admin, setAdmin] = useState(getAdmin())
  const [images, setImages] = useState([])
  const [mascot, setMascot] = useState(null)
  const location = useLocation()

  // useEffect(() => {
  //   wakeServer()
  // })

  function handleMascotArchiveClick() {
    if (location.pathname !== '/') {
      return;
    } else {
      // Shuffle the existing images without making another API call
      const newShuffledImages = [...images];
      newShuffledImages.sort(() => Math.random() - 0.5);
      setImages(newShuffledImages);
    }
  }

  return (
    <div className="App">
      <Header
        setImages={setImages}
        setMascot={setMascot}
        handleMascotArchiveClick={handleMascotArchiveClick}
      />
      <Routes>
        {/* Establishing routes */}
        <Route
          path="/"
          element={
            <Home
              images={images}
              setImages={setImages}
            />
          }
        />
        <Route
          path="/mascot/:id"
          element={<MascotBio mascot={mascot} setMascot={setMascot} />}
        />
        <Route path="/animal" element={<Animal images={images} />} />
        <Route path="/food" element={<Food images={images} />} />
        <Route path="/hats" element={<Hat images={images} />} />
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
