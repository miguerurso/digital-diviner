import React from "react";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import {BrowserRouter, Routes, Route, useNavigate, useNavigation} from 'react-router-dom';

import InitalLogin from "./inital-login";

function HeaderBar(props){


const userIconMenuFunc = () => {
    let userIconMenu = document.getElementById('user-icon-menu');
    if(!userIconMenu.classList.contains('user-icon-menu-visible')){
        userIconMenu.classList.add('user-icon-menu-visible')
    }else if(userIconMenu.classList.contains('user-icon-menu-visible')){
        userIconMenu.classList.remove('user-icon-menu-visible')
    }
};

const navigate = useNavigate();

const logout = async () => {

    await signOut(auth);
    navigate('/');
};

if (props.user) {

    let displayUserName = () =>{
        if (props.user.email) {
            return <div className="user">{props.user.email}</div>
        } else {
             return <div className="user">{'Guest'}</div>
        }
    }

    let firstLetterVar = () => {

        if (props.user.email) {
            return props.user.email.slice(0, 1);
        } else {
             return 'G'
        }
    }

    let logoutBtn = () =>{
       if(props.user.email){
           return <Button variant="outline-primary user-icon-menu-btn" onClick={logout}>Logout</Button>
       } else {
           return '';
       }
    }
    
return <div>
    <div className="col-12 d-flex justify-content-between nav">
        <div className="nav-logo"  onClick={() => {navigate('/dashboard')}}>
            <img src="https://lh3.googleusercontent.com/xXtI4rdrXnqqNMqdUTsQO3oBpnhDwPIWgB14cIN9EhjJYS394Gl5SSA2K-fJOvSDmT1No_-F_TVkhOwNBNzDoqK9Ls_cgxTh3ik3P7D_iT4YlFXp01qhsYe3XO88YmmiLuzkjgXK1Bw=w2400" className="img-fluid app-icon" alt="Digital Diviner Logo"/>
        </div>
        {/* <div className="navigation col-6 d-flex justify-content-between">
            <div className="nav-dashboard" onClick={() => {navigate('/dashboard')}}>Dashboard</div>
            <div className="nav-spells" onClick={() => {navigate('/spells')}}>Spells</div>
            <div className="nav-to-learn" onClick={() => {navigate('/to-learn')}} >My To-Learn</div>
        </div> */}
        <div className="user-icon" onClick={userIconMenuFunc}>{firstLetterVar()}</div>
    </div>
    
    <div className="col-6 col-md-2" id="user-icon-menu">
        <div className="user-icon-menu-contents">
            <span>{displayUserName()}</span>
            <hr/>
            <Button variant="outline-primary" className="user-icon-menu-btn" onClick={() => {navigate('/dashboard')}} >Dashboard</Button>
            <hr/>
            <Button variant="outline-primary" className="user-icon-menu-btn" onClick={() => {navigate('/spells')}} >Spells</Button>
            <hr/>
            <Button variant="outline-primary" className="user-icon-menu-btn" onClick={() => {navigate('/potions')}} >Potions</Button>
            <hr/>
            <Button variant="outline-primary" className="user-icon-menu-btn" onClick={() => {navigate('/to-learn')}} >To-Learn List</Button>
            <hr/>
            {logoutBtn()}
        </div>

    </div>
</div>
}

}

export default HeaderBar