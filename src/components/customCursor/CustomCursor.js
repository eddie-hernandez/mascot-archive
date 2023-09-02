import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useSelector } from 'react-redux';
import './CustomCursor.css'

export default function CustomCursor({ cursorColor }) {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 50, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  const cursorHover = useSelector((state) => state.cursor.cursorHover);
  
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
        backgroundColor: cursorColor ? cursorColor : '#C600EB',
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        scale: cursorHover ? 3 : 1,
      }}
    />
  )
}
