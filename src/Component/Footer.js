import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../Styles/Footer.css";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
      <FacebookIcon/>   <InstagramIcon /> <TwitterIcon /> <LinkedInIcon />
      </div>
      <p> &copy; 2023 icecream@gmail.com</p>
      
    </div>
  )
}
// import React from "react";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import "../Styles/Footer.css";

// function Footer() {
//   return (
//     <div className="footer">
//       <div className="socialMedia">
//         <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
//       </div>
//       <p> &copy; 2021 .com</p>
//     </div>
//   );
// }

// export default Footer;