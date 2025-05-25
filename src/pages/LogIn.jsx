import "../css/Login.css"
import "./RoadMap"
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from '../utils/supabaseClient';

function LogIn ({ setToken }) {

  let navigate = useNavigate();

  // State to hold form data
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Handle form field changes
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      };
    });
  }

  // Handle form submission and sign up process
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // Sign up with Supabase Auth API
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      });

      // Handle any errors
      if (error) throw error 
        console.log(data);
        setToken(data)
        navigate('/roadmap')
      
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="main-login">
      <div className="form-container">

    <h3>Log In</h3>
  
    <form onSubmit={handleSubmit} className="login-form">
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="username"
      />
  
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="password"
      />
  
    <button type="submit" className="btn btn-success">Log In</button>
  </form>
  
    <div className="signup-redirect">
      Don't have an account?
      <Link to="/signup"> Sign Up</Link>
    </div>
  </div>
  </div>

  );

}

export default LogIn;