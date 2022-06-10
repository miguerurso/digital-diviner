import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBar from "./headerbar";

function Dashboard() {

    let navigate = useNavigate();

    const [width, setWindowWidth] = useState(0)
    useEffect(() => {

        updateDimensions();

        window.addEventListener('resize', updateDimensions);
        return () =>
            window.removeEventListener('resize', updateDimensions);
    }, [])
    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)

        const dashboardCont = document.getElementById('dashboard-selection-cont');

        if (window.matchMedia('screen and (max-width: 768px)').matches) {
            dashboardCont.classList.remove('d-flex')
            dashboardCont.classList.remove('justify-content-center');
        } else{
            dashboardCont.classList.add('d-flex')
            dashboardCont.classList.add('justify-content-center');
        }
    }

    return <div>
        <HeaderBar />
        <h2 className="header">Dashboard</h2>
        <div className="container col-12 d-flex justify-content-center" id="dashboard-selection-cont">
            <div className="col-12 col-md-4 dashboard-box" id="spells" onClick={() => { navigate('/spells') }}><div className="dashboard-content">Spells</div></div>
            <div className="col-12 col-md-4 dashboard-box" id="potions" onClick={() => { navigate('/potions') }}><div className="dashboard-content">Potions</div></div>
            <div className="col-12 col-md-4 dashboard-box" id="to-do" onClick={() => { navigate('/to-learn') }}><div className="dashboard-content">My To-Learn List</div></div>

        </div>

    </div>
}

export default Dashboard