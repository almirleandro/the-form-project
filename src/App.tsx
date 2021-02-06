import React, { useEffect, useState } from 'react';
import './App.css';

import Registered from './Registered';
import NotRegistered from './NotRegistered';

interface User {
  name: string,
  email: string,
  joined: string
}

function App() {

  const [canEnter, setCanEnter] = useState<boolean>(false);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [joined, setJoined] = useState<string>('');
  const [profile, setProfile] = useState<JSX.Element>();

  useEffect(() => {
    setProfile(
      <div className='profile'>
        <p><b>Name:</b> {name}</p>
        <p><b>Email:</b> {email}</p>
        <p><b>Joined:</b> {joined}</p>
      </div>
    )
  }, [joined, email, name]);

  function loadUser(data: User): void {
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
