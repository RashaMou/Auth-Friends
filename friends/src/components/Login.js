import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axiosWithAuth from './../utils/AxiosWithAuth';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
}));

const Login = () => {
  const classes = useStyles();
  const[user, setUser] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
      .post("/api/login", user)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
      })
  }

  return (
    <div>
      <h2 className='title is-3'>Login</h2>
      <form className='login' onSubmit={handleSubmit}>
        <label htmlFor='username'>
          <input 
          className='input'
          type='text'
          name='username'
          placeholder='Username'
          value={user.username}
          onChange={handleChange}
          />
        </label>
        <label htmlFor='password'>
          <input 
          className='input'
          type='password'
          name='password'
          placeholder='Password'
          value={user.password}
          onChange={handleChange}
          />
        </label>
        {/* <TextField
          label="Username"
          type="text"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          value={user.username}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          value={user.password}
          onChange={handleChange}
        /> */}
        <button className='button'>Log In</button>
      </form>
   </div>
  )
}

export default Login

