import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
    CopyRt,
    CopyRLink,
} from "./FooterStyles";
import "../../Styles/style.css"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            {/*Footer Section */}
            {/* <section className="contact-section" > */}
            {/* <div className="container text-center common-title fw-bold">
          <h2 className="common-heading text-capitalize ">Read More About Pannel</h2>
          <hr className="w-25 mx-auto " />
        </div> */}
            <Box>
                <h1 style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: "-50px"
                }}>
                    
                    Get in Touch
                </h1>
                <hr className="w-25 mx-auto text-white" />
                <Container >
                    <Row className="cen-align">

                        <Column>
                            <Heading>About Us</Heading>
                            <FooterLink href="#">Aim</FooterLink>
                            <FooterLink href="#">Vision</FooterLink>
                            <FooterLink href="#">Testimonials</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Services</Heading>
                            <FooterLink href="#">Web Development</FooterLink>
                            <FooterLink href="#">App Development</FooterLink>
                            <FooterLink href="#">Mobile App</FooterLink>
                            {/* <FooterLink href="#">Coding</FooterLink> */}
                        </Column>
                        <Column>
                            <Heading>Office</Heading>
                            <FooterLink >
                                <Link target="_blank" to="https://goo.gl/maps/K35pMByGWv3kt7KP6">
                                    Pune
                                </Link>
                            </FooterLink>
                            <FooterLink href="#">Mumbai</FooterLink>
                            {/* <FooterLink href="#">Delhi</FooterLink>
                            <FooterLink href="#">Indore</FooterLink> */}
                        </Column>
                        <Column>
                            <Heading>Social Media</Heading>
                            <FooterLink >
                                <Link target="_balnk" to="https://www.facebook.com/pawan.salve.5872?mibextid=ZbWKwL">
                                    <i className="fab fa-facebook-f">
                                        <span style={{ marginLeft: "10px" }}>
                                            Facebook
                                        </span>
                                    </i>
                                </Link>
                            </FooterLink>
                            <FooterLink>
                                <Link target="_balnk" to="https://instagram.com/pawan_pavan135?igshid=MzRlODBiNWFlZA==">
                                    <i className="fab fa-instagram">
                                        <span style={{ marginLeft: "10px" }}>
                                            Instagram
                                        </span>
                                    </i>
                                </Link>
                            </FooterLink>
                            {/* <FooterLink href="#">
                                <i className="fab fa-twitter">
                                    <span style={{ marginLeft: "10px" }}>
                                        Twitter
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-youtube">
                                    <span style={{ marginLeft: "10px" }}>
                                        Youtube
                                    </span>
                                </i>
                            </FooterLink> */}
                        </Column>
                    </Row>
                    <hr className="w-100 mx-auto text-white" />
                    {/* <div className='text-center text-white p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}> */}
                    <CopyRt >
                        &copy; {new Date().getFullYear()} Copyright:{' '}
                        <CopyRLink href='#'>
                            plewrm.com
                        </CopyRLink>
                    </CopyRt>
                </Container>
            </Box>
            {/* </section> */}
            {/*Footer Section */}
        </>
    );
};
export default Footer;


// import React from 'react';
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBIcon,
//   MDBInput,
//   MDBCol,
//   MDBRow,
//   MDBBtn
// } from 'mdb-react-ui-kit';

// export default function App() {
//   return (
//     <MDBFooter className='text-center' color='white' bgColor='dark'>
//       <MDBContainer className='p-4'>
//         <section className='mb-4'>
//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='facebook-f' />
//           </MDBBtn>

//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='twitter' />
//           </MDBBtn>

//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='google' />
//           </MDBBtn>

//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='instagram' />
//           </MDBBtn>

//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='linkedin-in' />
//           </MDBBtn>

//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='github' />
//           </MDBBtn>
//         </section>

//         <section className=''>
//           <form action=''>
//             <MDBRow className='d-flex justify-content-center'>
//               <MDBCol size="auto">
//                 <p className='pt-2'>
//                   <strong>Sign up for our newsletter</strong>
//                 </p>
//               </MDBCol>

//               <MDBCol md='5' start>
//                 <MDBInput contrast type='email' label='Email address' className='mb-4' />
//               </MDBCol>

//               <MDBCol size="auto">
//                 <MDBBtn outline color='light' type='submit' className='mb-4'>
//                   Subscribe
//                 </MDBBtn>
//               </MDBCol>
//             </MDBRow>
//           </form>
//         </section>

//         <section className='mb-4'>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
//             voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
//             sequi voluptate quas.
//           </p>
//         </section>

//         <section className=''>
//           <MDBRow>
//             <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
//               <h5 className='text-uppercase'>Links</h5>

//               <ul className='list-unstyled mb-0'>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 1
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 2
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 3
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 4
//                   </a>
//                 </li>
//               </ul>
//             </MDBCol>

//             <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
//               <h5 className='text-uppercase'>Links</h5>

//               <ul className='list-unstyled mb-0'>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 1
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 2
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 3
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 4
//                   </a>
//                 </li>
//               </ul>
//             </MDBCol>

//             <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
//               <h5 className='text-uppercase'>Links</h5>

//               <ul className='list-unstyled mb-0'>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 1
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 2
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 3
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 4
//                   </a>
//                 </li>
//               </ul>
//             </MDBCol>

//             <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
//               <h5 className='text-uppercase'>Links</h5>

//               <ul className='list-unstyled mb-0'>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 1
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 2
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 3
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 4
//                   </a>
//                 </li>
//               </ul>
//             </MDBCol>
//           </MDBRow>
//         </section>
//       </MDBContainer>

//       <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         © 2020 Copyright:
//         <a className='text-white' href='https://mdbootstrap.com/'>
//           MDBootstrap.com
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }