import React, { useEffect, useState } from 'react';
import './App.css';

import Registered from './Registered'
import NotRegistered from './NotRegistered'

function App() {

  const [canEnter, setCanEnter] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState('');
  const [profile, setProfile] = useState()

  useEffect(() => {
    setProfile(
      <div className='profile'>
        <p><b>Name:</b> {name}</p>
        <p><b>Email:</b> {email}</p>
        <p><b>Joined:</b> {joined}</p>
      </div>
    )
  }, [joined, email, name]);

  function loadUser(data) {
    setName(data.name);
    setEmail(data.email);
    const date = data.joined.slice(0, 10);
    setJoined(date);
  }
  
  return (
    <div className='App'>
      {canEnter ? <Registered profile={profile} setCanEnter={setCanEnter} /> : <NotRegistered setCanEnter={setCanEnter} loadUser={loadUser} />}
    </div>
  );
}

export default App;
