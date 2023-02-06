import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { MakeAdviceGenerator } from '../factory/pages'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path='/' element={<MakeAdviceGenerator />} />
    </BrowserRouter>

  )
}

export default App
