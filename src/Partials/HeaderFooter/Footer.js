import React, { useState, useEffect } from "react";
import {
  FooterBox,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  CopyRt,
  CopyRLink,
} from "./FooterStyles";
import mahaRera from "../../Assets/Images/maharera.png";
import "../../Styles/style.css";
//import { Link } from "react-router-dom";

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  useEffect(() => {
    fetch("/api/count")
      .then((response) => response.json())
      .then((data) => setVisitorCount(data.count))
      .catch((error) => console.error("Error fetching visitor count:", error));
  }, []);

  return (
    <>
      <FooterBox class="footer-res">
        <Container>
          <Row className="cen-align">
            <Column>
              <Heading>Usefull Links</Heading>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> Home
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> About Us
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> Properties
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> Career
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> Feedback
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> Terms &
                Conditions
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> Contact Us
              </FooterLink>
            </Column>
            <Column>
              <Heading>Importance Links</Heading>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> 2BHK Near
                Wakad
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> 2BHK Near
                Punawale
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> 2BHK Near
                Hinjewadi
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> Tallest
                Building in PCMC
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> Tallest
                Building in Hinjewadi
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> 2BHK Near
                Tathawade
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> Flats in
                Pune
              </FooterLink>
            </Column>
            <Column>
              <Heading>Importance Links</Heading>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> 2BHK Flat
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> BHK Near
                Pune-Mumbai Highway
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> BHK Near
                Wakad
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> Premium
                2BHK
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> Premium
                3BHK
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> VJ
                Developers
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> Yashone
                infinitee
              </FooterLink>
            </Column>
            <Column>
              <Heading>Importance Links</Heading>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> 3BHK Near
                Wakad
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> 3BHK Near
                Punawale
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> 3BHK Near
                Hinjewadi
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> Tallest
                tower in Pune
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> Luxurious
                flat Near Hinjewadi
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> Luxurious
                flat Near Pune
              </FooterLink>
              <FooterLink href="#" class="footerLinkFont">
                <i class="fa fa-angle-right" aria-hidden="true"></i> Flats in
                Pune
              </FooterLink>
              <div class="row">
                {/* <p style="margin-left:10px;"> */}
                <p class="footerLinkFont">
                  Visitor's Counter : <br />
                  <img
                    src="https://hitwebcounter.com/counter/counter.php?page=7763192&amp;style=0036&amp;nbdigits=5&amp;type=ip&amp;initCount=1000"
                    title="Free Counter"
                    alt="web counter"
                    border="0"
                  />
                </p>
              </div>

              <div class="row">
                <div class="col-md-2 col-sm-12">
                  <img
                    src={mahaRera}
                    alt="maharera"
                    height="60"
                    class="maharera-img"
                  />
                </div>
                <div class="col-md-9 col-sm-12 maharera-text">
                  <p class="footerLinkFont" style={{ margin: "10px 0 0 10px" }}>
                    <strong> MahaRERA No.:</strong> <br />
                    A52100000099
                  </p>
                </div>
              </div>
            </Column>
          </Row>
          <hr className="w-100 mx-auto text-white" />
          {/* <div className='text-center text-white p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}> */}
          <CopyRt>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <CopyRLink href="#">
              All rights reserved and Designed by Yash Infotech Pvt Ltd.
            </CopyRLink>
          </CopyRt>
        </Container>
      </FooterBox>
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
