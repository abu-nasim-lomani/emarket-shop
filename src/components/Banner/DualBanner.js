import React from 'react';


function TriBanner() {
    return (
        <div className="container m-auto">
            <div className="row mt-3 mb-4">
                <div className="col-md-4 col-sm-12 ">
                    <div style={{position: 'absolute'}}><img src='/images/banner/h2-bn-4.jpg' style={{ width: '100%', padding: '0px' }} alt="" /></div>
                    <div style={{ position: 'relative', padding: '  26px  30px', color: 'white' }}><h5>Electronics</h5>
                        <h3>Be movie <br /> night ready.</h3>
                        <h5>Starting at</h5>
                        <h4>$599,9</h4></div>
                </div>
                <div className="col-md-4 col-sm-12 ">
                    <div style={{position: 'absolute'}}><img src='/images/banner/h2-bn-5.jpg' style={{ width: '100%', padding: '0px' }} alt="" /></div>
                    <div style={{ position: 'relative', padding: '  26px  30px', color: 'white' }}><h5>Electronics</h5>
                        <h3>Be movie <br /> night ready.</h3>
                        <h5>Starting at</h5>
                        <h4>$599,9</h4></div>
                </div>
                <div className="col-md-4 col-sm-12 ">
                    <div style={{position: 'absolute'}}><img src='/images/banner/h2-bn-6.jpg' style={{ width: '100%', padding: '0px' }} alt="" /></div>
                    <div style={{ position: 'relative', padding: '  26px  30px', color: 'white' }}><h5>Electronics</h5>
                        <h3>Be movie <br /> night ready.</h3>
                        <h5>Starting at</h5>
                        <h4>$599,9</h4></div>
                </div>
            </div>
        </div>
    )
}

export default TriBanner
