import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingBag, FaHeadphones, FaSortDown } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import currencyFormatter from 'currency-formatter';

function Nav() {
    const { totalQty, totalPrice } = useSelector(state => state.CartReducer);
    const { user } = useSelector(state => state.AuthReducer);
    const email= user.email;

    return (
        <div>
            <div className="nav">
                <div className="container">
                    <div className="nav__container">
                        <div className="nav__left">
                            <Link to="/">
                                <img src="/images/logo.png" alt="logo images" />
                            </Link>
                        </div>
                        <div className="nav__middle d-flex">
                            <div className="head__phone">
                                <div className="head__phone__icon">
                                    <FaHeadphones />
                                </div>
                                <div className="phone__number">
                                    <p>Phone</p>
                                    <p>+880-178-81-88820</p>
                                </div>
                            </div>
                            <div className="nav__search__icon">

                                <form action="#">
                                    <input type="text" className="input-btn" placeholder="Search your product" />
                                    <button className='search-btn'><span class="icon_search"><FaSearch /></span></button>
                                </form>
                            </div>
                        </div>
                        <Link to="/cart">
                            <div className="nav__right d-flex">
                                <div className="shopping__icon">
                                    <FaShoppingBag />
                                </div>
                                <div className="shopping__details">
                                    <p>Shopping Cart</p>
                                    <p> <span>{totalQty} items</span> - <span>{currencyFormatter.format(totalPrice, { code: 'BDT' })}</span> </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="nav__link">
                        <ul>
                            <li ><Link to="/"><span style={{color: 'black'}}>Home</span></Link></li>
                            <li ><Link to="/shop"><span style={{color: 'black'}}>shop</span></Link></li>
                            <li style={{color: 'black'}} className="link__page"> <p>Page</p> <p className="p"><FaSortDown /></p></li>
                            <li style={{color: 'black'}}>Blog</li>
                            <li style={{color: 'black'}}>Contact</li>
                            {email ? <Link to="profile"><li style={{color: 'black'}}>Account</li></Link>: <Link to="/login"><li style={{color: 'black'}}>Login/Register</li></Link>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav


// <div className="basket">
// <Link to="cart" >
//     <BsFillBagFill className="cart-icon" />
//     <span>{totalQty}</span>
// </Link>
// </div>