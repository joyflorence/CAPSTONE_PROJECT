// import React from "react";
// import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
// import styled from "styled-components";

// const Footer = () => {
//   return (
//     <Wrapper>
//       <div className="container">
//         <footer className="footer">
//           <div className="footer-content">
//             <div className="col">
//               <div className="title">About</div>
//               <div className="text">
//                 At Pizzas, we don’t just make pizza. We make people happy.
//                 Pizzas was built on the belief that pizza night should be
//                 special, and we carry that belief into everything we do. With
//                 more than 15 years of experience under our belts.
//               </div>
//             </div>
//             <div className="col">
//               <div className="title">Contact</div>
//               <div className="c-item">
//                 <FaLocationArrow />
//                 <div className="text">UCU, Mukono, Uganda</div>
//               </div>
//               <div className="c-item">
//                 <FaMobileAlt />
//                 <div className="text">Phone: +256 775064042</div>
//               </div>
//               <div className="c-item">
//                 <FaEnvelope />
//                 <div className="text">Email: patraanddave@gmail.com</div>
//               </div>
//             </div>
//             <div className="col">
//               <div className="title">Menu</div>
//               <span className="text">Pizza</span>
//               <span className="text">Pasta</span>
//               <span className="text">Burgers</span>
//               <span className="text">Desserts</span>
//               <span className="text">Drinks</span>
//             </div>
//             <div className="col">
//               <div className="title">Pages</div>
//               <span className="text">Home</span>
//               <span className="text">About</span>
//               <span className="text">Menu</span>
//               <span className="text">Blog</span>
//               <span className="text">Contact</span>
//             </div>
//           </div>
//         </footer>
//       </div>
//       <div className="bottom-bar">
//         <div className="bottom-bar-content">
//           <div className="text">MADE WITH ❤️ BY Group Patra & Dave</div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .footer {
//     width: 100%;
//     .footer-content {
//       padding: 50px 0px;
//       max-width: 1200px;
//       margin: 0 auto;
//       display: flex;
//       flex-flow: wrap;
//       gap: 20px;
//       .col {
//         max-width: 300px;
//         .title {
//           margin-bottom: 20px;
//           font-size: 20px;
//         }
//         .text {
//             color: cream; /* Set the text color to cream */
//             font-size: 14px;
//         }
//         .c-item {
//           display: flex;
//           align-items: center;
//           margin-bottom: 20px;
//           svg {
//             flex-shrink: 0;
//             font-size: 14px;
//             margin-right: 10px;
//             color: rgba(0, 0, 0, 0.5);
//           }
//         }
//         span {
//           &.text {
//             display: block;
//             margin-bottom: 10px;
//             cursor: pointer;
//           }
//         }
//       }
//     }
//   }
//   .bottom-bar {
//     border-top: 1px solid rgba(0, 0, 0, 0.1);
//     background-color: #f7f5f5;
//     .bottom-bar-content {
//       padding: 20px;
//       display: flex;
//       align-items: center;
//       flex-direction: column;
//       text-align: center;
//       gap: 10px;
//       .text {
//         font-size: 12px;
//         color: rgba(0, 0, 0, 0.5);
//       }
//     }
//   }
//   @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
//     .footer-content {
//       justify-content: space-between;
//       padding: 50px 0px;
//     }
//     .bottom-bar-content {
//       padding: 0;
//       height: 60px;
//       max-width: 1200px;
//       margin: 0 auto;
//       flex-direction: row;
//       justify-content: space-between;
//       text-align: left;
//     }
//   }
// `;

// export default Footer;

import React from 'react'
import {Box,Typography} from '@mui/material'
import './footer.css'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    
    <Box className='footer'>
        <Typography component=  'p'>
        <Link className='me-3' to={'mailto:ensubuga019@gmail.com'} style={{textDecoration:'none',color:'white'}}><i className="fa-solid fa-envelope"></i></Link>
              <Link className='me-3' to={'https://twitter.com/hezron_xerxes'} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-twitter"></i></Link>
              <Link className='me-3' to={'https://www.linkedin.com/in/nsubuga-emmanuel-780366237/?otpToken=MWIwZDE3ZTIxNjJkYzljY2JjMjQwNGVkNDcxZWU2YjM4Y2NlZDg0MTlhYWY4YjYxNzljNDA2NmM0OTU4NWRmM2YxZDZkZmUwNDVlZWUyY2I2ZmE4YWFjZWJlMjQ5OTVkZWY3NjgxNDI0NzUxNmE4ODM5NjhiNSwxLDE%3D&midSig=0oUDuwbPdAWX81&eid=gcywuo-ltn4s1eg-h9&midToken=AQEjtgTnDXLa3A&trkEmail=eml-email_network_conversations_01-header-0-profile_glimmer-null-gcywuo%7Eltn4s1eg%7Eh9-null-null&trk=eml-email_network_conversations_01-header-0-profile_glimmer&originalSubdomain=ug'} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-linkedin"></i></Link>
              <Link className='me-3' to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-instagram"></i></Link>
              <Link className='me-3' to={'https://github.com/Cemputus'} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-github"></i></Link>
              <Link className='me-3' to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-facebook"></i></Link>

        </Typography>
        <Typography component='p'>
            Copyright ©2024 All rights reserved | Developed by <Link to="https://github.com/Cemputus">CODE-CREW</Link></Typography>
    </Box>
  )
}

export default Footer

// import React from 'react';
// import { Button, Col, Row, Form } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './footer.css'; // Import the CSS file

// function Footer() {
//   return (
//     <div className='footer-container w-full mt-5 px-3 py-3'>
//       <Row className='footer-row'>
//         <Col sm={12} lg={3} className='footer-col'>
//           <div className='mb-5'>
//             <h4>
//               <i className="fa-solid fa-pepper-hot fa-bounce text-red-700"></i>
//               <span className='ms-2 font-bold'>Black Pepper</span>
//             </h4>
//             <h6>Designed and built with all the love in the world by the Black Pepper team </h6>
//             <h6>❤️Hellen & Joy❤️</h6>
//             <p>All rights reserved ©️ 2024</p>
//           </div>
//         </Col>
//         <Col sm={12} lg={3} className='footer-col'>
//           <div className='flex flex-col mb-5'>
//             <h4>Links</h4>
//             <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
//             <Link to={'/menu'} className='text-red-700' style={{textDecoration:'none'}}>Menu</Link>
//             <Link to={'/favourites'} style={{textDecoration:'none',color:'white'}}>Favourites</Link>
//           </div>
//         </Col>
//         <Col sm={12} lg={3} className='footer-col'>
//           <div className='flex flex-col mb-5'>
//             <h4> Team 👷‍♂️</h4>
//             <Link to={'https://github.com/hellen-noeline'} style={{textDecoration:'none',color:'white'}}>Nambooze Hellen Noeline</Link>
//             <Link to={'https://github.com/joyflorence'} style={{textDecoration:'none',color:'white'}}>Joy Awor Florence</Link>
//             <Link to={'https://github.com/Elijah991'} style={{textDecoration:'none',color:'white'}}>Ampaire Elijah Evans</Link>
//             <Link to={'https://github.com/Kizitodavid'} style={{textDecoration:'none',color:'white'}}>Kizito David</Link>
//             <Link to={'https://github.com/cimpamoe'} style={{textDecoration:'none',color:'white'}}>Moses Bakulumpagi</Link>
//             <Link to={'https://github.com/wnessa'} style={{textDecoration:'none',color:'white'}}>Sseguya vanessa</Link>
//             <Link to={'https://github.com/RUGOGAMUNOELA'} style={{textDecoration:'none',color:'white'}}>Rugogamu Noela</Link>
//             <Link to={'https://github.com/Cemputus'} style={{textDecoration:'none',color:'white'}}>Emmanuel Nsubuga</Link>
//           </div>
//         </Col>
//         <Col sm={12} lg={3} className='footer-col'>
//           <div className='flex flex-col mb-5'>
//             <h4>Contact Us</h4>
//             <div>
//               <Form className='flex'>
//                 <Form.Group className="w-9/12 mb-3 me-2" controlId="formBasicEmail">
//                   <Form.Control type="email" placeholder="Enter Your Email Id" />
//                 </Form.Group>
//                 <Button variant='outline-dark' className='h-1/2'>
//                   <i className="fa-solid fa-arrow-right" style={{color:'red'}}></i>
//                 </Button>
//               </Form>
//             </div>
//             <div className='fs-5'>
//               <Link className='me-3' to={'mailto:ensubuga019@gmail.com'} style={{textDecoration:'none',color:'white'}}><i className="fa-solid fa-envelope"></i></Link>
//               <Link className='me-3' to={'https://twitter.com/hezron_xerxes'} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-twitter"></i></Link>
//               <Link className='me-3' to={'https://www.linkedin.com/in/nsubuga-emmanuel-780366237/?otpToken=MWIwZDE3ZTIxNjJkYzljY2JjMjQwNGVkNDcxZWU2YjM4Y2NlZDg0MTlhYWY4YjYxNzljNDA2NmM0OTU4NWRmM2YxZDZkZmUwNDVlZWUyY2I2ZmE4YWFjZWJlMjQ5OTVkZWY3NjgxNDI0NzUxNmE4ODM5NjhiNSwxLDE%3D&midSig=0oUDuwbPdAWX81&eid=gcywuo-ltn4s1eg-h9&midToken=AQEjtgTnDXLa3A&trkEmail=eml-email_network_conversations_01-header-0-profile_glimmer-null-gcywuo%7Eltn4s1eg%7Eh9-null-null&trk=eml-email_network_conversations_01-header-0-profile_glimmer&originalSubdomain=ug'} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-linkedin"></i></Link>
//               <Link className='me-3' to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-instagram"></i></Link>
//               <Link className='me-3' to={'https://github.com/Cemputus'} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-github"></i></Link>
//               <Link className='me-3' to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-facebook"></i></Link>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// }

// export default Footer;


