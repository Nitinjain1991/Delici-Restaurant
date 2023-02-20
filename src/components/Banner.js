import React from 'react'
import Button from './Button'
import sliderone from '../assests/images/banner-one.jpg';
import slidertwo from '../assests/images/banner-two.jpg';
import dividerimg from '../assests/images/divider-img.png';
const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
            {/* <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div> */}
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={sliderone} className="d-block w-100 banner-img" alt="..." />
                    <div className="carousel-caption">
                       <p className='smaill-yellow-title mb-3'>delightful experience</p>
                       <img src={dividerimg}></img>
                        <h1 className='mt-4'>Flavors Inspired by <br/>the Seasons</h1>
                        <p className='mt-3 mb-5'>Come with family & feel the joy of mouthwatering food</p>
                        <Button Children="View our menu" />
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slidertwo} className="d-block w-100 banner-img" alt="..." />
                    <div className="carousel-caption">
                    <p className='smaill-yellow-title mb-3'>delightful experience</p>
                       <img src={dividerimg}></img>
                        <h1 className='mt-4'>Flavors Inspired by <br/>the Seasons</h1>
                        <p className='mt-3 mb-5'>Come with family & feel the joy of mouthwatering food</p>
                        <Button Children="View our menu" />
                    </div>
                </div>
                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Banner
