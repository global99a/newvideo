import React from 'react';
import './Home.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
 import { Link, useNavigate } from 'react-router-dom';




const Home = () => {
    const navigate=useNavigate();
    const handleLoginButtonClick=()=>{
        navigate('/login');
    }
    const handleRegisterButtonOnClick=()=>{
        navigate('/register');
    }

  return (
    <div className='background'>
    <div className="home-page">
      <h1>Video-Library</h1>
      <p>Watch your favorite content here.</p>
      <button type="button" class="btn btn-primary" onClick={handleLoginButtonClick}>Login</button>
      
      <br />

      <p>Dont have account?</p>
       <div> 
      <p> Register here</p>
          <button type="button" class="btn btn-primary" onClick={handleRegisterButtonOnClick}>Register</button>
        
          </div>
    </div>
   
       
    
    </div>
  );
}

export default Home;
