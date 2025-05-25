import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import "../css/RoadMap.css"
import { supabase } from '../utils/supabaseClient';

function FreeStudy({ token, onTokenChange }) {
    let navigate = useNavigate()

    async function handleLogout() {
        try {
            // First sign out from Supabase
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
            
            // Then clear local storage
            sessionStorage.removeItem('token');
            
            // Update the app state
            onTokenChange(null);
            
            // Force a state update
            await new Promise(resolve => setTimeout(resolve, 100));
            
            // Navigate to home
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
            <h1>Free Study</h1>
            <h3>Welcome back, {token.user.user_metadata.first_name} {token.user.user_metadata.last_name}!</h3>
            
            <div className="roadmap-list">
                <Link to="/practice/number-recognition-and-counting">
                    <button className="roadmap-button">Number Recognition and Counting</button>
                </Link>
                <Link to="/practice/basic-addition">
                    <button className="roadmap-button">Basic Addition</button>
                </Link>
                <Link to="/practice/long-addition">
                    <button className="roadmap-button">Long Addition</button>
                </Link>
                <Link to="/practice/basic-subtraction">
                    <button className="roadmap-button">Basic Subtraction</button>
                </Link>
                <Link to="/practice/long-subtraction">
                    <button className="roadmap-button">Long Subtraction</button>
                </Link>
                <Link to="/practice/basic-multiplication">
                    <button className="roadmap-button">Basic Multiplication</button>
                </Link>
                <Link to="/practice/long-multiplication">
                    <button className="roadmap-button">Long Multiplication</button>
                </Link>
                <Link to="/practice/basic-division">
                    <button className="roadmap-button">Basic Division</button>
                </Link>
                <Link to="/practice/division-with-remainders">
                    <button className="roadmap-button">Division With Remainders</button>
                </Link>
                <Link to="/practice/long-division">
                    <button className="roadmap-button">Long Division</button>
                </Link>
                <Link to="/practice/fractions">
                    <button className="roadmap-button">Fractions</button>
                </Link>
                <Link to="/practice/decimals">
                    <button className="roadmap-button">Decimals</button>
                </Link>
            </div>
            <button onClick={handleLogout} type="button" className="btn btn-danger logout-btn">Logout</button>
        </div>
    )
}

export default FreeStudy;

