import React from 'react';
import './Slider.css';

function CategoryList() {
    return (
        <div className="col-md-3">
            <div className="category">
                <p className="category-list ctg-head" style={{ backgroundColor: 'yellow', paddingTop: '12px', paddingLeft: '15px' }}> <i className="fa fa-bars"></i> Categories</p>
                <div className="">
                    <p className="category-list"><i className="fa fa-shopping-bag ctg-icon"></i><span >Clothing</span></p>
                    <p className="category-list"><i className="fa fa-laptop ctg-icon"></i><span >Electronics</span></p>
                    <p className="category-list"><i className="fa fa-paw ctg-icon"></i><span >Shoes</span></p>
                    <p className="category-list"><i className="fa fa-clock-o ctg-icon"></i><span >Watches</span></p>
                    <p className="category-list"><i className="fa fa-diamond ctg-icon"></i><span >Jewellaery</span></p>
                    <p className="category-list"><i className="fa fa-heartbeat ctg-icon"></i><span >Health & Beauty</span></p>
                    <p className="category-list"><i className="fa fa-paper-plane ctg-icon"></i><span >Kids & Babies</span></p>
                    <p className="category-list"><i className="fa fa-futbol-o ctg-icon"></i><span >Sports</span></p>
                    <p className="category-list"><i className="fa fa-envira ctg-icon"></i><span >Home & Garden</span></p>
                </div>
            </div>
        </div>
    )
}

export default CategoryList
