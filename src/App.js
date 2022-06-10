import InitalLogin from './components/inital-login';
import Dashboard from './components/dashboard';
import Spells from './components/spells';
import HeaderBar from './components/headerbar';
import './App.css';
import { Routes, Route, Outlet} from "react-router-dom";
import {useState, useRef} from 'react';

function App() {
   const [user, setUser] = useState({});
   const [toLearn, setToLearn] = useState([]);

    const addToLearn = (spell) => {

        if (!toLearn.includes(spell)) {
            window.alert(`Added ${spell} to learn`)
            setToLearn((prevState) => [...prevState, spell]);
        } else {
            window.alert(`${spell} is already added to learn`);
        }
    }
    

   const removeFromLearn = (e) =>{
    console.log(e.target);
    let btnClass = e.target.classList[0];
    let btnClass2 = e.target.classList[1];

    let secondName = () =>{
        if(btnClass2 !== 'btn'){
            return true
        }
    }

    let secondNameConcat = () =>{
        return `${btnClass} ${btnClass2}`
    }
    if(toLearn.includes(btnClass)){
        setToLearn(toLearn.filter(e => e !== btnClass));
        window.alert(`${btnClass} will be removed from to learn`);
    } else if(secondName){
        console.log(secondName())
        setToLearn(toLearn.filter(e => e !== secondNameConcat()));
        window.alert(`${secondNameConcat()} will be removed from to learn`);
    }

    //    if (toLearn.includes(spell)) {
    //        delete spell[]
    // } else {
    //     window.alert(`${spell} is already added to learn`);
    // }
}

    return <div> <HeaderBar user={user}/> <Outlet context={[setUser, toLearn, addToLearn, removeFromLearn]}/></div>
}

export default App;
