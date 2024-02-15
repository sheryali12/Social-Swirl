import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';
import './footerSec.scss'; // Import SCSS file

const FooterSec = () => {
  return (
    <div className='footer-container'>
      <div id='footer' className='footer-content'>



        <div className='footer-logo'>
          <img
            src="https://socialswirl.org/assets/logoSocialSwirl-5ad4fd8b.png"
            alt="logo"
            className='logo-image'
          />

        
          <h4 className='footer-text' style={{lineHeight:'25px', fontFamily:'Chivo'}}>Get Connected With Us<br/> On Social Networks</h4>
          <div className='social-icons'>
            <FaFacebookSquare size={23} />
            <FaTwitterSquare size={23} />
            <FaInstagram size={23} />
            <FaLinkedin size={23} />
          </div>
          <p className='footer-copyright'>&#169; {new Date().getFullYear()} Social Swirl</p>
        </div>




        <div className='footer-links'>
          <div>
            <h6 className='footer-heading'>Product</h6>
            <div className="head">
            <ul>
              <li>Marketplace</li>
              <li>List Your Api</li>
              <li>Why Choose Us</li>
            </ul>
          </div></div>
          <div>
            <h6 className='footer-heading'>Docs and Helps</h6>
            <div className="head">
            <ul>
              <li>Docs</li>
              <li>Blogs</li>
              <li>FAQs</li>
              <li>Write For Us</li>
              <li>API Glossary</li>
            </ul>
          </div></div>
          <div>
            <h6 className='footer-heading'>Account</h6>
            <div className="head">
            <ul>
              <li>Sign In</li>
              <li>Forget Passowrd</li>
              <li>Free Sign up</li>
            </ul>
          </div></div>
          <div>
            <h6 className='footer-heading'>Get In Touch</h6>
            <div className="head">
            <ul>
              <li>Support</li>
              <li>List Your Api</li>
              <li>Contact Us</li>
            </ul>
          </div></div>
        </div>
      </div>
    </div>
  );
};

export default FooterSec;
