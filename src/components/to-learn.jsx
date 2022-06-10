import React from "react";
import HeaderBar from "./headerbar";
// import LearnItem from "./learnitem";
import spellslist from "./spellslist.json"
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import {BrowserRouter, Routes, Route, Link, useOutletContext} from 'react-router-dom';


function ToLearn(){

    const [setUser, toLearn, addToLearn, removeFromLearn] = useOutletContext();

    // function getIndex(spell) {
    //     return toLearn.findIndex(() => spell);
    // }

    // const concatName = (element) =>{
    //     if(element)
    //     element.concat()
    // }


    return <div>
        <HeaderBar/>
        <h2 className="header">My To-Learn List</h2>
        {/* <div>{console.log(toLearn)}</div> */}
        <div>
                    {toLearn.length === 0 ? <div className="empty">To Learn List is Empty</div> : 

                        toLearn.map(element =>{
                            return <div className="col-12 spell-learn-cont" id={element.toLowerCase()} key={element.toLowerCase()}>{element} &nbsp;
                                <Button variant="outline-primary remove-btn" className={element} onClick={removeFromLearn}>Remove From My To Learn</Button>{' '}
                             </div>
                        })
                    }
            </div>
        {/* <div>
        {learnItems.length === 0 ? <div>to-Learn list is Empty</div> : 
                    
                    <div>
                        <CartItem learnItems={learnItems} onRemove={onRemove}/>
                        <LearnItem learnItems={learnItems}/>
                    </div>
    }
            </div> */}
    </div>
}

export default ToLearn