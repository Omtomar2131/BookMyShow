import React from 'react'
import Home from './Pages/Home'
import BsState from './Context/BsState'
import './App.css'

const App = () => {
  return (
    <div>
      <BsState>
      <Home/>
      </BsState>
    </div>
  )
}

export default App

