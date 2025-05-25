import { useState } from "react";
import { supabase } from '../utils/supabaseClient';
import "../css/Settings.css"

function Settings() {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  // Update email
  const handleEmailUpdate = async (e) => {
    e.preventDefault();
    if (email !== confirmEmail) {
      setMessage("Emails do not match.");
      return;
    }

    const { error } = await supabase.auth.updateUser({ email });

    if (error) {
      setMessage(`Email update failed: ${error.message}`);
    } else {
      setMessage("Check your email to confirm the request!");
    }
  };

  // Update password
  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setMessage(`Password update failed: ${error.message}`);
    } else {
      setMessage("Password updated successfully!");
    }
  };

  return (
    <div className="settings-container">
      <h2>Account Settings</h2>

      <form onSubmit={handleEmailUpdate} className="settings-form">
        <div className="settings-email">

        <h4>Update Email</h4>
        <input
          type="email"
          placeholder="New Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="email"
          placeholder="Confirm New Email"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
        />
        <button type="submit">Update Email</button>
        </div>

      </form>

      <form onSubmit={handlePasswordUpdate} className="settings-form">
        <h4>Update Password</h4>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Update Password</button>
      </form>

      {message && <p className="settings-message">{message}</p>}
    </div>
  );
}

export default Settings;
