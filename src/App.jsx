import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Account from './pages/Account/Account';
import ShoppingCard from './pages/ShoppingCard';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/account" element={<Account />} />
        <Route path="/home" element={<ShoppingCard />} />
      </Routes>
      <div className="navbarContainer">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
