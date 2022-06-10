import React from "react";
import HeaderBar from "./headerbar";
import spellslist from "./spellslist.json"
import Spells from './spells';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import { BrowserRouter, Routes, Route, useOutletContext, useNavigate, location } from 'react-router-dom';

import InitalLogin from "./inital-login";


function SpellEntry() {

    const navigate = useNavigate();

    const [setUser, toLearn, addToLearn, removeFromLearn] = useOutletContext();

    const [thisSpell, setThisSpell] = useState({});
    let pathname = window.location.pathname.slice(1);

    console.log(pathname)

    useEffect(() => {
        fetch(`./spellslist.json`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                // let resultIds = data.map(spellslist => spellslist.id);
                // console.log(resultIds);

                // let match = resultIds.find(element => {
                //     if (element.includes(pathname)) {
                //         return element;
                //     }
                // });

                // console.log(match)
                
                // function getIndex(match) {
                //     return resultIds.findIndex(() => match);
                // }
                
                // console.log(data[getIndex(pathname)])
                
                // let finalData = data[getIndex(pathname)];
                // console.log(finalData)
                
                // // setThisSpell(finalData);
                
                const renderSpell = spellslist.filter((spell)=>{
                    return spell.id === pathname
                })
                setThisSpell(renderSpell[0]);
            }
            );
    }, [pathname]);


    return <div>
        <HeaderBar />
        <Button variant="outline-primary" className="back-to-spellist" onClick={() => {navigate('/spells')}} >&#8592; Spell List</Button>
        <div className="spell-image col-12 ">
                <div className="spell-outer"><img src="https://lh3.googleusercontent.com/TYKtrJ64BX0v9u_NizpdG-Ejo9ZTIut5R1MClwvFlOko1J_8T95q6AhfDDXKXmbvwVQUJBhz0jMcHRpraW5C0d08Sr40HuES7Vd_jnRR8oirMc6Akyvbu24BzGx3HLnbv3eP72BQrZk=s279-p-k" alt="spell circle"/></div>
                <div className="spell-middle"><img src="https://lh3.googleusercontent.com/lP-Pc5f9n4C-nz3_DoPUlgogimCWCVBLYhXle-9uzALW0npuXmkvoPGiKZ4ow9KnZfNtzj4X2CGte2HM_ORrwHj06UDk_lv35Y6STZVyqQLYBJ3sg0fO-FHZ_yIiZ5kundo8qADyjCI=s279-p-k" alt="spell circle"/></div>
                <div className="spell-inner"><img src="https://lh3.googleusercontent.com/BT6mFrFVp3k7CRrJX3Of6xPap1oSI6b_mdpRj_lMvBGl_stcpTdkk289FoLpn2N6h63Fz8yIL8By9JVBnOcd3UPLdUetYybUNbkYPkm7WJFDW1fGg43p9tJOBiJkmKcEf73ggkOtFuQ=s279-p-k" alt="spell circle"/></div>
            </div>
        <div className="spell-entry-container col-12 col-md-6">
            <h1 className="entry-header col-12">{thisSpell.name}</h1>
            <hr/>
            <div className="spell-info-container">
                <div className="spell-description">{`A ${thisSpell.type} that ${thisSpell.effect}`}</div>
                {/* <div className="col-12 col-md-6">{`Spell Effect: ${thisSpell.effect}`}</div> */}
                <Button variant="outline-primary" className="to-learn-btn" onClick={() => { addToLearn(thisSpell.name) }} >Add To-Learn</Button>
            </div>
        </div>

    </div>
}

export default SpellEntry