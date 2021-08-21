import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from "../../firebaseConfig";
import { ImGoogle2, ImFacebook2 } from "react-icons/im";
import { useSelector, useDispatch } from 'react-redux';



if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

function LoginPage() {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.AuthReducer);
    const name= user.displayName



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
                dispatch({ type: 'ADD_USER', payload: { user: result.user } })
                history.replace(from);
            });


    }
    // End Google SignIn


    // Email Password SignIn
    const emailRef = useRef(null);
    const passRef = useRef(null);

    const [errorMessage, setErrorMessage]=useState('')
    const signIn = e => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(emailRef.current.value, passRef.current.value)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log("Successfully", user);
                dispatch({ type: 'ADD_USER', payload: { user: user } })
                history.replace(from);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
            });
    }
    // End SignIn 


    const color = '#FF6E40'
    return (
        <div className="" style={{ backgroundColor: `${color}`, height: '100vh' }}>
            <div class="form-wrapper container" style={{ paddingTop: '130px', }}>
                <div class="container">
                    <div class="card">
                        <div class="row g-0">
                            <div class="col">
                                <div class="row">
                                    <div class="col-md-10 offset-md-1">
                                        <div class="d-block d-lg-none text-center text-lg-start">
                                            <img width="120" src="/images/logo.png" alt="logo" />
                                        </div>
                                        <div class="my-5 text-center text-lg-start">
                                            <h1 class="display-8">Sign In</h1>
                                            <p class="text-muted">Sign in to Vetra to continue</p>
                                        </div>
                                        <form class="mb-5">
                                            <div class="mb-3">
                                                <span>{errorMessage}</span>
                                                <input type="email" ref={emailRef} class="form-control" placeholder="Enter email" autofocus
                                                    required />
                                            </div>
                                            <div class="mb-3">
                                                <input type="password" ref={passRef} class="form-control" placeholder="Enter password"
                                                    required />
                                            </div>
                                            <div class="text-lg-start">
                                                <p class="small">Can't access your account? <Link to="reset"><a href="#" style={{color:`${color}`}}>Reset your password now</a></Link>.</p>
                                                <button class="btn " style={{backgroundColor: `${color}`, color: '#fff'}} onClick={signIn}>Sign In</button>
                                            </div>
                                        </form>
                                        <div class="social-links pb-3">
                                            <div className="">
                                                <button className="btn w-75 mb-2 text-left" onClick={googleSignIn} style={{ border: '1px solid grey' }}> <ImGoogle2 style={{ color: '#DB4437', fontSize: '25px' }} /> <span style={{ fontSize: '15px' }}>Sign-in with  Google</span></button> <br />
                                                <button className="btn w-75  text-left" onClick={googleSignIn} style={{ border: '1px solid grey' }}><ImFacebook2 style={{ color: '#3B5998', fontSize: '25px' }} /> <span style={{ fontSize: '15px' }}>Sign-in with  Facebook</span></button>
                                            </div>
                                        </div>
                                        <p class="text-center d-block d-lg-none mt-5 mt-lg-0">
                                            Don't have an account? <Link to="registation"><a href="#" style={{backgroundColor: {color}, color: '#fff'}}>Sign up</a></Link>.
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
                                    <p class="lead my-5">If you don't have an account, would you like to register right now?</p>
                                    <Link to="/registation"><a href="#" class="btn " style={{backgroundColor: `${color}`, color: '#fff'}}>Sign Up</a></Link>
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

    )
}
export default LoginPage