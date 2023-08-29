import React, { useState } from 'react'
import { submitNewPhoto } from '../../utilities/submission-service'
import './Submit.css'
import PhotoCrop from '../../components/photoCrop/photoCrop'

export default function Submit() {
  const [category, setCategory] = useState('')
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
    formData.append('category', category)
    formData.append('locationDescription', locationDescription)
    formData.append('comments', comments)
    formData.append('photo', photo)

    try {
      console.log(formData)
      const response = await submitNewPhoto(formData)
      console.log('Response status:', response.message)

      if (response.message) {
        setMessage('Thanks! Your submission has been received.')
        setSubmissionSuccess(true)
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

  // disable form options until photo is selected
  const isPhotoSelected = photo !== null

  // render success message and clear content upon submission success
  if (submissionSuccess) {
    return (
      <div className="submit-container">
        <div className="success-message">
          <h2 className="success-text">
            THANK <span className="success-subtext">YOU<span className='success-mark'>!</span></span>
          </h2>
        </div>
      </div>
    )
  }

  return (
    <div className="submit-container">
      {previewImage && (
        <img src={previewImage} alt="Preview" className="preview-image" />
      )}
      <form onSubmit={handleSubmit} className="submit-form">
        <div className="photo-upload-container">
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

          {/* {previewImage && <PhotoCrop previewImage={previewImage} />} */}
        </div>
        <div className="category-container">
          <label
            className={`category ${category === 'animal' ? 'selected' : ''} ${
              !isPhotoSelected ? 'disabled' : ''
            }`}
          >
            <input
              type="checkbox"
              checked={category === 'animal'}
              onChange={() => setCategory('animal')}
              disabled={!isPhotoSelected}
              style={{ display: 'none' }}
            />
            <div
              className={
                category === 'animal'
                  ? 'category-selector active-selector'
                  : 'category-selector'
              }
            />
            <p>animal</p>
          </label>
          <label
            className={`category ${category === 'food' ? 'selected' : ''} ${
              !isPhotoSelected ? 'disabled' : ''
            }`}
          >
            <input
              type="checkbox"
              checked={category === 'food'}
              onChange={() => setCategory('food')}
              disabled={!isPhotoSelected}
              style={{ display: 'none' }}
            />
            <div
              className={
                category === 'food'
                  ? 'category-selector active-selector'
                  : 'category-selector'
              }
            />
            <p>food</p>
          </label>
          <label
            className={`category ${category === 'lil-hat' ? 'selected' : ''} ${
              !isPhotoSelected ? 'disabled' : ''
            }`}
          >
            <input
              type="checkbox"
              checked={category === 'lil-hat'}
              onChange={() => setCategory('lil-hat')}
              disabled={!isPhotoSelected}
              style={{ display: 'none' }}
            />
            <div
              className={
                category === 'lil-hat'
                  ? 'category-selector active-selector'
                  : 'category-selector'
              }
            />
            <p>lil hat</p>
          </label>
        </div>

        <div className="text-block">
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

        <div className="text-block">
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

        <div className="text-block submit-block">
          <button
            className="submit-btn"
            type="submit"
            disabled={!isPhotoSelected}
          >
            SUBMIT
          </button>
        </div>

        <p>{message}</p>
      </form>
    </div>
  )
}
