import React from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import { MakeAdviceGenerator } from '../factory/pages'
import { default as Teste } from '

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