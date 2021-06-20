import { useState } from 'react'

import axios from 'axios'

import './SignUpForm.css'

const SignUpForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post('http://localhost:3001/api/sign_up.json', {
        username,
        email,
        password,
      })
      .then((res) => console.log(res))
  }

  return (
    <form onSubmit={handleSubmit} className="SignUpForm">
      <input
        type="text"
        name="username"
        placeholder="Username"
        onInput={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        onInput={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onInput={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default SignUpForm
