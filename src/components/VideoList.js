// // VideoList.js
// import React, { useState } from 'react';
// import Modal from 'react-modal';

// const VideoList = ({ videos }) => {
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   const openModal = (video) => {
//     setSelectedVideo(video);
//   };

//   const closeModal = () => {
//     setSelectedVideo(null);
//   };

//   return (
//     <div>
//       <h2>Video List</h2>
//       <ul>
//         {videos.map((video, index) => (
//           <li key={index} onClick={() => openModal(video)}>
//             {video.title}
//           </li>
//         ))}
//       </ul>
//       <Modal
//         isOpen={selectedVideo !== null}
//         onRequestClose={closeModal}
//         contentLabel="Video Modal"
//       >
//         {selectedVideo && (
//           <div>
//             <h2>{selectedVideo.title}</h2>
//             <video controls>
//               <source src={selectedVideo.url} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//             <button onClick={closeModal}>Close</button>
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default VideoList;
