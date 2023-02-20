import React from 'react'
import dividerimg from '../assests/images/divider-img.png';
const Menu = () => {
    return (
        <div className='our-menu bg-dark'>
            <p className='smaill-yellow-title  text-center'>SPECIAL SELECTION</p>
            <img src={dividerimg} className="ms-auto me-auto d-flex"></img>
            <h2 className='text-white mt-3 text-center'>Delicious Menu</h2>
            <div className='container'>
                <nav>
                    <div class="nav nav-tabs  justify-content-center mt-md-5  menu-tab-main pt-4 pb-4" id="nav-tab" role="tablist">
                        <button class="nav-link menu-link active text-uppercase text-white" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">MORNING</button>
                        <button class="nav-link menu-link text-uppercase text-white" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">WEEKDAY LUNCH</button>
                        <button class="nav-link menu-link text-uppercase text-white" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">DINNER</button>

                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                        <div className='menu'>
                            <div className='row mt-md-5 '>
                                <div className='col-md-6  pe-md-5 menu-left-col'>
                                    <div className='row'>
                                        <div className='col-xl-2 col-lg-3'>

                                            <img src="/images/greek-salad.png"></img>

                                        </div>
                                        <div className='col-xl-10 col-lg-9 ps-4'>
                                            <div className='row'>
                                                <div className='col-xl-9'>
                                                    <h5 className='menu-name text-white'>Greek Salad</h5>
                                                </div>
                                                <div className='col-xl-3'>
                                                    <p className='menuprice'>$2.50</p>
                                                </div>


                                            </div>

                                            <p className='menu-desc pe-md-5 '>Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</p>
                                        </div>
                                    </div>
                                    <div className='row mt-md-5 '>
                                        <div className='col-xl-2 col-lg-3'>

                                            <img src="/images/lasagne.png"></img>

                                        </div>
                                        <div className='col-xl-10 col-lg-9 ps-4'>
                                            <div className='row'>
                                                <div className='col-xl-9'>
                                                    <h5 className='menu-name text-white'>Lasagne</h5>
                                                </div>
                                                <div className='col-xl-3'>
                                                    <p className='menuprice'>$40.00</p>
                                                </div>


                                            </div>

                                            <p className='menu-desc pe-md-5 '>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</p>
                                        </div>
                                    </div>
                                    <div className='row mt-md-5 '>
                                        <div className='col-xl-2 col-lg-3 '>

                                            <img src="/images/butternut-pumpkin.png"></img>

                                        </div>
                                        <div className='col-xl-10 col-lg-9 ps-4'>
                                            <div className='row'>
                                                <div className='col-xl-9'>
                                                    <h5 className='menu-name text-white'>Butternut Pumpkin</h5>
                                                </div>
                                                <div className='col-xl-3'>
                                                    <p className='menuprice'>$10</p>
                                                </div>


                                            </div>

                                            <p className='menu-desc pe-md-5 '>Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 ps-md-5 menu-right-col'>
                                    <div className='row '>
                                        <div className='col-xl-2 col-lg-3'>

                                            <img src="/images/tokusen-wagyu.png"></img>

                                        </div>
                                        <div className='col-xl-10 col-lg-9 ps-4'>
                                            <div className='row'>
                                                <div className='col-xl-9'>
                                                    <h5 className='menu-name text-white'>Tokusen Wagyu</h5>
                                                </div>
                                                <div className='col-xl-3'>
                                                    <p className='menuprice'>$39</p>
                                                </div>


                                            </div>

                                            <p className='menu-desc pe-md-5 '>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</p>
                                        </div>
                                    </div>
                                    <div className='row mt-md-5 '>
                                        <div className='col-xl-2 col-lg-3'>

                                            <img src="/images/olivas-rellenas.png"></img>

                                        </div>
                                        <div className='col-xl-10 col-lg-9 ps-4'>
                                            <div className='row'>
                                                <div className='col-xl-9'>
                                                    <h5 className='menu-name text-white'>Olivas Rellenas</h5>
                                                </div>
                                                <div className='col-xl-3'>
                                                    <p className='menuprice'>$24.50</p>
                                                </div>


                                            </div>

                                            <p className='menu-desc pe-md-5 '>Avocados with crab meat, red onion, crab salad stuffed red bell & green bell pepper.</p>
                                        </div>
                                    </div>
                                    <div className='row mt-md-5 '>
                                        <div className='col-xl-2 col-lg-3'>

                                            <img src="/images/opu-fish.png"></img>

                                        </div>
                                        <div className='col-xl-10 col-lg-9 ps-4'>
                                            <div className='row'>
                                                <div className='col-xl-9'>
                                                    <h5 className='menu-name text-white'>Opu Fish</h5>
                                                </div>
                                                <div className='col-xl-3'>
                                                    <p className='menuprice'>$490</p>
                                                </div>


                                            </div>

                                            <p className='menu-desc pe-md-5 '>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                    <div className='menu'>
                            <div className='row mt-md-5 '>
                                <div className='col-md-6  pe-md-5 menu-left-col'>
                                    <div className='row'>
                                        <div className='col-xl-2'>

                                            <img src="/images/greek-salad.png"></img>

                                        </div>
                                        <div className='col-xl-10 ps-4'>
                                            <div className='row'>
                                                <div className='col-xl-9'>
                                                    <h5 className='menu-name text-white'>Greek Salad</h5>
                                                </div>
                                                <div className='col-xl-3'>
                                                    <p className='menuprice'>$2.50</p>
                                                </div>


                                            </div>

                                            <p className='menu-desc pe-md-5 '>Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</p>
                                        </div>
                                    </div>
                                    <div className='row mt-md-5 '>
                                        <div className='col-xl-2 '>

                                            <img src="/images/lasagne.png"></img>

                                        </div>
                                        <div className='col-xl-10 ps-4'>
                                            <div className='row'>
                                                <div className='col-xl-9'>
                                                    <h5 className='menu-name text-white'>Lasagne</h5>
                                                </div>
                                                <div className='col-xl-3'>
                                                    <p className='menuprice'>$40.00</p>
                                                </div>


                                            </div>

                                            <p className='menu-desc pe-md-5 '>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</p>
                                        </div>
                                    </div>
                                    <div className='row mt-md-5 '>
                                        <div className='col-xl-2 '>

                                            <img src="/images/butternut-pumpkin.png"></img>

                                        </div>
                                        <div className='col-xl-10 ps-4'>
                                            <div className='row'>
                                                <div className='col-xl-9'>
                                                    <h5 className='menu-name text-white'>Butternut Pumpkin</h5>
                                                </div>
                                                <div className='col-xl-3'>
                                                    <p className='menuprice'>$10</p>
                                                </div>


                                            </div>

                                            <p className='menu-desc pe-md-5 '>Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 ps-md-5 menu-right-col'>
                                    <div className='row '>
                                        <div className='col-xl-2'>

                                            <img src="/images/tokusen-wagyu.png"></img>

                                        </div>
                                        <div className='col-xl-10 ps-4'>
                                            <div className='row'>
                                                <div className='col-xl-9'>
                                                    <h5 className='menu-name text-white'>Tokusen Wagyu</h5>
                                                </div>
                                                <div className='col-xl-3'>
                                                    <p className='menuprice'>$39</p>
                                                </div>


                                            </div>

                                            <p className='menu-desc pe-md-5 '>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</p>
                                        </div>
                                    </div>
                                    <div className='row mt-md-5 '>
                                        <div className='col-xl-2'>

                                            <img src="/images/olivas-rellenas.png"></img>

                                        </div>
                                        <div className='col-xl-10 ps-4'>
                                            <div className='row'>
                                                <div className='col-xl-9'>
                                                    <h5 className='menu-name text-white'>Olivas Rellenas</h5>
                                                </div>
                                                <div className='col-xl-3'>
                                                    <p className='menuprice'>$24.50</p>
                                                </div>


                                            </div>

                                            <p className='menu-desc pe-md-5 '>Avocados with crab meat, red onion, crab salad stuffed red bell &  green bell pepper.</p>
                                        </div>
                                    </div>
                                    <div className='row mt-md-5 '>
                                        <div className='col-xl-2'>

                                            <img src="/images/opu-fish.png"></img>

                                        </div>
                                        <div className='col-xl-10 ps-4'>
                                            <div className='row'>
                                                <div className='col-xl-9'>
                                                    <h5 className='menu-name text-white'>Opu Fish</h5>
                                                </div>
                                                <div className='col-xl-3'>
                                                    <p className='menuprice'>$490</p>
                                                </div>


                                            </div>

                                            <p className='menu-desc pe-md-5 '>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                    <div className='menu'>
                            <div className='row mt-md-5 '>
                                <div className='col-xl-6  pe-md-5 menu-left-col'>
                                    <div className='row'>
                                        <div className='col-xl-2'>

                                            <img src="/images/greek-salad.png"></img>

                                        </div>
                                        <div className='col-xl-10 ps-4'>
                                            <div className='row'>
                                                <div className='col-xl-9'>
                                                    <h5 className='menu-name text-white'>Greek Salad</h5>
                                                </div>
                                                <div className='col-xl-3'>
                                                    <p className='menuprice'>$2.50</p>
                                                </div>


                                            </div>

                                            <p className='menu-desc pe-md-5 '>Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</p>
                                        </div>
                                    </div>
                                    <div className='row mt-md-5 '>
                                        <div className='col-xl-2 '>

                                            <img src="/images/lasagne.png"></img>

                                        </div>
                                        <div className='col-xl-10 ps-4'>
                                            <div className='row'>
                                                <div className='col-xl-9'>
                                                    <h5 className='menu-name text-white'>Lasagne</h5>
                                                </div>
                                                <div className='col-xl-3'>
                                                    <p className='menuprice'>$40.00</p>
                                                </div>


                                            </div>

                                            <p className='menu-desc pe-md-5 '>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</p>
                                        </div>
                                    </div>
                                    <div className='row mt-md-5 '>
                                        <div className='col-xl-2 '>

                                            <img src="/images/butternut-pumpkin.png"></img>

                                        </div>
                                        <div className='col-xl-10 ps-4'>
                                            <div className='row'>
                                                <div className='col-xl-9'>
                                                    <h5 className='menu-name text-white'>Butternut Pumpkin</h5>
                                                </div>
                                                <div className='col-xl-3'>
                                                    <p className='menuprice'>$10</p>
                                                </div>


                                            </div>

                                            <p className='menu-desc pe-md-5 '>Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-6 ps-md-5 menu-right-col'>
                                    <div className='row '>
                                        <div className='col-xl-2'>

                                            <img src="/images/tokusen-wagyu.png"></img>

                                        </div>
                                        <div className='col-xl-10 ps-4'>
                                            <div className='row'>
                                                <div className='col-xl-9'>
                                                    <h5 className='menu-name text-white'>Tokusen Wagyu</h5>
                                                </div>
                                                <div className='col-xl-3'>
                                                    <p className='menuprice'>$39</p>
                                                </div>


                                            </div>

                                            <p className='menu-desc pe-md-5 '>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</p>
                                        </div>
                                    </div>
                                    <div className='row mt-md-5 '>
                                        <div className='col-xl-2'>

                                            <img src="/images/olivas-rellenas.png"></img>

                                        </div>
                                        <div className='col-xl-10 ps-4'>
                                            <div className='row'>
                                                <div className='col-xl-9'>
                                                    <h5 className='menu-name text-white'>Olivas Rellenas</h5>
                                                </div>
                                                <div className='col-xl-3'>
                                                    <p className='menuprice'>$24.50</p>
                                                </div>


                                            </div>

                                            <p className='menu-desc pe-md-5 '>Avocados with crab meat, red onion, crab salad stuffed red bell & green bell pepper.</p>
                                        </div>
                                    </div>
                                    <div className='row mt-md-5 '>
                                        <div className='col-xl-2'>

                                            <img src="/images/opu-fish.png"></img>

                                        </div>
                                        <div className='col-xl-10 ps-4'>
                                            <div className='row'>
                                                <div className='col-xl-9'>
                                                    <h5 className='menu-name text-white'>Opu Fish</h5>
                                                </div>
                                                <div className='col-xl-3'>
                                                    <p className='menuprice'>$490</p>
                                                </div>


                                            </div>

                                            <p className='menu-desc pe-md-5 '>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</p>
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

export default Menu
