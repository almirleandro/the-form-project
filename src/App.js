import React, { useEffect, useState } from 'react';
import './App.css';

import Registered from './Registered'
import NotRegistered from './NotRegistered'

function App() {

  const [canEnter, setCanEnter] = useState(false);

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState('');
  const [profile, setProfile] = useState()

  useEffect(() => {
    setProfile(
      <div className='profile'>
        <p><b>Name:</b> {name}</p>
        <p><b>Email:</b> {email}</p>
        <p><b>Joined:</b> {joined.slice(0, 10)}</p>
      </div>
    )
  }, [email]);

  function loadUser(data) {
    setId(data.id);
    setName(data.name);
    setEmail(data.email);
    setJoined(data.joined);
  }
  
  return (
    <div className='App'>
      {canEnter ? <Registered profile={profile} setCanEnter={setCanEnter} /> : <NotRegistered setCanEnter={setCanEnter} loadUser={loadUser} />}
    </div>
  );
}

export default App;
