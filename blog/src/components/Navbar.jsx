import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/blog_logo.png";
import Profile from "../img/proflogo.png"

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img style={{widht:'100px',height:'90px',objectFit:'cover'}} src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <div className="cat-links">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          </div>
          {currentUser ? (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <img 
        src={Profile} 
        alt="Profile" 
        style={{ width: '15px', height: '15px', borderRadius: '50%', verticalAlign: 'middle', padding: '4px' }} 
      />
      <span style={{ marginLeft: '5px' }}>{currentUser?.username}</span>
    </span>
    <span 
      style={{ border: '1px solid teal', padding: '2px', borderRadius: '4px', marginLeft: '10px', cursor: 'pointer' }} 
      onClick={logout}
    >
      Logout
    </span>
  </div>
) : (
  <Link 
    style={{ border: '1px solid teal', padding: '2px', borderRadius: '4px' }} 
    className="link" 
    to="/login"
  >
    Login
  </Link>
)}

          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;