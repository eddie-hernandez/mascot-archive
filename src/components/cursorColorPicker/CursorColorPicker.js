import React from 'react'
import { useDispatch } from 'react-redux'
import { setCursorHover } from '../../features/cursorSlice'
import './CursorColorPicker.css'
import shuffleHero from '../../assets/hero/shuffle-hero.svg'

export default function CursorColorPicker({ handleCursorColor }) {
  const dispatch = useDispatch()
  return (
    <div
      className="cursor-color-picker-wrapper"
      onClick={handleCursorColor}
      onMouseEnter={() => {
        dispatch(setCursorHover(true))
      }}
      onMouseLeave={() => {
        dispatch(setCursorHover(false))
      }}
    >
      <img className="cursor-color-picker" src={shuffleHero} alt="cursor color shuffle icon" />
    </div>
  )
}
