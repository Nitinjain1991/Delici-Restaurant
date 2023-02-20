import React from 'react'

const Reservation = () => {
    return (
        <div className='container online-reservation'>
            <div className='row'>
                <div className='col-xl-8 col-lg-7'>
                    <div className='reservation-form-col'>
                        <h1 className='text-center text-white mb-4'>
                            Online Reservation
                        </h1>
                        <form>
                            <div className='row'>
                                <div className='col-xl-6'>
                                    <div class="mb-3">
                                        <input type="text" class="form-control" id="exampleInputEmail1" />
                                    </div>
                                </div>
                                <div className='col-xl-6'>
                                    <div class="mb-3">
                                        <input type="text" class="form-control" id="exampleInputEmail1" />
                                    </div>
                                </div>
                                <div className='col-xl-4'>
                                    <div class="mb-3">
                                        <input type="text" class="form-control" id="exampleInputEmail1" />
                                    </div>
                                </div>
                                <div className='col-xl-4'>
                                    <div class="mb-3">
                                        <input type="text" class="form-control" id="exampleInputEmail1" />
                                    </div>
                                </div>
                                <div className='col-xl-4'>
                                    <div class="mb-3">
                                        <input type="text" class="form-control" id="exampleInputEmail1" />
                                    </div>
                                </div>
                                <div className='col-xl-12'>
                                    <div class="mb-3">
                                        <textarea type="text" class="form-control" id="exampleInputEmail1" />
                                    </div>
                                </div>
                            </div>


                            <button type="submit" class="text-uppercase w-100 reservation-btn">Book a table</button>
                        </form>
                    </div>

                </div>
                <div className='col-xl-4 col-lg-5 reservation-right-col' style={{ background: 'url(/images/reservation-bg.png)' }}>
                    <h2 className='text-center text-white'>Contact Us</h2>
                    <div class="book-a-call mt-5 text-center"><p class="text-white mb-1">Book Through Call</p><a href="tel:+80 (400) 123 4567">+80 (400) 123 4567</a></div>
                 <div className=''>
                <div class="text-center text-white info mt-4">
                    <h4>Location</h4>
                    <p>Restaurant St, Delicious City,<br/> London 9578, UK</p>

                    <h4>Lunch Time</h4>
                    <p>Monday to Sunday<br/>
                        11.00 am - 2.30pm</p>

                    <h4>Dinner Time</h4>
                    <p>Monday to Sunday<br/>
                        05.00 pm - 10.00pm</p>
                </div>   
                 </div>
                </div>
            </div>
        </div>
    )
}

export default Reservation
