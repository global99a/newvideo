// // VideoUploader.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const VideoUploader = () => {
//     const navigate=useNavigate();
//     const handleBack=()=>{
//         navigate('/welcome');
//     }
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState('');

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) {
//       setUploadStatus('Please select a file.');
//       return;
//     }
    

   

//     try {
//       const formData = new FormData();
//       formData.append('video', selectedFile);

//       const response = await fetch('C:\Users\Dell', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         setUploadStatus('Upload successful!');
//       } else {
//         setUploadStatus('Upload failed.');
//       }
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       setUploadStatus('An error occurred while uploading.');
//     }
//   };

//   return (
//     <div>
//       <h2>Video Uploader</h2>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//       {uploadStatus && <p>{uploadStatus}</p>}
//       <button type="button" class="btn btn-dark" onClick={handleBack}>Back</button>
//     </div>
//   );
// };

// export default VideoUploader;
