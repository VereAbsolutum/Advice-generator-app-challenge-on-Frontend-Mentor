import React from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import { MakeAdviceGenerator } from '../factory/pages'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<MakeAdviceGenerator />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
