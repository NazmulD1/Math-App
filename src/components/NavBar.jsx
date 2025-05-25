import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar({ token, onTokenChange }) {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">PEMDAS</Link>
                <div className="navbar-links">
                    <Link to="/" className="navbar-item">Home</Link>
                    {token ? (
                        <>
                            <Link to="/roadmap" className="navbar-item">RoadMap</Link>
                            <Link to="/freestudy" className="navbar-item">Free Study</Link>
                            <Link to="/progress" className="navbar-item">Progress</Link>
                            <Link to="/settings" className="navbar-item">Settings</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="navbar-item">Log In</Link>
                            <Link to="/signup" className="navbar-item">Sign Up</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;