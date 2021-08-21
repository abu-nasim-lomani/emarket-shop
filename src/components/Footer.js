import React from 'react'
import { Image } from 'react-bootstrap'
import { FaSortDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div style={{ height: '100%', marginTop: '100px', backgroundColor: '#222222' }}>
            <div className="container">

                <div className="row pt-4">
                    <hr style={{ color: 'white' }} />
                    <div className="col-md-8">
                        <div className="row text-white">
                            <div className="col-md-3" style={{ borderRight: '1px solid grey' }}>
                                <h6>INFORMATION</h6>
                                <div className="box">
                                    <ul>
                                        <li>About Us</li>
                                        <li>Delivery Information</li>
                                        <li>Private Policy</li>
                                        <li>Terms & Condition</li>
                                        <li>Gift Cerficates</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3" style={{ borderRight: '1px solid grey' }}>
                                <h6>CUSTOMER SERVICE</h6>
                                <div className="box">
                                    <ul>
                                        <li>Contact Us</li>
                                        <li>Return</li>
                                        <li>Site Map</li>
                                        <li>Order History</li>
                                        <li>Wish List</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6" style={{ borderRight: '1px solid grey' }}>
                                <h6>STORE INFORMATION</h6>
                                <div className="box">
                                    <ul>
                                        <li>My Company</li>
                                        <li>42 avenue des Champs Elysées 75000 </li>
                                        <li>Paris France</li>
                                        <li>Call us now: (+1)866-540-3229</li>
                                        <li>Email: support@plazathemes.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="news__letter">
                            <h4 className="text-white text-center mt-5">NEWS LETTER</h4>
                            <input type="text" placeholder="Email" className="form-control m-auto text-center" style={{ width: '270px' }} />
                        </div>
                    </div>
                </div>
                <hr style={{ color: 'white' }} />
                <div className="foote__nav">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box">
                                <ul  >
                                    <li style={{ color: 'white', fontSize: '16px' }}>Copyright © 2021 Abu Nasim.</li>
                                    <li style={{ color: 'white', fontSize: '16px' }}>All Right Reserved.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 text-right">
                            <Image src="images/cards.png" fluid />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
