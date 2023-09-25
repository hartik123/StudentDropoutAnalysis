import React, { useState } from 'react';
import '../Navbar.css'; // Create a CSS file for Navbar styling
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Dummy user data (replace with actual user data)
  const userProfile = {
    name: 'John Doe',
    imageUrl: 'your-profile-image.png', // Replace with the actual profile image URL
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Add your navigation links here */}
        <NavLink to ="table">Table</NavLink>
        <NavLink to ="charts">Charts</NavLink>
        <NavLink to ="graphs">Graphs</NavLink>
        <NavLink to ="Form">Fill Form</NavLink>
      </div>
      <h2>School Dashboard</h2>
      <div className="navbar-right">
        <div className="profile-button" onClick={toggleProfileDropdown}>
          <img src={userProfile.imageUrl} alt="Profile" className="profile-image" />
        </div>
        {isProfileOpen && (
          <div className="profile-dropdown">
            <div className="profile-details">
              <img src={userProfile.imageUrl} alt="Profile" className="profile-image" />
              <p className="profile-name">{userProfile.name}</p>
            </div>
            <div className="profile-options">
              <NavLink to ="/your-profile">Your Profile</NavLink>
              <NavLink to ="/settings">Settings</NavLink>
              <NavLink to ="/logout">Logout</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;