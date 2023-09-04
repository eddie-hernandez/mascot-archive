import React from 'react'
import aboutHero from '../../assets/hero/about-hero.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCursorHover } from '../../features/cursorSlice'
import './About.css'

export default function About() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className="about-container">
      <img src={aboutHero} alt="about section hero" className="about-hero" />
      <div className="about-text-container">
        <h6 className="about-text">
          When we’re out and about in the world, we’ve always been enchanted
          with the little characters, faces and mascots we spot in the wild.
          We’ve been collecting photos of them for years now, and made this as a
          place to archive, organize, and just enjoy them :^)
        </h6>
        <h6 className="about-text">
          If you’ve got a photo to add to the archive, we’d love to see it! Use
          the{' '}
          <span
            className="about-subtext"
            onClick={() => navigate('/submit')}
            onMouseEnter={() => dispatch(setCursorHover(true))}
            onMouseLeave={() => dispatch(setCursorHover(false))}
          >
            ‘submit’
          </span>{' '}
          tab to upload your png or jpg and jot down a couple notes about it.{' '}
        </h6>
        <h6 className="about-text">
          This website was designed by{' '}
          <a
            href="https://bethanyrennard.com"
            target="_blank"
            rel="noreferrer"
            className="about-subtext"
            onMouseEnter={() => dispatch(setCursorHover(true))}
            onMouseLeave={() => dispatch(setCursorHover(false))}
          >
            Bethany Rennard<br />
          </a>{' '}
          and developed by{' '}
          <a
            href="https://eddie.works"
            target="_blank"
            rel="noreferrer"
            className="about-subtext"
            onMouseEnter={() => dispatch(setCursorHover(true))}
            onMouseLeave={() => dispatch(setCursorHover(false))}
          >
            Eddie Hernandez
          </a>
          .
        </h6>
      </div>
    </div>
  )
}
