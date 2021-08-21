import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from "../../firebaseConfig";
import { ImGoogle2, ImFacebook2 } from "react-icons/im";

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}


function RegistrationPage() {


    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/login" } };
    const emailRef = useRef(null);
    const passRef = useRef(null);

    const signUp = e => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(emailRef.current.value, passRef.current.value)
            .then(user => {
                console.log(user)
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
    }


    // Google SignIn
    const provider = new firebase.auth.GoogleAuthProvider();
    const googleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signInUser = {
                    name: displayName,
                    email: email,
                    photoURL: photoURL
                }
                console.log(signInUser);
                history.replace(from);
            });


    }
    // End Google SignIn
    const color = '#FF6E40';
    const tcolor='white';
    return (
        <div style={{ backgroundColor: `${color}`, height: '100vh' }}>
            <div className="container" style={{ paddingTop: '130px' }}>
            <div class="form-wrapper">
                <div class="container">
                    <div class="card">
                        <div class="row g-0">
                            <div class="col">
                                <div class="row">
                                    <div class="col-md-10 offset-md-1">
                                        <div class="ltf-block-logo d-block d-lg-none text-center text-lg-start">
                                            <img width="120" src="/images/logo.png" alt="logo" />
                                        </div>
                                        <div class="my-5 text-center text-lg-start">
                                            <h1 class="display-8">Create Account</h1>
                                            <p class="text-muted">You can create a free account now</p>
                                        </div>
                                        <form class="mb-5">
                                            <div class="mb-3">
                                                <input type="email" ref={emailRef} class="form-control" placeholder="Enter email"
                                                    required />
                                            </div>
                                            <div class="mb-3">
                                                <input type="password" ref={passRef} class="form-control" placeholder="Enter password"
                                                    required />
                                            </div>
                                            <div class="mb-3">
                                                <input type="password" class="form-control" placeholder="Re-enter password"
                                                    required />
                                            </div>
                                            <div class="text-center text-lg-start">
                                                <button class="btn"  style={{backgroundColor:`${color}`, color:`${tcolor}` }} onClick={signUp}>Sign Up</button>
                                            </div>
                                        </form>
                                        <div class="social-links pb-3">
                                            <div className="">
                                                <button className="btn w-75 mb-2 text-left" onClick={googleSignIn} style={{ border: '1px solid grey' }}> <ImGoogle2 style={{ color: '#DB4437', fontSize: '25px' }} /> <span style={{ fontSize: '15px' }}>Sign-in with  Google</span></button> <br />
                                                <button className="btn w-75  text-left" onClick={googleSignIn} style={{ border: '1px solid grey' }}><ImFacebook2 style={{ color: '#3B5998', fontSize: '25px' }} /> <span style={{ fontSize: '15px' }}>Sign-in with  Facebook</span></button>
                                            </div>
                                        </div>
                                        <p class="text-center d-block d-lg-none mt-5 mt-lg-0">
                                            Don't have an account? <Link to="login"><a href="#"  style={{backgroundColor:`${color}`, color:`${tcolor}`}}>Sign In</a></Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col d-none p-5 d-lg-flex border-start align-items-center justify-content-between flex-column text-center">
                                <div class="logo">
                                <img width="120" src="/images/logo.png" alt="logo" />
                                </div>
                                <div>
                                    <h3 class="fw-bold">Welcome to e Market Shop!</h3>
                                    <p class="lead my-5">Do you already have an account?</p>
                                    <Link to="login"><a href="#" class="btn" style={{backgroundColor:`${color}`, color:`${tcolor}`}}>Sign In</a></Link>
                                </div>
                                <ul class="list-inline">
                                    <li class="list-inline-item">
                                        <a href="#"  style={{color:`${color}`}}>Privacy Policy</a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#"  style={{color:`${color}`}}>Terms & Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default RegistrationPage
