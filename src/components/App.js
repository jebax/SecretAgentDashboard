import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'

const App = () => {
  return (
    <Router>
      <Header />
    </Router>
  )
}

export default App
