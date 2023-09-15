// import React from 'react';
// import {Link} from "react-router-dom";
// import back from "../assest/img.jpeg"
// function Home() {
//   return (
  
//       <div className='home'>
//         <div className='headerContainer' style={{backgroudImage:`url(${back})`}}>
//           <h1>icecrfeam</h1>
//           <p>ice</p>
//           <Link to='/menu'>
//         <button>ORDER NOW</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Home;
import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/1.png";
import "../Styles/Home.css";
import { Helmet } from "react-helmet";

function Home() {
  return (

    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <Helmet>
        <script src="//in.fw-cdn.com/31186665/547534.js" chat="true" />
      </Helmet>
      <div className="headerContainer">
        <h1> Gelato for Every Craving </h1>
        <p>ICE CREAM TO SUIT EVERY PALATE</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;