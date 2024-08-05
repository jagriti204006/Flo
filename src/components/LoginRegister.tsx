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
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const url = isLogin ? 'http://localhost:6969/api/login' : 'http://localhost:6969/api/register';
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
      <h2>{isLogin ? 'Sign In' : 'Sign Up'}</h2>
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
        <button type="submit">{isLogin ? 'Sign In' : 'Sign Up'}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Don\'t have an account? Sign Up.' : 'Have an account? Sign In.'}
      </button>
    </div>
  );
};

export default LoginRegister;
