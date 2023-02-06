import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MakeAdviceGenerator } from '../factory/pages'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<MakeAdviceGenerator />} />
      </Switch>
    </BrowserRouter>

  )
}

export default App
