import React, { useState } from 'react';

function NotRegistered(props) {

  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function regSubmit(e) {
    e.preventDefault();

    fetch('https://shielded-ocean-70515.herokuapp.com/register', {
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
        if (user !== "Unable to register") {
          props.loadUser(user);
          props.setCanEnter(true);
        } else {
          alert('Unable to register. Try again.');
        }
      })
      .catch(err => console.error(err))
  }

  function logSubmit(e) {
    e.preventDefault();

    fetch('https://shielded-ocean-70515.herokuapp.com/signin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user !== "Wrong credentials") {
          props.loadUser(user);
          props.setCanEnter(true);
        } else {
          alert('Wrong email or password');
        }
      })
      .catch(err => console.error(err))
  }
  

  return (
    <div className="NotRegistered">
      <div className='formBox'>
        <form onSubmit={e => regSubmit(e)}>
          <h3>Register</h3><br/>
          <input placeholder="name" onChange={e => setRegName(e.target.value)} required /><br/>
          <input type='email' placeholder="email" onChange={e => setRegEmail(e.target.value)} required /><br/>
          <input type='password' placeholder="password" onChange={e => setRegPassword(e.target.value)} required /><br/>
          <button>Submit</button>
        </form>
      </div>
      <div className='formBox'>
        <form onSubmit={e => logSubmit(e)}>
          <h3>Log in</h3><br/>
          <input placeholder="email" onChange={e => setEmail(e.target.value)} required /><br/>
          <input type='password' placeholder="password" onChange={e => setPassword(e.target.value)} required /><br/>
          <button>Submit</button>
        </form>
      </div>
      <button onClick={() => props.setCanEnter(true)}>Skip Signing In</button>
    </div>
  );
}

export default NotRegistered;
