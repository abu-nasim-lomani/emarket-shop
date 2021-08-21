import React from 'react';
import './HeadingSection.css';
// import trend1 from '../../../img/home/elctronicss/banner-sm01.png';
// import trend2 from '../../../img/home/elctronicss/hero-slide01.png';
// import trend3 from '../../../img/home/elctronicss/hero-slide02.png';
// import trend4 from '../../../img/home/elctronicss/hero-slide03.png';

function NewArrival() {
    return (
        <div className="col-md-6 col-sm-12">
            <div className="p-1" style={{ backgroundColor: '#fff', height: '100%', width: '100%', borderRadius: '5px' }}>
                <div className="" style={{ paddingBottom: '10px' }}>
                    <h6> <i className="fa fa-area-chart ml-3"></i> New Arrivals</h6>
                    <div>
                        <div className="d-flex pl-1 pr-1" style={{ justifyContent: 'space-around' }}>
                            <div className="arv-box">
                                <div className="box  text-center" style={{ height: '60px', width: '' }}>
                                    <img src='/images/elctronics/01.jpg' style={{ height: '100%' }} alt="" />
                                </div>
                                <div className="text-center box-arv">
                                    <span>$5.00</span>
                                    <br />
                                    <span>Trending NOW</span>
                                </div>
                            </div>

                            <div className="arv-box">
                                <div className="box text-center" style={{ height: '60px', width: '' }}>
                                    <img src='/images/elctronics/02.jpg' style={{ height: '100%' }} alt="" />
                                </div>
                                <div className="text-center box-arv">
                                    <span>$5.00</span>
                                    <br />
                                    <span>Trending NOW</span>
                                </div>
                            </div>

                            <div className="arv-box">
                                <div className="box text-center" style={{ height: '60px', width: '' }}>
                                    <img src='/images/elctronics/07.jpg' style={{ height: '100%' }} alt="" />
                                </div>
                                <div className="text-center box-arv">
                                    <span>$5.00</span>
                                    <br />
                                    <span>Trending NOW</span>
                                </div>
                            </div>
                            <div className="arv-box">
                                <div className="box text-center" style={{ height: '60px', width: '' }}>
                                    <img src='/images/elctronics/05.jpg' style={{ height: '100%' }} alt="" />
                                </div>
                                <div className="text-center box-arv">
                                    <span>$5.00</span>
                                    <br />
                                    <span>Trending NOW</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewArrival
