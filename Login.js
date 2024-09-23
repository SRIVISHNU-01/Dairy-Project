import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { handleLogin } = useContext(AuthContext);
    const navigate = useNavigate(); // To redirect after login

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleLogin(username, password);
            navigate('/'); // Redirect to the main page (Blog) after successful login
        } catch (error) {
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <div  className="login-container">
            <h1 class="login">Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    class="inputEl"
                />
                <br></br>
                
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    class="inputEl"
                />
                <br></br>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
