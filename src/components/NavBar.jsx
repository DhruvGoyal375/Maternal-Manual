import React from 'react';
import MLogo from "/Group 2.png"
import "./NavBar.css"

function Navbar() {
  return (
    <nav>
      <img  className="nav--logo" src={MLogo}/>
      <h2 className="nav--trimesters">TRIMESTER I</h2>
      <h2 className="nav--trimesters">TRIMESTER II</h2>
      <h2 className="nav--trimesters">TRIMESTER III</h2>
    </nav>
  );
}

export default Navbar;