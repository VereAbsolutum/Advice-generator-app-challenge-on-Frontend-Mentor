import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Advice } from '../../../api/domain/model'
import { GetAdvice } from '../../../api/domain/usecase'
import { Divider } from '../../components'

import './advice-generator.scss'
import { DiceButton } from './components'

export type Props = {
    getAdvice: GetAdvice
}

const AdviceGenerator: React.FC<Props> = ({ getAdvice }) => {
    const [ advice, setAdvice ] = useState<Advice>()
    const [ isLoading, setIsLoading ] = useState(false)
    useEffect(() => {
        getAdvice.loadAll()
        .then((newAdivce) => setAdvice(newAdivce))
        .catch((err) => console.log(err))
    }, [])

    const getNewAdvice = async () => {
      try {
        if(isLoading){
          return
        }
        setIsLoading(true)
        const newAdvice = await getAdvice.loadAll()
        setAdvice(newAdvice)
        console.log('click')
        setTimeout(() => {
          setIsLoading(false)
        }, 2000) 
      } catch (error) {
        setIsLoading(false)
        console.error(error)
      }
        
    }
    return(
        <div className={'advice-container'}>
          <div className={'advice-card'}>
            <header className={'advice-header'}>
              <p>advice #{advice && `${advice.id}`}</p>
            </header>
            <section className={'advice-section'}>
              <p>{advice && `"${advice.message}"` }</p>
              <Divider/>
            </section>
            <DiceButton nextAdvice={getNewAdvice} isLoading={isLoading} />
          </div> 
        </div >
    )
}

export default AdviceGenerator