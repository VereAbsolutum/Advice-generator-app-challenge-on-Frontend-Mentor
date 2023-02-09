import React from 'react'
import { DiceImg } from '../../../../components'

import './dice-button.scss'

export type Props = {
    nextAdvice: () => void,
    isLoading: boolean
}

const diceButton: React.FC<Props> = ({ nextAdvice, isLoading }) => {
    return (
        <button className='dice-button' disabled={isLoading} onClick={nextAdvice}>
            ""
            <DiceImg />
        </button>
    )
}

export default diceButton