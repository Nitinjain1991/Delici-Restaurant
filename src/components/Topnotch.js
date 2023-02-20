import React from 'react'
import topnotchone from '../assests/images/topnotch-one.jpg';
import topnotchtwo from '../assests/images/topnotch-two.jpg';
import topnotchthree from '../assests/images/topnotch-three.jpg';
import dividerimg from '../assests/images/divider-img.png';
import topnotchbackimg from '../assests/images/topnotch-backimg.png';
const Topnotch = () => {
    return (
        <div className='topnotch-main'>
        <div className='container pt-5 pb-5'>
            <p className='smaill-yellow-title  text-center'>FLAVORS FOR ROYALTY</p>
            <div className="text-center justify-content-center">
                <img src={dividerimg} ></img>
            </div>

            <div className='row mt-4'>
                <div className='col-lg-4 text-center my-auto main'>
                    <div className='position-relative image'>
                        <img src={topnotchone} className="topnotch-card-img"></img>
                        <img src={topnotchbackimg} className="topnotch-backimg"></img>
                    </div>

                    <h5 className='text-white mt-5 mb-3'>Breakfast</h5>
                    <a href="#" className='text-btn'>VIEW MENU</a>

                </div>
                <div className='col-lg-4 text-center'>
                    <h2 className='text-white text-center'>We Offer Top Notch</h2>
                    <p className='text-white mt-4 mb-5 pb-4'>Lorem Ipsum is simply dummy text of the printing<br />
                        and typesetting industry lorem Ipsum has been the industrys standard dummy text ever.</p>
                    <div className='position-relative  mb-5 '>
                        <img src={topnotchtwo}></img>
                        <img src={topnotchbackimg} className="topnotch-backimg"></img>
                    </div>
                    <h5 className='text-white mt-5 mb-3'>Breakfast</h5>
                    <a href="#" className='text-btn'>VIEW MENU</a>

                </div>
                <div className='col-lg-4 text-center my-auto'>
                    <div className='position-relative'>
                        <img src={topnotchthree}></img>
                        <img src={topnotchbackimg} className="topnotch-backimg"></img>
                    </div>
                    <h5 className='text-white mt-5 mb-3'>Breakfast</h5>
                    <a href="#" className='text-btn'>VIEW MENU</a>

                </div>
            </div>

        </div>
        </div>
    )
}

export default Topnotch
