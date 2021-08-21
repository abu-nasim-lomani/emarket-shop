import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import { BsDash, BsPlus, BsReverseBackspaceReverse } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Cart() {
    const { products, totalPrice, totalQty } = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();
    return (
        <div className="cart">
            <div className="container">
                <h3>Your Cart</h3>
                {products.length > 0 ? <>
                    <div className="row">
                        <div className="col-md-9">
                            <div className="cart__heading">
                                <div className="row">
                                    <div className="col-md-2">picture</div>
                                    <div className="col-md-3">Name</div>
                                    <div className="col-md-1">price</div>
                                    <div className="col-md-2">Inc/Dec</div>
                                    <div className="col-md-2">Total Price</div>
                                    <div className="col-md-2">remove</div>
                                </div>
                            </div>
                            {products.map(product => (
                                <div className="row" style={{ display: 'flex', alignItems: 'center' }} key={product.id}>
                                    <div className="col-md-2">
                                        <div className="cart__image">
                                            <img src={`images/${product.image}`} style={{ width: '100px', height: '100px', padding: '10px' }} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="cart__name">
                                            {product.name}
                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                        <div className="cart__price">
                                            {currencyFormatter.format(product.discountPrice, { code: 'BDT' })}
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="details__info">
                                            <div className="DecInc">
                                                <span className="dec" onClick={() => dispatch({ type: 'DEC', payload: product.id })}><BsDash /></span>
                                                <span className="qty">{product.quantity}</span>
                                                <span className="inc" onClick={() => dispatch({ type: 'INC', payload: product.id })}><BsPlus /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="cart__total">
                                            {currencyFormatter.format(product.discountPrice * product.quantity, { code: 'BDT' })}
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="cart__remove" style={{ cursor: 'pointer' }} onClick={() => dispatch({ type: 'REMOVE', payload: product.id })}>
                                            <BsReverseBackspaceReverse />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-md-3">
                            <div className="summary">
                                <div className="summary__heading">
                                    summary
                                </div>
                                <div className="summary__details">
                                    <div className="row mb-2">
                                        <div className="col-md-6">
                                            Total Items:
                                        </div>
                                        <div className="col-md-6">
                                            {totalQty}
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-md-6">
                                            Total Price:
                                        </div>
                                        <div className="col-md-6">
                                            {currencyFormatter.format(totalPrice, { code: 'BDT' })}
                                        </div>
                                    </div>
                                    <Link to="checkout"><button type="button" className="checkout">Checkout</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                    : 'Your cart is empty!'}
            </div>
        </div>
    )
}

export default Cart
