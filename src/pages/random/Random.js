import React from 'react'
import './Random.css'
import MascotBio from '../../components/mascotBio/MascotBio'

export default function Random({ mascot, setCursorHover }) {
  return (
    <>
      <MascotBio mascot={mascot} setCursorHover={setCursorHover} />
    </>
  )
}
