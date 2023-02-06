import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MakeAdviceGenerator } from '../factory/pages'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MakeAdviceGenerator />} />
    </Routes>

  )
}

export default App
