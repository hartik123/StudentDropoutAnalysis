// import React from 'react';
// // import {
// //   MDBContainer,
// //   MDBNavbar,
// //   MDBNavbarBrand
// // } from 'mdb-react-ui-kit';


// export default function Navbar() {
//   return (
//     <>
//       <nav class= "navbar navbar-expand-lg navbar-dark bg-dark">
  
//   <div class="container-fluid">
    
//     <button
//       class="navbar-toggler"
//       type="button"
//       data-mdb-toggle="collapse"
//       data-mdb-target="#navbarSupportedContent"
//       aria-controls="navbarSupportedContent"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <i class="fas fa-bars"></i>
//     </button>

    
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
     
//       <a class="navbar-brand mt-2 mt-lg-0NavLink to ="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp">
//         <img
//           src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
//           height="15"
//           alt="MDB Logo"
//           loading="lazy"
//         />
//       </a>
      
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-linkNavLink to ="">Dashboard</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-linkNavLink to ="#1">Team</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-linkNavLink to ="#2">Projects</a>
//         </li>
//       </ul>
 
//     </div>
  
//   <div class="dropdown">

//     <button class="dropbtn">
//     <img
//             src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
//             class="rounded-circle"
//             height="25"
//             alt="Black and White Portrait of a Man"
//             loading="lazy"
//           />
//     </button>
//     <div class="dropdown-content" aria-labelledby="navbarDropdownMenuAvatar">
//         <NavLink to ="#">Profile</=>
//         <NavLink to ="#">Settings</=>
//         <NavLink to ="#">Logout</=>
//     </div>
 
          
         
      
       

//     </div>
    
//   </div>
  
// </nav>

//     </>
//   );
// }
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
      </div>
      <h2>Government Dashboard</h2>
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
