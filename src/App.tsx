import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import './index.css';

import Layout from './components/Layout';
import Calendar from './components/Calendar';
import ErrorPage from './pages/error-page';
import NotFound from './pages/404';
import Introduction from './components/Introduction';
import ReproductiveHealth from './components/ReproductiveHealth';
import Information from './components/Information';
import Profile from './components/Profile';
import FlashScreen from './components/FlashScreen';
import Quiz from './components/Quiz';
import LoginRegister from './components/LoginRegister';

interface User {
  fullName: string;
  username: string;
  profilePicture: string;
}

export default function App() {
  const [showFlashScreen, setShowFlashScreen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token from localStorage:', token);

    if (token) {
      fetchUserData(token);
    } else {
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  }, []);

  const fetchUserData = async (token: string) => {
    console.log('Fetching user data...');
    try {
      const response = await fetch('http://localhost:6969/api/user', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log('User data fetched:', data);
        setUser(data.user);
        setIsAuthenticated(true);
      } else {
        console.log('Failed to fetch user data');
        handleLogout();
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      handleLogout();
    }
    setIsLoading(false);
  };

  const handleLogin = (token: string, user: User) => {
    console.log('Logging in...');
    setIsAuthenticated(true);
    setUser(user);
    localStorage.setItem('token', token);
    // Remove this line to prevent showing flash screen on every login
    // setShowFlashScreen(true);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('token');
  };

  const handleFlashEnd = () => {
    console.log('Flash screen ended');
    setShowFlashScreen(false);
  };

  if (showFlashScreen) {
    return <FlashScreen onFlashEnd={handleFlashEnd} />;
  }

  // if (!isAuthenticated) {
  //   return (
  //     <PrimeReactProvider>
  //     <Layout user={user} onLogout={handleLogout}>
  //       <Routes>
  //         <Route path="/" element={<LoginRegister />} />
  //         <Route path="/calendar" element={<Calendar />} />
  //         <Route path="/reproductive-health" element={<ReproductiveHealth />} />
  //         <Route path="/information/*" element={<Information userId={user?.username || ''} />} />
  //         <Route path="/profile" element={<Profile user={user} />} />
  //         <Route path="/quiz" element={<Quiz userId={user?.username || ''} />} />
  //         <Route path="/error" element={<ErrorPage />} />
  //         <Route path="*" element={<NotFound />} />
  //       </Routes>
  //     </Layout>
  //   </PrimeReactProvider>
  //   )
    
  // }
  
  return (
    <PrimeReactProvider>
      <Layout user={user} onLogout={handleLogout}>
        <Routes>
          <Route path="/" element={isAuthenticated ?<Introduction /> : <LoginRegister onLogin={handleLogin}/>} />
          <Route path="/Introduction" element={<Introduction />} /> 
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/reproductive-health" element={<ReproductiveHealth />} />
          <Route path="/information/*" element={<Information userId={user?.username || ''} />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/quiz" element={<Quiz userId={user?.username || ''} />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </PrimeReactProvider>
  );
}


/*
import { Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import Calendar from './components/Calendar';
import ErrorPage from './pages/error-page';
import React, { useState, useEffect } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import NotFound from './pages/404';
import Introduction from './components/Introduction';
import ReproductiveHealth from './components/ReproductiveHealth';
import Information from './components/Information';
import Profile from './components/Profile';
import FlashScreen from './components/FlashScreen';
import Quiz from './components/Quiz';
import LoginRegister from './components/LoginRegister';

export default function App() {
  const [showFlashScreen, setShowFlashScreen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ fullName: string; username: string; profilePicture: string } | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      // Fetch user data from the server
      fetchUserData(token);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const fetchUserData = async (token: string) => {
    try {
      const response = await fetch('/api/login', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleLogin = (token: string, user: { fullName: string; username: string; profilePicture: string }) => {
    setIsAuthenticated(true);
    setUser(user);
    localStorage.setItem('token', token);
    setShowFlashScreen(true);
  };

  const handleFlashEnd = () => {
    setShowFlashScreen(false);
  };

  if (showFlashScreen) {
    return <FlashScreen onFlashEnd={handleFlashEnd} />;
  }

  if (!isAuthenticated) {
    return <LoginRegister onLogin={handleLogin} />;
  }

  return (
    <PrimeReactProvider>
      <Routes>
        <Route path="/" element={<Layout user={user} />} errorElement={<ErrorPage />}>
          <Route index element={<Introduction />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="reproductive-health" element={<ReproductiveHealth />} />
          <Route path="information/*" element={<Information userId={user?.username || ''} />} />
          <Route path="profile" element={<Profile user={user} />} />
          <Route path="quiz" element={<Quiz userId={user?.username || ''} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </PrimeReactProvider>
  );
}
*/