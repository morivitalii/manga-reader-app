import { useState, useEffect } from 'react'

import SignUpFrom from './components/SignUpForm/SignUpForm'
import SignInForm from './components/SignInForm/SignInForm'
import UserInfo from './components/UserInfo/UserInfo'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <SignUpFrom />

      <hr />

      <SignInForm />

      <hr />

      <UserInfo />
    </div>
  )
}

export default App
