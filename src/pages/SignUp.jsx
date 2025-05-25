import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { supabase } from '../utils/supabaseClient';
import "../css/Signup_Login.css"

function SignUp() {
  const navigate = useNavigate();

  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  // Redirect user to login page
  const handleLoginRedirect = () => {
    navigate('/login');
  };

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
      // Attempt to sign up with Supabase Auth API
      const { user, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName
          }
        }
      });

      // Handle any errors
      if (error) {
        console.error("Error during sign-up:", error.message);
        alert("Error during sign-up: " + error.message);
      } else {
        console.log("User created successfully:", user);
        alert('Check your email for the verification link');
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error("Unexpected error:", error);
      alert("Unexpected error: " + error.message);
    }
  }

  return (
    <div className="addUser">
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit} className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="firstName"></label>
          <input
            type="text"
            id="firstName"
            name="firstName" 
            autoComplete="off"
            placeholder="First Name"
            value={formData.firstName} 
            onChange={handleChange}
          />

          <label htmlFor="lastName"></label>
          <input
            type="text"
            id="lastName"
            name="lastName" 
            autoComplete="off"
            placeholder="Last Name"
            value={formData.lastName} 
            onChange={handleChange}
          />

          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email" 
            autoComplete="off"
            placeholder="Email"
            value={formData.email} 
            onChange={handleChange}
          />

          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password" 
            autoComplete="off"
            placeholder="Password"
            value={formData.password} 
            onChange={handleChange}
          />

          <button type="submit" className="btn btn-success">Sign Up</button>
        </div>
      </form>

      <div className="signup">
        Already have an account?
        <Link to='/login'> Login</Link> 
      </div>
    </div>
  );
}

export default SignUp;
