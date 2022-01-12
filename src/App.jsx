import './App.scss';
import React from 'react';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <SignUp />
      <div className="navbarContainer">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
