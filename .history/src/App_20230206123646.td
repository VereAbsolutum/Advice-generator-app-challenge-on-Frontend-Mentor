import React from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import { default as Teste } from './test'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Teste />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App