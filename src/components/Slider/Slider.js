import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Slider.css';

function Slider() {
    return (
        <div className="col-md-9" style={{zIndex:'-5'}}>
            <div id="slider" class="carousel carousel-fade" data-ride="carousel">
                <Carousel>
                    <Carousel.Item className='first-slide'>
                        <div class="car-caption">
                            <h5>TOP BRAND</h5>
                            <h1>NEW COLLECTIONS</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <Link to='/shop'><button className="btn btn-sm btn-primary" style={{cursor:'pointer'}}>
                                Shop NOW
                            </button></Link>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='second-slide'>
                        <div class="car-caption">
                            <h5>SPRING 2016</h5>
                            <h1>WOMAN <span style={{ color: 'yellow' }}>FASHION</span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <Link to='/shop'><button className="btn btn-sm btn-danger" style={{cursor:'pointer'}}>
                                Shop NOW
                            </button></Link>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="benifits d-flex" style={{marginTop:''}}>
                <div className="money-back">
                    <h6>MONEY BACK</h6>
                    <p style={{fontSize:'15px', color:'white'}}>30 Days Money Back Gurantee</p>
                </div>
                <div className="shipping">
                    <h6>MONEY BACK</h6>
                    <p style={{fontSize:'15px', color:'white'}}>30 Days Money Back Gurantee</p>
                </div>
                <div className="special-sale">
                    <h6>MONEY BACK</h6>
                    <p style={{fontSize:'15px', color:'white'}}>30 Days Money Back Gurantee</p>
                </div>
            </div>
        </div>
    )
}

export default Slider

{/* <div class="car-caption">
                            <h5>TOP BRAND</h5>
                            <h1>NEW COLLECTIONS</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <button className="btn btn-sm btn-primary">
                                Shop NOW
                            </button>
                        </div> */}