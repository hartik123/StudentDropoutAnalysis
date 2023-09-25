import React, { useState } from 'react';
import axios from 'axios';
import './LoginSignup.css'; // Import CSS file
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    userType: 'government', // Default user type
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleToggle = () => {
    setIsLogin(!isLogin);
    clearFormFields(); // Clear form fields when toggling
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (isLogin) {
      try {
        const response = await axios.post('http://localhost:3001/api/login', {
          userType: formData.userType,
          email: formData.email,
          password: formData.password,
        });
        const { token } = response.data;
        console.log('Logged in with token:', token);
        window.alert('Login successful');
        clearFormFields();
  
        // Programmatic navigation to GovernmentDashboard for government users
        if (formData.userType === 'government') {
          navigate('/GovernmentDashboard');
        } else if (formData.userType === 'school') {
          // Programmatic navigation to SchoolForm for school users
          navigate('/SchoolDashboard');
        }
      } catch (error) {
        console.error('Login error:', error.response.data.error);
        window.alert('Login failed');
      }
    } else {
      try {
        await axios.post('http://localhost:3001/api/signup', formData);
        console.log('Signed up successfully');
        window.alert('Signup successful');
        clearFormFields();
      } catch (error) {
        console.error('Signup error:', error.response.data.error);
        window.alert('Signup failed');
      }
    }
  };
  
  
  

  const clearFormFields = () => {
    setFormData({
      userType: 'government',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  };



  return (
    <div className="login-signup-container">
      <div className="form-wrapper">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userType">User Type:</label>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="form-input"
            >
              <option value="government">Government</option>
              <option value="school">School</option>
            </select>
          </div>
          {!isLogin && (
            <>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </>
          )}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <button type="submit" className="form-button">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p>
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <span className="toggle" onClick={handleToggle}>
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginSignup;
