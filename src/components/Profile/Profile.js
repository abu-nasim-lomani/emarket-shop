import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebaseConfig";
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}


function Profile() {
    const { customerOrderInformation } = useSelector(state => state.OrderReducer);
    const [toggle, setToggle] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            window.location.reload();
          }).catch((error) => {
            console.log(error)
          });
    }
    return (
        <div className="profile container" style={{ paddingTop: '130px' }}>
            <div className="row">
                <div className="col-md-3">
                    <div className="left__site">
                        <div className="profile__image m-auto">
                            <img src={`/images/2.jpg`} style={{ width: '100%' }} alt="" />
                        </div>
                        <div className="user__name m-auto">
                            <h3>Abu Nasim Lomani</h3>
                        </div>
                        <div className="uses__list">
                            <ul>
                                <li onClick={() => setToggle(false)} >Order History</li>
                                <li onClick={() => setToggle(true)} >Account Setting</li>
                                <li onClick={handleSignOut}>Logout</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="right__site">
                        <div className={!toggle ? "order__history p-3" : 'd-none'}>

                            <h1 className="text-center">Order History</h1>
                            {customerOrderInformation ? customerOrderInformation.orderProduct.map(product => (
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
                                        <div className="cart__total">
                                            {currencyFormatter.format(product.discountPrice * product.quantity, { code: 'BDT' })}
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="details__info">
                                            <div className="DecInc">
                                                <span>Items: {product.quantity}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="cart__total">
                                            {customerOrderInformation.currentDate.date}-
                                            {customerOrderInformation.currentDate.month}-
                                            {customerOrderInformation.currentDate.year}
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="cart__remove" style={{ cursor: 'pointer' }}>
                                            <button className="btn btn-sm btn-danger">pending</button>

                                        </div>
                                    </div>
                                </div>
                            )):<><h1>Access Denied</h1></>}
                        </div>

                        <div className={toggle ? "acoount__setting p-3" : 'd-none'}>
                            <div className="order__history p-3">

                                <h1 className="text-center">Account Setting</h1>
                                <div class="mb-4">
                                    <h6 class="card-title mb-3">Change Profile</h6>
                                    <div class="text-muted">Make your work easy way </div>
                                </div>
                                <div class="row g-4 mb-3">
                                    <div class="col-md-6">
                                        <label class="form-label">Your Name</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">Email</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Old Password</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">New Password</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <button className="btn btn-sm btn-info">Save Change</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
