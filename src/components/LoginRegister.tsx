import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import './LoginRegister.css';

interface LoginRegisterProps {
  onLogin: () => void;
}

const LoginRegister: React.FC<LoginRegisterProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    // Add other fields as necessary
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const url = isLogin ? '/api/login' : '/api/register';
    try {
      const response = await axios.post(url, formData);
      console.log(response.data);
      onLogin(); // Call onLogin when login/register is successful
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div className="login-register">
      <h2>{isLogin ? 'Sign in' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {/* Add other input fields as necessary */}
        <button type="submit">{isLogin ? 'Sign In' : 'Sign Up'}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Don\'t have an account? Sign Up.' : 'Have an account? Sign in.'}
      </button>
    </div>
  );
};

export default LoginRegister;