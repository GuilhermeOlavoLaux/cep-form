import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RenderCep from './components/RenderCep'
import RenderByCep from './components/RenderByCep'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path='/a' element={<RenderCep />} />
        <Route exact path='/b' element={<RenderByCep />} />
      </Routes>
    </Router>
  )
}
