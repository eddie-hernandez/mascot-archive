import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import './CustomCursor.css'

export default function CustomCursor({ cursorColor }) {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })
  const cursorHover = useSelector((state) => state.cursor.cursorHover)

  useEffect(() => {
    function updateCursorPosition(event) {
      const x = event.pageX - 16
      const y = event.pageY - 16
      setCursorXY({ x, y })
    }

    window.addEventListener('mousemove', updateCursorPosition)

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition)
    }
  }, [])

  return (
    <motion.div
      className={`custom-cursor ${cursorHover ? 'hover' : ''}`}
      style={{
        backgroundColor: cursorColor,
        x: cursorXY.x,
        y: cursorXY.y,
        scale: cursorHover ? 3 : 1,
      }}
    />
  )
}

