import React from 'react';
import currencyFormatter from 'currency-formatter';
import { Link } from 'react-router-dom';

function Products({ products }) {

    return (
        <div className="col-md-3 mb-5">
            <div className="product">
                <div className="product__img">
                    <Link to={`/details/${products.id}`} ><img src={`/images/${products.image}`} alt="" /></Link>
                </div>
                <div className="product__name">
                    {products.name}
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="product__price">
                            <span className="actualPrice">{currencyFormatter.format(products.price, { code: 'BDT' })}</span>
                            <span className="discount">{products.discount}%</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product__discount__price">
                            {currencyFormatter.format(products.discountPrice, { code: 'BDT' })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
