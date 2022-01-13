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
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Home" element={<ShoppingCard />} />
      </Routes>
      <div className="navbarContainer">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
