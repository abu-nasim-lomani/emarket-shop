import React from 'react';
import './HeadingSection.css';
// import trend1 from '../../../img/home/electronics/banner-sm01.png';
// import trend2 from '../../../img/home/electronics/hero-slide01.png';
// import trend3 from '../../../img/home/electronics/hero-slide02.png';
// import trend4 from '../../../img/home/electronics/hero-slide03.png';

function TopRank() {
    return (
        <div className="col-md-6 col-sm-12">
            <div className="p-1" style={{ backgroundColor: '#fff', height: '100%', width: '100%', borderRadius: '5px' }}>
                <div className="" style={{ paddingBottom: '10px' }}>
                    <h6> <i className="fa fa-line-chart ml-3"></i> Top-ranked Producds</h6>
                    <div>
                        <div className="d-flex pl-1 pr-1" style={{ justifyContent: 'space-around' }}>
                            <div className="arv-box">
                                <div className="box  text-center" style={{ height: '60px', width: '' }}>
                                    <img src='/images/elctronics/06.jpg' style={{ height: '100%' }} alt="" />
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
                                    <img src='/images/elctronics/01.jpg' style={{ height: '100%' }} alt="" />
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

export default TopRank
