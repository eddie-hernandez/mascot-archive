// import React, { useState, useCallback } from 'react';
// import ReactCrop from 'react-image-crop';
// import 'react-image-crop/dist/ReactCrop.css';

// export default function PhotoCrop({ previewImage, applyCrop }) {
//   const [crop, setCrop] = useState({ aspect: 1 / 1 }); // Set initial aspect ratio
//   const [croppedImageData, setCroppedImageData] = useState(null);

//   const onCropChange = useCallback((newCrop) => {
//     setCrop(newCrop);
//   }, []);

//   const onImageLoaded = (image) => {
//     // Auto select the entire image for initial crop
//     const defaultCrop = {
//       unit: '%',
//       width: 100,
//       height: 100,
//     };
//     setCrop(defaultCrop);
//   };

//   const getCroppedImage = async () => {
//     if (!previewImage || !crop.width || !crop.height) {
//       return;
//     }

//     const image = new Image();
//     image.src = previewImage;

//     const canvas = document.createElement('canvas');
//     canvas.width = crop.width;
//     canvas.height = crop.height;

//     const ctx = canvas.getContext('2d');
//     ctx.drawImage(
//       image,
//       crop.x,
//       crop.y,
//       crop.width,
//       crop.height,
//       0,
//       0,
//       crop.width,
//       crop.height
//     );

//     const croppedImageBlob = await new Promise((resolve) => {
//       canvas.toBlob((blob) => {
//         resolve(blob);
//       }, 'image/jpeg'); // You can change the format as needed
//     });

//     setCroppedImageData(croppedImageBlob);
//   };

//   function applyCropAndClose() {
//     getCroppedImage();
//     applyCrop(croppedImageData);
//   };

//   return (
//     <div className="photo-crop-container">
//       <h3>Crop Photo</h3>
//       <ReactCrop
//         src={previewImage}
//         crop={crop}
//         onChange={onCropChange}
//         onImageLoaded={onImageLoaded}
//       />
//       <div>
//         <button onClick={applyCropAndClose}>Apply Crop</button>
//         <button onClick={() => applyCrop(null)}>Cancel Crop</button>
//       </div>
//     </div>
//   );
// }