// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import VideoUploader from './components/VideoUploader';
import VideoList from './components/VideoList';
import VideoLibrary from './components/VideoLibrary';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/upload" element={<VideoUploader/>}/>
        <Route path="/list" element={<VideoList/>}/>
        <Route path="/video-library" element={<VideoLibrary />} />
      </Routes>
    </Router>
   
       
         
            
              
  );
}

export default App;
