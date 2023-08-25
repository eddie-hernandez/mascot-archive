import React, { useState } from 'react'
import './Submit.css'

export default function Submit() {
  const [photo, setPhoto] = useState(null)
  const [description, setDescription] = useState('')
  const [message, setMessage] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  function handleFileChange(event) {
    setPhoto(event.target.files[0])
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category)
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData()
    formData.append('photo', photo)
    formData.append('description', description)

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setMessage('Thanks! Your submission has been received.')
      } else {
        setMessage('An error occurred while submitting.')
      }
    } catch (error) {
      setMessage('An error occurred while submitting.')
    }
  }

  return (
    <div className="submit-form-container">
      <form onSubmit={handleSubmit}>
        <label>
          UPLOAD PHOTO
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </label>

        <div className="category-container">
          <div
            className={`category ${
              selectedCategory === 'animal' ? 'selected' : ''
            }`}
            onClick={() => handleCategoryChange('animal')}
          >
            <div className="category-selector" />
            <p>animal</p>
          </div>
          <div
            className={`category ${
              selectedCategory === 'food' ? 'selected' : ''
            }`}
            onClick={() => handleCategoryChange('food')}
          >
            <div className="category-selector" />
            <p>food</p>
          </div>
          <div
            className={`category ${
              selectedCategory === 'lil hat' ? 'selected' : ''
            }`}
            onClick={() => handleCategoryChange('lil hat')}
          >
            <div className="category-selector" />
            <p>lil hat</p>
          </div>
        </div>

        <div className="text-block">
          <label>WHERE DID YOU SEE THIS?</label>
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <div className="text-block">
          <label>ANYTHING ELSE?</label>
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <div className="text-block" id="submit">
          <button type="submit">SUBMIT</button>
        </div>

        <p>{message}</p>
      </form>
    </div>
  )
}

// import React, { useRef, useState } from 'react'
// import './Submit.css'

// import Cropper from 'react-easy-crop'
// import Slider from '@material-ui/core/Slider'

// export default function Submit() {
//   const inputRef = useRef()

//   const triggerFileSelect = () => inputRef.current.click()

//   const [image, setImage] = useState(null)
//   const [croppedArea, setCroppedArea] = useState(null)
//   const [crop, setCrop] = useState({ x: 0, y: 0 })
//   const [zoom, setZoom] = useState(1)
//   const [selectCrop, setSelectCrop] = useState(false)

//   const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
//     setCroppedArea(croppedAreaPixels)
//   }

//   const onSelectFile = (event) => {
//     if (event.target.files && event.target.files.length > 0) {
//       const reader = new FileReader()
//       reader.readAsDataURL(event.target.files[0])
//       reader.addEventListener('load', () => {
//         setImage(reader.result)
//       })
//     }
//   }

//   // const onUpload = () => {
//   //   if (!image) {
//   //     return
//   //   }
//   // }

//   return (
//     <div className="submit-form-container">
//       <input
//         type="file"
//         accept="image/*"
//         ref={inputRef}
//         style={{ display: 'none' }}
//         onChange={onSelectFile}
//       />
//       {image && selectCrop ? (
//         <div className="cropper-container">
//           <div className="image-cropper">
//             <Cropper
//               image={image}
//               crop={crop}
//               zoom={zoom}
//               aspect={1}
//               onCropChange={setCrop}
//               onZoomChange={setZoom}
//               onCropComplete={onCropComplete}
//             />
//             <Slider
//               min={1}
//               max={3}
//               step={0.05}
//               value={zoom}
//               onChange={(event, zoom) => setZoom(zoom)}
//             />
//           </div>
//         </div>
//       ) : null}
//       <div
//         className="text-block"
//         id="image-uploader"
//         onClick={triggerFileSelect}
//       >
//         <p>UPLOAD PHOTO</p>
//       </div>
//       <div className="category-container">
//         <div className="category">
//           <div className="category-selector" />
//           <p>animal</p>
//         </div>
//         <div className="category">
//           <div className="category-selector" />
//           <p>food</p>
//         </div>
//         <div className="category">
//           <div className="category-selector" />
//           <p>lil hat</p>
//         </div>
//       </div>
//       <div className="text-block">
//         <p>WHERE DID YOU SEE THIS?</p>
//       </div>
//       <div className="text-block">
//         <p>ANYTHING ELSE?</p>
//       </div>
//       <div className="text-block" id="submit">
//         <p>SUBMIT</p>
//       </div>
//     </div>
//   )
// }
