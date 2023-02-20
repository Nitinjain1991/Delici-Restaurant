import React from 'react';
import dividerimg from '../assests/images/divider-img.png';
import aboutone from '../assests/images/about-one.jpg';
import abouttwo from '../assests/images/about-two.jpg';
const Ourstory = () => {
  return (
    <div className='container pt-5 pb-5 OurStory'>
      <div className='row pt-5 pb-5'>
        <div className='col-lg-6 text-center my-auto'>
          <p className='smaill-yellow-title  text-center'>OUR STORY</p>
          <img src={dividerimg} ></img>
          <h2 className='text-white mt-3'>Every Flavor Tells<br /> a Story</h2>
          <p className='text-white ps-5 pe-5'>Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into.</p>
          <div className='book-a-call mt-5'>
            <p className='text-white mb-1'>Book Through Call</p>
            <a href="tel:+80 (400) 123 4567">+80 (400) 123 4567</a>
          </div>

        </div>
        <div className='col-lg-6'>
          <div className='position-relative'>
            <img src={aboutone} class="about-first-img"/>
            <img src={abouttwo} className="position-absolute about-second-img" />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Ourstory
