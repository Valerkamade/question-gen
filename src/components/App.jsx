import React from 'react'
import Header from './Header/Header'
import NavBar from './NavBar/NavBar'
import './App.css'

const App = () => {
  return (
    <div className='main-app'>
      <NavBar />
      <Header />
      <div className='content'></div>
    </div>
  )
}

export default App