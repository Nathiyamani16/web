// import React,{useState} from "react";

// import Logo from '../assest/2.png';
// import { Link } from 'react-router-dom';
// import ReorderIcon from "@material-ui/icons/Reorder";
// import "../Styles/Navbar.css";


// function Navbar() {
//   const [openLinks,setOpenLinks]=useState(false)
//   const toggleNavbar = () => {
//     // opposite the value
//     setOpenLinks(!openLinks);
//   };
//   return (
//     <div className='navbar'>
//         <div className='left' id={openLinks ? "open" : "close"}>
//             <Link to='/'>
//               <img src={Logo}  alt="Logo"/>
//             </Link>
//             <div className='hiddenLinks'>
//           <Link to="/">Home</Link>
//         <Link to="/menu">Menu</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//             </div>
//         </div>
//         <div className='right'></div>
//         <Link to="/">Home</Link>
//         <Link to="/menu">Menu</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//         <button onClick={toggleNavbar}>
//         <ReorderIcon/>
//         </button>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import Logo from "../assets/2.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../Styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="left" id={openLinks ? "open" : "close"}>
      <Link to='/'>
        <img src={Logo} alt="Logo"/>
        </Link>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="right">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
