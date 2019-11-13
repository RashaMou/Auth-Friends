import React from 'react';
import { Link, Route } from 'react-router-dom';

import Login from './components/Login';
import Logout from './components/Logout';
import FriendList from './components/FriendList';

function App() {
  return (
    <div className="App">
      <header className='hero is-primary'>
        <div className='hero-content'>
          <h1 className='title is-1'>Hello, Comrades</h1>
          <nav className='nav'>
            <Link to='/' className='nav-item'>Home</Link>
            <Link to='/login' className='nav-item'>Login</Link>
            <Link to='/logout' className='nav-item'>Logout</Link>
          </nav>
        </div>
      </header>
      <Route path='/login' component={Login}/>
      <FriendList /> 
    </div>
  );
}

export default App;
