import React, { useState } from 'react';

function NotRegistered(props) {

  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function regSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:3002/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: regEmail,
        password: regPassword,
        name: regName
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user) {
          props.loadUser(user);
          props.setCanEnter(true);
        } else {
          alert('Try again');
        }
      })
  }

  function logSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:3002/signin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user) {
          props.loadUser(user);
          props.setCanEnter(true);
        } else {
          alert('Wrong email or password');
        }
      })
  }
  

  return (
    <div className="NotRegistered">
      <div className='formBox'>
        <form onSubmit={e => regSubmit(e)}>
          <h3>Register</h3><br/><input placeholder="name" onChange={e => setRegName(e.target.value)} /><br/>
          <input placeholder="email" onChange={e => setRegEmail(e.target.value)} /><br/>
          <input type='password' placeholder="password" onChange={e => setRegPassword(e.target.value)} /><br/>
          <button>Submit</button>
        </form>
      </div>
      <div className='formBox'>
        <form onSubmit={e => logSubmit(e)}>
          <h3>Log in</h3><br/>
          <input placeholder="email" onChange={e => setEmail(e.target.value)} /><br/>
          <input type='password' placeholder="password" onChange={e => setPassword(e.target.value)} /><br/>
          <button>Submit</button>
        </form>
      </div>
      <button onClick={() => props.setCanEnter(true)}>magic</button>
    </div>
  );
}

export default NotRegistered;
