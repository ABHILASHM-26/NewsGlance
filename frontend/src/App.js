import React, { useState } from 'react';
import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';
import SignIn from './components/Sign';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? (
        <div className='Home'>
          <Navbar />
        <div className="News-container">
          <News />
        </div>
        </div>
      ) : (
        <SignIn setUser={setUser} />
      )}
    </div>
  );
}

export default App;