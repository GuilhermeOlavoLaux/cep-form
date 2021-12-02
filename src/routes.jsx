import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Adress from './components/Adress'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Adress />} />
      </Routes>
    </Router>
  )
}
