import React, { useState } from 'react'
import { submitNewPhoto } from '../../utilities/submission-service'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCursorHover } from '../../features/cursorSlice'
import thanksHero from '../../assets/hero/thanks-hero.svg'
import './Submit.css'

export default function Submit() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [selectedTypes, setSelectedTypes] = useState([])
  const [locationDescription, setLocationDescription] = useState('')
  const [comments, setComments] = useState('')
  const [photo, setPhoto] = useState(null)
  const [message, setMessage] = useState('')
  const [previewImage, setPreviewImage] = useState(null)
  const [submissionSuccess, setSubmissionSuccess] = useState(false)

  // track active URL in case user wants to upload different photo
  const [activeObjectURL, setActiveObjectURL] = useState(null)

  async function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData()
    // for each type in 'types'
    selectedTypes.forEach((type) => {
      formData.append('types', type)
    })
    formData.append('locationDescription', locationDescription)
    formData.append('comments', comments)
    formData.append('photo', photo)

    try {
      console.log(formData)
      const response = await submitNewPhoto(formData)

      if (response.status === 429) {
        setMessage('Too many submissions, please try again later.')
      }

      if (response.message) {
        setMessage('Thanks! Your submission has been received.')
        setSubmissionSuccess(true)
        setTimeout(() => navigate('/'), 2000)
      } else {
        const errorData = await response.json()
        setMessage(`An error occurred: ${errorData.error}`)
      }
    } catch (error) {
      setMessage('An error occurred while submitting.')
    }
  }

  function handleFileChange(event) {
    const selectedFile = event.target.files[0]

    if (!selectedFile) {
      return
    }

    // revoke previously active object URL
    if (activeObjectURL) {
      URL.revokeObjectURL(activeObjectURL)
    }

    // create new object URL and set it as active
    const newObjectURL = URL.createObjectURL(selectedFile)
    setActiveObjectURL(newObjectURL)

    setPhoto(selectedFile)
    setPreviewImage(newObjectURL)
  }

  function handleTypeSelection(type) {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(
        selectedTypes.filter((selectedType) => selectedType !== type)
      )
    } else {
      setSelectedTypes([...selectedTypes, type])
    }
  }

  // disable form options until photo is selected
  const isPhotoSelected = photo !== null

  // render success message and clear content upon submission success
  if (submissionSuccess) {
    return (
      <div className="submit-container">
        <img src={thanksHero} alt="thank you hero" className="thank-you-hero" />
      </div>
    )
  }

  return (
    <div className="submit-container">
      {previewImage && (
        <img
          src={previewImage}
          alt="Preview"
          className="preview-image"
          onMouseEnter={() => dispatch(setCursorHover(true))}
          onMouseLeave={() => dispatch(setCursorHover(false))}
        />
      )}
      <form onSubmit={handleSubmit} className="submit-form">
        <div
          className="photo-upload-container"
          onMouseEnter={() => dispatch(setCursorHover(true))}
          onMouseLeave={() => dispatch(setCursorHover(false))}
        >
          <label className={`upload-button ${previewImage ? 'changed' : ''}`}>
            <div>
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
          </label>
        </div>
        <div className="type-container">
          <label
            className={`type ${
              selectedTypes.includes('animal') ? 'selected' : ''
            } ${!isPhotoSelected ? 'disabled' : ''}`}
          >
            <input
              type="checkbox"
              checked={selectedTypes.includes('animal')}
              onChange={() => handleTypeSelection('animal')}
              disabled={!isPhotoSelected}
              style={{ display: 'none' }}
            />
            <div
              className={
                selectedTypes.includes('animal')
                  ? 'type-selector active-selector'
                  : isPhotoSelected
                  ? 'type-selector'
                  : 'disabled-selector type-selector'
              }
              onMouseEnter={() => dispatch(setCursorHover(true))}
              onMouseLeave={() => dispatch(setCursorHover(false))}
            />
            <h6 className={isPhotoSelected ? 'check-text' : 'disabled-text'}>
              animal
            </h6>
          </label>
          <label
            className={`type ${
              selectedTypes.includes('food') ? 'selected' : ''
            } ${!isPhotoSelected ? 'disabled' : ''}`}
          >
            <input
              type="checkbox"
              checked={selectedTypes.includes('food')}
              onChange={() => handleTypeSelection('food')}
              disabled={!isPhotoSelected}
              style={{ display: 'none' }}
            />
            <div
              className={
                selectedTypes.includes('food')
                  ? 'type-selector active-selector'
                  : isPhotoSelected
                  ? 'type-selector'
                  : 'disabled-selector type-selector'
              }
              onMouseEnter={() => dispatch(setCursorHover(true))}
              onMouseLeave={() => dispatch(setCursorHover(false))}
            />
            <h6 className={isPhotoSelected ? 'check-text' : 'disabled-text'}>
              food
            </h6>
          </label>
          <label
            className={`type ${
              selectedTypes.includes('lil-hat') ? 'selected' : ''
            } ${!isPhotoSelected ? 'disabled' : ''}`}
          >
            <input
              type="checkbox"
              checked={selectedTypes.includes('lil-hat')}
              onChange={() => handleTypeSelection('lil-hat')}
              disabled={!isPhotoSelected}
              style={{ display: 'none' }}
            />
            <div
              className={
                selectedTypes.includes('lil-hat')
                  ? 'type-selector active-selector'
                  : isPhotoSelected
                  ? 'type-selector'
                  : 'disabled-selector type-selector'
              }
              onMouseEnter={() => dispatch(setCursorHover(true))}
              onMouseLeave={() => dispatch(setCursorHover(false))}
            />
            <h6>lil hat</h6>
          </label>
        </div>

        <div
          className={isPhotoSelected ? 'text-block' : 'text-block disabled'}
          onMouseEnter={() => dispatch(setCursorHover(true))}
          onMouseLeave={() => dispatch(setCursorHover(false))}
        >
          <input
            type="text"
            name="locationDescription"
            placeholder="WHERE DID YOU SEE THIS?"
            value={locationDescription}
            onChange={(event) => {
              setLocationDescription(event.target.value)
            }}
            disabled={!isPhotoSelected}
          />
        </div>

        <div
          className={isPhotoSelected ? 'text-block' : 'text-block disabled'}
          onMouseEnter={() => dispatch(setCursorHover(true))}
          onMouseLeave={() => dispatch(setCursorHover(false))}
        >
          <input
            type="text"
            name="comments"
            value={comments}
            placeholder="ANYTHING ELSE?"
            onChange={(event) => {
              setComments(event.target.value)
            }}
            disabled={!isPhotoSelected}
          />
        </div>

        <button
          className="text-block submit-block"
          type="submit"
          disabled={!isPhotoSelected}
          onMouseEnter={() => dispatch(setCursorHover(true))}
          onMouseLeave={() => dispatch(setCursorHover(false))}
        >
          SUBMIT
        </button>

        <p>{message}</p>
      </form>
    </div>
  )
}
