import { useState } from 'react'

import axios from 'axios'

import './SignInForm.css'

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  withCredentials: true,
}

const SignInForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post(
        'http://localhost:3001/api/sign_in.json',
        'username=user666&password=user666',
        config
      )
      .then((res) => console.log(res))
  }

  return (
    <form onSubmit={handleSubmit} className="SignInForm">
      <input
        type="text"
        name="username"
        placeholder="Username"
        onInput={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onInput={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign In</button>
    </form>
  )
}

export default SignInForm
