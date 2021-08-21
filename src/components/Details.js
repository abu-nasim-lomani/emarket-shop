import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import { BsDash, BsPlus } from 'react-icons/bs';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Details() {
    const [quantity, setQuantity] = useState(1)
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.ProductReducers);
    const { products } = useSelector(state => state.ProductReducers);
    // console.log(product)
    useEffect(() => {
        dispatch({ type: "PRODUCT", id });
    }, [id])


    const decQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <div className="container  ">
            <div className="row pt-4">
                <div className="col-md-5">
                    <div className="details__image">
                        <img src={`/images/${product.image}`} alt="" />
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="details__name">
                        <p><small>Technology Product</small></p>
                        <h1>{product.name}</h1>
                        <p><small>InStack</small></p>
                    </div>
                    <div className="details__price">
                        {/* <h1> */}
                        <span className="details__actual">{currencyFormatter.format(product.price, { code: 'BDT' })}</span>
                        <span className="details__discount">{currencyFormatter.format(product.discountPrice, { code: 'BDT' })}</span>
                        {/* </h1> */}
                    </div>
                    <div className="details__info">
                        <div className="DecInc">
                            <span className="dec" onClick={decQuantity}><BsDash /></span>
                            <span className="qty">{quantity}</span>
                            <span className="inc" onClick={() => setQuantity(quantity + 1)}><BsPlus /></span>
                            <button className="btn btn-default" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })}>Add TO Cart</button>
                        </div>
                    </div>

                    <div className="details__p">
                        <h4>details</h4>
                        <p>{product.des}</p>
                    </div>

                </div>
            </div>

            <div className="related__product pt-5 mt-5">
                <h1>RELATED PRODUCT</h1>
                <div className="row pt-5">
                    {
                        products.slice(0, 6).map(products => <>
                            <div className="col-md-2 mb-5">
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
                        </>)
                    }
                </div>
            </div>

        </div>
    )
}

export default Details
