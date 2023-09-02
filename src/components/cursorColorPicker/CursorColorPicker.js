import React from 'react'
import './CursorColorPicker.css'
import shuffleIcon from '../../assets/icons/noun-switch-3476447.svg'

export default function CursorColorPicker({
  handleCursorColor,
  setCursorHover,
}) {
  return (
    <div
      className="cursor-color-picker"
      onClick={handleCursorColor}
      onMouseEnter={() => {
        setCursorHover(true)
      }}
      onMouseLeave={() => {
        setCursorHover(false)
      }}
    >
      <img src={shuffleIcon} alt="cursor color shuffle icon" />
    </div>
  )
}
