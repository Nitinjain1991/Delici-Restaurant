import React from 'react'
import logo from '../assests/images/restaurant-logo.png'
import dividerimg from '../assests/images/divider-img.png';
const Footer = () => {
    return (
        <footer>
            <div class="container">
                <div class="row links">
                    <div class="col-lg-4 col-md-6">
                        <h4>Our Facilities</h4>
                        <div class="row">
                            <div class="col-md-6">
                                <p><a>Indian Menu</a></p>
                                <p><a>Menu Item</a></p>
                                <p><a>Private Event</a></p>
                                <p><a>Italian Menu</a></p>
                               <p> <a>Best Offer</a></p>
                            </div>
                            <div class="col-md-5">
                                <p><a>Indian Menu</a></p>
                                <p><a>Menu Item</a></p>
                                <p><a>Private Event</a></p>
                                <p><a>Italian Menu</a></p>
                                <p><a>Best Offer</a></p>
                            </div>
                        </div>
                        
                        
                    </div>
                    
                    <div class="col-lg-4 col-md-6">
                        <div class="foot-logo text-center text-white">
                            <img src={logo}></img>
                            <p class="mb-0">Established . 2022</p>
                            <img src={dividerimg} ></img>
                            <div class="footer-social">   
                                <a href="https://www.facebook.com/">
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                            
                                <a href="https://www.instagram.com/">
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                            
                                <a href="https://www.pinterest.com/">
                                <i class="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                            
                                <a href="https://twitter.com/">
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 address">
                        <h4>Address info</h4>
                        <p>Phone: <a href="#">+88-123-123456</a></p>
                        <p>Email: <a href="#">info@example.com</a></p>
                        <p>Fax id: <a href="#">+99-75667-786</a></p>
                        <p> 
                            <div class="row location">
                                <div class="col-lg-2 loc">Location: </div>
                                <div class="col-lg-8"><a>Restaurant St, Delicious City, London 9578, UK</a></div>
                            </div>
                            
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
