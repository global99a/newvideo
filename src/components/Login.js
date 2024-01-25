import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();
    const handleLoginButtonClick=()=>{
        navigate('/welcome')
    }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Login</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleLoginButtonClick}>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
