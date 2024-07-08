import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';
import '../styles/Register.scss'

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await register({ name, email, password });
      navigate('/home');
    } catch (err) {
      setError('Registration failed');
      setIsLoading(false);
    }
  };

  return (
    <div className="registerContainer">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
          <button type="submit" disabled={isLoading}>Register</button>
          {error && <span>{error}</span>}
        </form>
      </div>
    );
  };   