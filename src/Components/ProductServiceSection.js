import React from 'react';
import '../Styles/style.css';
import socialProdF from '../Assets/Images/di1.png';
import socialProdS from '../Assets/Images/di2.png';
import socialProdT from '../Assets/Images/di3.png';
import socialProdE from '../Assets/Images/di4.png';

const ProductionSection = () => {
  return (
    <>
      <div>
        {/* Production /common section */}
        <section className="common-section business-section" id="online-section">
          <div className="container text-center common-title fw-bold">
            <h2 className="common-heading text-capitalize">Our Branding, Production, and Services</h2>
            <hr className="w-25 mx-auto" />
          </div>
          <div className="container">
            <div className="row g-5">
              <div className="col-12 col-md-6">
                <div className="d-flex flex-column justify-content-between h-100 px-3 py-5 shadow">
                  <img src={socialProdF} alt="Not Displayed" className="img-fluid mx-auto" width="150px" />
                  <div>
                    <p className="mb-3 fw-bolder">Debate over use in academic settings</p>
                    <p>
                      Social media content, like most content on the web, will continue to persist unless the user
                      deletes it. This brings up the inevitable question of what to do once a social media user dies,
                      and no longer has access to their content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-column justify-content-between h-100 px-3 py-5 shadow">
                  <img src={socialProdS} alt="Not Displayed" className="img-fluid mx-auto" width="150px" />
                  <div>
                    <p className="mb-3 fw-bolder">Settings use in academic settings content</p>
                    <p>
                      Social media content, content on the web, will like most academic settings content content on the
                      web, the user deletes it. This brings up the inevitable question of what to do once a social media
                      user dies, and no longer has access to their content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-column justify-content-between h-100 px-3 py-5 shadow">
                  <img src={socialProdT} alt="Not Displayed" className="img-fluid mx-auto" width="150px" />
                  <div>
                    <p className="mb-3 fw-bolder">Like most content on in academic settings</p>
                    <p>
                      Social media content, like most content on the web, will continue to persist unless the user
                      deletes it. This brings up the inevitable question of what to do once a social media user dies,
                      and no longer has access to their content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-column justify-content-between h-100 px-3 py-5 shadow">
                  <img src={socialProdE} alt="Not Displayed" className="img-fluid mx-auto" width="150px" />
                  <div>
                    <p className="mb-3 fw-bolder">Continue to persist use in academic settings</p>
                    <p>
                      Social media content will continue to persist unless academic settings content academic settings
                      content the user deletes it. This brings up the inevitable question of what to do once a social
                      media user dies, and no longer has access to their content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Production /common section */}
      </div>
    </>
  );
};

export default ProductionSection;

// import React from 'react'
// import "../Styles/style.css"
// import socialProdF from '../Assets/Images/di1.png'
// import socialProdS from '../Assets/Images/di2.png'
// import socialProdT from '../Assets/Images/di3.png'
// import socialProdE from '../Assets/Images/di4.png'
// const ProductionSection = () => {
//     return (
//         <>
//             <div>
//                 {/* Production /commpn section */}
//                 <section className="common-section business-section" id='online-section'>
//                     <div className="container text-center common-title fw-bold">
//                         <h2 className="common-heading text-capitalize"> our Barnding, Production's And Services</h2>
//                         <hr className="w-25 mx-auto" />
//                     </div>
//                     <div className="container">
//                         <div className="row g-5 ">
//                             <div className="col-12 col-m-12 col-lg-6">
//                                 <div className=" d-flex px-3 py-5 shadow">
//                                     {/* <img src={socialProdF} alt='Not Dispaly' className="d-md-block  img-flude mx-3 " width="150px" autoPlay></img> */}
//                                     <img src={socialProdF} alt='Not Dispaly' className="d-md-block d-none img-flude mx-3 " width="150px" autoPlay></img>
//                                     <div >
//                                         <p className="mb-3 fw-bolder">Debate over use in academic settings  </p>
//                                         <p>Social media content, like most content on the web, will continue to persist unless the user deletes it. This brings up the inevitable question of what to do once a social media user dies, and no longer has access to their content.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-6 col-m-12">
//                                 <div className=" d-flex px-3 py-5 shadow">
//                                     {/* <img src={socialProdS} alt='Not Dispaly' className="d-md-block  img-flude mx-3 " width="150px" autoPlay></img> */}
//                                     <img src={socialProdS} alt='Not Dispaly' className="d-md-block d-none  img-flude mx-3 " width="150px" autoPlay></img>
//                                     <div >
//                                         <p className="mb-3 fw-bolder">Settings use in academic settings content  </p>
//                                         <p>Social media content,content on the web, will like mostcademic settings content content on the web, the user deletes it. This brings up the inevitable question of what to do once a social media user dies, and no longer has access to their content.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-6 col-m-12 ">
//                                 <div className=" d-flex px-3 py-5 shadow">
//                                     <img src={socialProdT} alt='Not Dispaly' className="d-md-block d-none img-flude mx-3 " width="150px" autoPlay></img>
//                                     {/* <img src={socialProdT} alt='Not Dispaly' className="d-md-block  img-flude mx-3 " width="150px" autoPlay></img> */}
//                                     <div >
//                                         <p className="mb-3 fw-bolder">Like most content onin academic settings  </p>
//                                         <p>Social media content, like most content on the web, will continue to persist unless the user deletes it. This brings up the inevitable question of what to do once a social media user dies, and no longer has access to their content.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-6 col-m-12 ">
//                                 <div className=" d-flex px-3 py-5 shadow">
//                                     <img src={socialProdE} alt='Not Dispaly' className="d-md-block d-none  img-flude mx-3 " width="150px" autoPlay></img>
//                                     {/* <img src={socialProdE} alt='Not Dispaly' className="d-md-block  img-flude mx-3 " width="150px" autoPlay></img> */}
//                                     <div >
//                                         <p className="mb-3 fw-bolder">continue to persist use in academic settings  </p>
//                                         <p>Social media content, will continue to persist unless cademic settings content  cademic settings content the user deletes it. This brings up the inevitable question of what to do once a social media user dies, and no longer has access to their content.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 {/* Production /commpn section */}
//             </div>
//         </>
//     )
// }

// export default ProductionSection
