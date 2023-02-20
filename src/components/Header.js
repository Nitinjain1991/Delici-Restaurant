

import React from 'react'
import logo from '../assests/images/restaurant-logo.png'
import Button from './Button'
const Header = () => {
    return (
        <div className='header container-fluid ps-3 pe-3 pt-3'>
            <div className='top-bar border-bottom pb-3'>
                <div className='row'>
                    <div className='col-xl-6 col-md-7 text-white d-flex'>
                        <p className='top-header-text mb-0'>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <span className='ps-1'>Restaurant St, Delicious City, London 9578, UK</span>
                        </p>
                        <p className='ps-3 top-header-text mb-0'>
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        <span className='ps-1'> Daily : 8.00 am to 10.00 pm</span>
                        </p>
                       

                    </div>
                    <div className='col-xl-6 col-md-5 text-white d-flex text-end justify-content-end'>
                        <p className='top-header-text mb-0'>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <span className='ps-1'> +1 123 456 7890</span>
                        </p>
                        
                        <p className='ps-3 top-header-text mb-0'>
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        <span className='ps-1'> booking@restaurant.com</span>
                        </p>
                       
                    </div>
                </div>
            </div>
            <div className='main-haeder pt-4'>
                <div className='container-fluid'>
                    <div className='row'>
                        {/* <div className='col-xl-4'>
                            <i class="fa fa-bars" aria-hidden="true"></i>

                        </div> */}
                        <div className='col-6'>
                            <img src={logo}></img>
                        </div>
                        <div className='col-6 text-end'>
                            <Button Children="Find A Table" />
                        </div>
                    </div>
                </div>

            </div>

        </div>


    )
}

export default Header
