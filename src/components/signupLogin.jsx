import { Link } from "react-router-dom";
import "../css/Signup_Login.css"

function Signup_Login() {
    return (
        <div className="button-container">
            <Link to="/signup">
                <button className="link-button">Sign Up</button>
            </Link>
            <Link to="/login">
                <button className="link-button">Log In</button>
            </Link>
        </div>    
    );
}

export default Signup_Login; 