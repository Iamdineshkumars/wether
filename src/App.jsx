import { useState } from 'react'

import './App.css'
import {ThemeContext} from './context/ThemeContext'
import Header from './components/Header'
import InputField from './components/InputField'
import Dashboard from './components/Dashboard'

function App() {


  return (
    <>
      <ThemeContext/>
      <Header/>
      <InputField/>
      <Dashboard/>
    </>
  )
}

export default App
