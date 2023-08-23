import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'

// importing components
import Header from './components/header/Header'

// importing pages
import Animal from './pages/animal/Animal.js'
import Food from './pages/food/Food.js'
import Hat from './pages/hat/Hat.js'
import Random from './pages/random/Random.js'
import Home from './pages/home/Home'
import Submit from './pages/submit/Submit'

// importing photos (HARD CODED, REMOVE WHEN SERVER IS BUILT)
import image1 from './assets/mascots/30D6B739-4EBE-4A06-B97B-EA9E070FEE31.jpg'
import image2 from './assets/mascots/IMG_0578.jpg'
import image3 from './assets/mascots/IMG_0611.jpeg'
import image4 from './assets/mascots/IMG_3126.jpg'
import image5 from './assets/mascots/IMG_3937.jpg'
import image6 from './assets/mascots/IMG_4154.jpg'
import image7 from './assets/mascots/IMG_4155.jpg'
import image8 from './assets/mascots/IMG_4175.jpg'
import image9 from './assets/mascots/IMG_4400.jpeg'
import image10 from './assets/mascots/IMG_4405.jpeg'
import image11 from './assets/mascots/IMG_4818.jpg'
import image12 from './assets/mascots/IMG_5083.jpeg'
import image13 from './assets/mascots/IMG_5399.jpeg'
import image14 from './assets/mascots/IMG_5588.jpeg'
import image15 from './assets/mascots/IMG_6311.jpg'
import image16 from './assets/mascots/IMG_6704.jpeg'
import image17 from './assets/mascots/IMG_6923.jpeg'
import image18 from './assets/mascots/IMG_7223.jpeg'
import image19 from './assets/mascots/IMG_7757.jpeg'
import image20 from './assets/mascots/IMG_7981.jpg'
import image21 from './assets/mascots/IMG_7982.jpg'
import image22 from './assets/mascots/IMG_8263.jpeg'
import image23 from './assets/mascots/IMG_8611.jpeg'
import image24 from './assets/mascots/IMG_8727.jpeg'
import image25 from './assets/mascots/IMG_9042.jpeg'
import image26 from './assets/mascots/IMG_9139.jpeg'

export default function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Establishing routes */}
        <Route path='/' element={<Home />} />
        <Route path='/animal' element={<Animal />} />
        <Route path='/food' element={<Food />} />
        <Route path='/hats' element={<Hat />} />
        <Route path='/random' element={<Random />} />
        <Route path='/submit' element={<Submit />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  )
}
