import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
     
<div class="footer-area footer--light">
  <div class="footer-big">
  
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-12">
          <div class="footer-widget">
            <div class="widget-about">
              <img src="http://placehold.it/250x80" alt="" class="img-fluid" />
              <p>Что если тут написать другой текст на русском языке, для проверки шрифта Rubik )</p>
              <ul class="contact-details">
                <li>
                  <span class="icon-earphones"></span> Call Us:
                  <a href="tel:344-755-111">344-755-111</a>
                </li>
                <li>
                  <span class="icon-envelope-open"></span>
                  <a href="mailto:support@aazztech.com">support@aazztech.com</a>
                </li>
              </ul>
            </div>
          </div>
         
        </div>
        <div class="col-md-3 col-sm-4">
          <div class="footer-widget">
            <div class="footer-menu footer-menu--1">
              <h4 class="footer-widget-title">Popular Category</h4>
              <ul>
                <li>
                  <a href="#">Wordpress</a>
                </li>
                <li>
                  <a href="#">Plugins</a>
                </li>
        
              </ul>
            </div>
           
          </div>
       
        </div>

        <div class="col-md-3 col-sm-4">
          <div class="footer-widget">
            <div class="footer-menu">
              <h4 class="footer-widget-title">Our Company</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">How It Works</a>
                </li>
          
                <li>
                  <a href="#">Plan &amp; Pricing</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          
          </div>
 
        </div>

        <div class="col-md-3 col-sm-4">
          <div class="footer-widget">
            <div class="footer-menu no-padding">
              <h4 class="footer-widget-title">Help Support</h4>
              <ul>
                <li>
                  <a href="#">Support Forum</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Support Policy</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
             
              </ul>
            </div>
          
          </div>
     
        </div>
      </div>
     
    </div>

  </div>

  <div class="mini-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="copyright-text">
            <p>© 2018
              <a href="#">DigiPro</a>. All rights reserved
              <a href="#">AazzTech</a>
            </p>
          </div>

          <div class="go_top">
            <span class="icon-arrow-up"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
  }
}

export default Footer;

