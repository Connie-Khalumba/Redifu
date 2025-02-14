import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../../App.css';



const LoginRegister = () => {
  const [action, setAction] = useState('login');

  return (
    <div className="wrapper">
      <div className={`form-box ${action === 'login' ? 'active' : ''}`}>
        <form>
          <h1>Login</h1>
          <div className="input-box">
            <FaUser className='icon' />
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-box">
            <FaLock className='icon' />
            <input type="password" placeholder="Password" required />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <button className="login-btn" type="submit">Login</button>
          <div className="register-link">
            <p>Don't have an Account? <span onClick={() => setAction('register')}>Register</span></p>
          </div>
          <div className="dashboard-link">
            <p>Go to <Link to="/dashboard">Dashboard</Link></p>
          </div>
        </form>
      </div>
      <div className={`form-box ${action === 'register' ? 'active' : ''}`}>
        <form>
          <h1>Registration</h1>
          <div className="input-box">
            <FaUser className='icon' />
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-box">
            <FaEnvelope className='icon' />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-box">
            <FaLock className='icon' />
            <input type="password" placeholder="Password" required />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> I agree with the terms & conditions
            </label>
          </div>
          <button type="submit">Register</button>
          <div className="register-link">
            <p>Already have an Account? <span onClick={() => setAction('login')}>Login</span></p>
          </div>
          <div className="dashboard-link">
            <p>Go to <Link to="/dashboard">Dashboard</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
