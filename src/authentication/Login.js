import React, { useState } from 'react';
import styles from './Login.module.css'; 

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'cashier' && password === 'dls') {
      onLogin();
    } else {
      alert('Incorrect username or password'); 
    }
  };

  return (
    <div style={{ backgroundColor: '#321A62' }}>
      <div className={styles['school-year']}>
        <div>
          <span className={styles['sch-year']}>School Year:</span>
        </div>
        <div>
          <select className={styles['years']} name="years">
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
          </select>
        </div>
      </div>
      <div className={styles['login-container']}>
        <div className={styles['h1-log']}>
          <h1 className='login-h1'>Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles['input-container']}>
            <label className={styles['log-label']} style={{ marginTop: '10px' }}>Username:</label>
            <input
              type="text" placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <br />
          <div className={styles['input-container']}>
            <label className={styles['log-label']}>Password:</label>
            <input
              type="password" placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className={styles['log-button']} type="submit">SIGN IN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
