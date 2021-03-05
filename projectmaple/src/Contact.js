import React from "react";
import { FaFacebookF,
         FaTwitter,
         FaPinterest,
         FaInstagram,
         
 } from "react-icons/fa";


const Contact = () => {
 return (
     <div className="contact">
         <div className="container">
           
           <div className="contactSection">
               
                   <div className="justifyConter ">
                       <div className="col-6">
                       <div className="contactSection-heading">
                       <h3 id="contactSectionHead">Contact Us </h3>
                        </div>
                          <p>  
                          Brand style guides have historically been presented as a large document, complete with headers. Uber's approach to digitally presenting their brand guidelines excels at presenting a large volume of information in an easy-to-use, intuitive format. Users can quickly and easily navigate through this simple, forward-thinking menu
                           </p>
                           <ul className="contactCircles">
                           
                             <li>
                                 <FaFacebookF />
                             </li>
                             <li>
                                 <FaTwitter />
                             </li>
                             <li>
                                 <FaPinterest />
                             </li>
                             <li>
                                 <FaInstagram />

                             </li>
                            
                           
                                
                           </ul>

                           <div id="companyAddress" className="section">
                               <div className="content">
                                 <h2 className="title">
                                     Our Company Address
                                 </h2>
                                 <div className="companyRow">
                                  <div className="companyIcon">
                                   
                                  </div>
                                  <div class="address">
                                      <p>Food & Drinks
                                          <br />
                                          "NIT ROURKELA"
                                          <br />
                                          "Sundergadh, Odisha"
                                          <br />
                                          "India"
                                      </p>
                                  </div>
                                 </div>
                               </div>
                           </div>
                       
                   </div>
               </div>
           </div>

         </div>
     </div>
 )
}

export default Contact;