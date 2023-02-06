import React from 'react'
import { Switch, Route, BrowserRouter} from 'react-router-dom'
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
