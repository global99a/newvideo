import React, { useState } from 'react';

// Video component to display individual videos
// Video component to display individual videos
const Video = ({ src, onClose, style }) => {
    return (
      <div className="video-popup" style={style}>
        <video controls src={src} style={{ width: '100%', height: '100%' }} />
        <button onClick={onClose}>Close</button>
      </div>
    );
  };
  

// Main App component
const App = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  // Function to add video to the library
  const addVideo = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setVideos([...videos, { url }]);
  };

  // Function to display video in popup
  const playVideo = (video) => {
    setCurrentVideo(video);
  };

  // Function to close video popup
  const closeVideo = () => {
    setCurrentVideo(null);
  };

  return (
    <div className="app">
      <h1>Video Library</h1>
      <input type="file" accept="video/*" onChange={addVideo} />
      <div className="video-list">
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            <button onClick={() => playVideo(video)}>Play</button>
            <span>{`Video ${index + 1}`}</span>
          </div>
        ))}
      </div>
      {currentVideo && (
  <Video src={currentVideo.url} onClose={closeVideo} style={{ height: '250px', width: '200px' }} />
)}
    </div>
  );
};

export default App;
