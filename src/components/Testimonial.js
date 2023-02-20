import React from 'react'

const Testimonial = () => {
    return (
        <div className='testimonial-section' style={{background:'url(/images/testimonial-bg.jpg)'}}>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="quotes text-center text-white">”</div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <h2 className='text-white testimonial-text'>I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.
                        </h2>
                    </div>
                    <div class="carousel-item">
                        <h2 className='text-white testimonial-text'>I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.
                        </h2>
                    </div>
                    <div class="carousel-item">
                        <h2 className='text-white testimonial-text'>I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.
                        </h2>
                    </div>
                </div>
              
                
            </div>

        </div>
    )
}

export default Testimonial
