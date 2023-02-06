import React from 'react'
import { Routes, Route, HashRouter} from 'react-router-dom'
import { MakeAdviceGenerator } from '../factory/pages'

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
          <Route path='/' element={<MakeAdviceGenerator />} />
      </Routes>
    </HashRouter>
  )
}

export default App
