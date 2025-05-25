import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import "../../css/RoadMap.css"
import { supabase } from '../../utils/supabaseClient';

function NumberRecognition({token, onTokenChange}) {
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
            <h1>Number Recognition and Counting</h1>
            <div className="roadmap-list">
                <Link to="/roadmap/number-recognition-and-counting/exam">
                    <button className="roadmap-button">Number Recognition and Counting Exam</button>
                </Link>
                <Link to="/practice/number-recognition-and-counting">
                    <button className="roadmap-button">Number Recognition and Counting Practice</button>
                </Link>
            </div>
            <button onClick={handleLogout} type="button" className="btn btn-danger logout-btn">Logout</button>
        </div>
    )
}

export default NumberRecognition;