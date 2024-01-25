import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Welcome=()=>{
    const navigate=useNavigate();
    const handleBack=()=>{
        navigate('/');
    }
    const handleUploadButton=()=>{
        navigate('/video-library');
    }
    const handleView=()=>{
        navigate('/list');
    }
    return(

        <div className="welcome">
          <h3>MAKE IT YOUR FAVOURITE PLATFORM. </h3>
          <h2>Upload videos</h2>
          <button type="button" class="btn btn-light" onClick={handleUploadButton}>Upload</button>

<br/>          
          
          <div><button type="button" class="btn btn-info" onClick={handleView}>View Videos</button></div>
          <br/>
          <div classname="b"><button type ="button "class="btn btn-dark" onClick={handleBack}> back</button>    </div>
        </div>
    );
}
export default Welcome;