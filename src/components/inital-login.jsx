import React from "react";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase-config';

import Dashboard from "./dashboard";

import {BrowserRouter, Routes, Route, useNavigate, useOutletContext} from 'react-router-dom';


function InitalLogin(){ 

    let navigate = useNavigate();
    
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [setUser ]= useOutletContext();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    
    }, [])

    const registerBtn = () => {
        document.getElementById('register-box').style.display = 'block';
    }

    const registerExit = () => {
        let box = document.getElementById('register-box');
        if(box.style.display === 'block'){
            box.style.display = 'none';
        }
    }

    const loginBtn = () => {
        document.getElementById('login-box').style.display = 'block';
    }

    const loginExit = () => {
        let box = document.getElementById('login-box');
        if(box.style.display === 'block'){
            box.style.display = 'none';
        }
    }

    const register = async () => {
        
        try{
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword) ;
        console.log(user);
        navigate('/dashboard');
        } catch (error){
            console.log(error.message);
        }

    };

    const login = async () => {
        try{
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword) ;
        console.log(user);
            if(user){navigate('/dashboard');}
        } catch (error){
            window.alert(error.message);
        }
    };

    const guest = () =>{
        navigate('/dashboard');
    }

    return( <div className="container-fluid">
            <div className="container-fluid login-image d-flex justify-content-center align-items-center col-12 col-md-6">
                <img src="https://lh3.googleusercontent.com/dt2Vp5UEgd2UYAT7R1TDmP6QWlmRmRz5u588_G6693Yyi6pMr4mLM1UNDLZ9JLpHZvrylANdb6b6yF9YxAMXytlJ28DULphV9_eG4d6ptBBJeg_86Ykkv6-8AkSJwJJm4z2xzVRLW3A=w2400" className="img-fluid" alt="Digital Diviner Logo"/>
            </div>
            <div className="d-flex justify-content-center align-items-center home-screen">
                <div className="button-row col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <Button className="intial-login-btn" variant="outline-primary" onClick={registerBtn}>Create an Account</Button>{' '}
                    <Button  className="intial-login-btn" variant="outline-primary" onClick={loginBtn}>Login</Button>{' '}
                    <Button  className="intial-login-btn" variant="outline-primary" onClick={guest} >Continue as Guest</Button>{' '}
                </div>

                <div className="initial-login-form-container" id="register-box">
                    <div className="form-exit" onClick={registerExit}>x</div>
                    <h3>Register</h3>
                    <input className="initial-form" placeholder="Email..." onChange={(event) => {setRegisterEmail(event.target.value)}} />
                    <hr/>
                    <input className="initial-form" placeholder="Password..." onChange={(event) => {setRegisterPassword(event.target.value)}} />
                    <hr/>
                    <button className="initial-form-btn" onClick={register}>Create User And Login</button>
                </div>

                <div className="initial-login-form-container" id="login-box">
                    <div className="form-exit" onClick={loginExit}>x</div>
                    <h3>Login</h3>
                    <input className="initial-form" placeholder="Email..." onChange={(event) => {setLoginEmail(event.target.value)}} />
                    <hr/>
                    <input className="initial-form" placeholder="Password..." onChange={(event) => {setLoginPassword(event.target.value)}}/>
                    <hr/>
                    <button className="initial-form-btn" onClick={login}>Login</button>

                </div>
                {/* <h4>User Logged IN: {user ? user.email : "Guest"}</h4>
                <button onClick={logout}>Logout</button> */}
            </div>
            </div>
)}


export default InitalLogin;