import React, { useEffect, useState } from 'react'
import { RemoteGetAdvice } from '../../api/data/usecase/remote-get-advice'
import { AxiosHttpClient } from '../../api/infra/http/axios-http-client'

import { Container } from 'react-bootstrap'

import './app.scss'
  
const App: React.FC = () => {
  const [ advice, setAdvice ] = useState<any>();
  useEffect(()=>{
    const url = 'https://api.adviceslip.com/advice'
    const axiosClient = new AxiosHttpClient()
    const getAdvice = new RemoteGetAdvice(axiosClient, url)
    getAdvice.loadAll()
    .then(res => {console.log(res); setAdvice(res)})
    .catch(err => console.error(err))
  }, [])

  const getNewAdvice = (e: any) => {
    
  }

  return (
    <div className="App" style={{height: '100vh', padding:"4rem" }}>
      <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height:'100%', backgroundColor: 'hsl(218, 23%, 16%)'}}>
        <div style={{maxWidth: '250px', minWidth: '250px', textAlign: 'center', padding: '1rem', backgroundColor: 'hsl(217, 19%, 24%)', borderRadius:'10px'}}>
          <header>
            <p>advice #17</p>
          </header>
          <section style={{margin: '0 0 1rem 0', borderBottom: '1px solid hsl(217, 19%, 38%)'}}>
            <p>{advice && `"${advice.message}"` }</p>
            <i style={{ position:'absolute', translate: '-50% -50%', background:'hsl(217, 19%, 24%)' ,fontWeight:'999', color:'white', letterSpacing: '0.5px', fontSize:'0.5rem', padding: '0.4rem 0.6rem', borderRadius:'50%', textAlign:'center'}}>||</i>
          </section>
          <i
            className={'icon'} onClick={getNewAdvice}>
            <svg style={{ scale: '0.5' }} width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
          </i>
        </div>
      </Container>
    </div>
  )
}

export default App
