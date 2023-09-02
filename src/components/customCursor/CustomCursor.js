import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import './CustomCursor.css'

export default function CustomCursor({ cursorHover }) {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 50, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    function updateCursorPosition(event) {
      cursorX.set(event.pageX - 16)
      cursorY.set(event.pageY - 16)
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
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        scale: cursorHover ? 3 : 1,
      }}
    />
  )
}
