import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/RoadMap.css"
import { supabase } from '../utils/supabaseClient';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function RoadMap({ token, onTokenChange }) {
    const [disabledMap, setDisabledMap] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false
    })

    let navigate = useNavigate()

    useEffect(() => {
        setDisabled()
    })

    async function setDisabled() {
        const { data: userData, error: userError} = await supabase.auth.getUser()
        const { data , error } = await supabase
        .from('USER_PROGRESS')
        .select('current_unit_id')
        .eq('user_id', userData.user.id)

        const newMap = {}
        Object.entries(disabledMap).forEach(([id, value]) => {
            newMap[id] = id > data[0].current_unit_id ? true : false
        })
        setDisabledMap(newMap)
    }

    async function handleLogout() {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;

            sessionStorage.removeItem('token');
            onTokenChange(null);
            await new Promise(resolve => setTimeout(resolve, 100));
            navigate('/', { replace: true });
        } catch (error) {
            console.error('Error signing out:', error.message);
            alert('Error signing out. Please try again.');
        }
    }

    if (!token || !token.user) {
        return (
            <div className="roadmap-container">
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div className="roadmap-container">
            <h1>RoadMap</h1>
            <h3>Welcome back, {token.user.user_metadata.first_name} {token.user.user_metadata.last_name}!</h3>
            <div className="roadmap-list">
                <Link to="/roadmap/number-recognition-and-counting">
                    <button className="roadmap-button" disabled={disabledMap[1]}>Number Recognition and Counting</button>
                </Link>
                <Link to="/roadmap/basic-addition">
                    <button className="roadmap-button" disabled={disabledMap[2]}>Basic Addition</button>
                </Link>
                <Link to="/roadmap/long-addition">
                    <button className="roadmap-button" disabled={disabledMap[3]}>Long Addition</button>
                </Link>
                <Link to="/roadmap/basic-subtraction">
                    <button className="roadmap-button" disabled={disabledMap[4]}>Basic Subtraction</button>
                </Link>
                <Link to="/roadmap/long-subtraction">
                    <button className="roadmap-button" disabled={disabledMap[5]}>Long Subtraction</button>
                </Link>
                <Link to="/roadmap/basic-multiplication">
                    <button className="roadmap-button" disabled={disabledMap[6]}>Basic Multiplication</button>
                </Link>
                <Link to="/roadmap/long-multiplication">
                    <button className="roadmap-button" disabled={disabledMap[7]}>Long Multiplication</button>
                </Link>
                <Link to="/roadmap/basic-division">
                    <button className="roadmap-button" disabled={disabledMap[8]}>Basic Division</button>
                </Link>
                <Link to="/roadmap/division-with-remainders">
                    <button className="roadmap-button" disabled={disabledMap[9]}>Division With Remainders</button>
                </Link>
                <Link to="/roadmap/long-division">
                    <button className="roadmap-button" disabled={disabledMap[10]}>Long Division</button>
                </Link>
                <Link to="/roadmap/fractions">
                    <button className="roadmap-button" disabled={disabledMap[11]}>Fractions</button>
                </Link>
                <Link to="/roadmap/decimals">
                    <button className="roadmap-button" disabled={disabledMap[12]}>Decimals</button>
                </Link>
            </div>
            <button onClick={handleLogout} type="button" className="btn btn-danger logout-btn">Logout</button>
        </div>
    )
}

export default RoadMap;