import React from "react";
import HeaderBar from "./headerbar";
import spellslist from "./spellslist.json"
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import {BrowserRouter, Routes, Route, Link, useOutletContext} from 'react-router-dom';

import InitalLogin from "./inital-login";
import SpellEntry from "./spell-entry";


function Spells(){

    const [spellType, setSpellType] = useState('');

    return <div>
        <HeaderBar/>
        <h2 className="header">Spells</h2>
        {spellslist.map((spell) => {
            return <Link to={`/${spell.id}`}  key={spell.id}> <div className='container col-12 col-md-8 spell-container'>
                <div className="col-12 spelllist-cont" id={spell.id}>
                    <div>{spell.name} <div className="selector-arrow">&#8594;</div> </div>
                </div>
            </div>
            </Link>
        })}
    </div>
}

export default Spells