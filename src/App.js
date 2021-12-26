import React from 'react'
import Home from './components/Home/Home'
import About from './components/About./About'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Routes>
    </div>
  )
}

export default App
