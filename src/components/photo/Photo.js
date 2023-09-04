import React from 'react'
import { useDispatch } from 'react-redux'
import './Photo.css'
import { setCursorHover } from '../../features/cursorSlice'

export default function Photo({ image, style }) {
  const dispatch = useDispatch()
  return (
      <img
        className="mascot-photo"
        src={image.imagePath}
        alt=""
        style={style}
        onMouseEnter={() => dispatch(setCursorHover(true))}
        onMouseLeave={() => dispatch(setCursorHover(false))}
      />
  )
}
