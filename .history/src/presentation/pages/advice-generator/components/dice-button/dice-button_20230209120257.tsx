import React from 'react'
import { DiceImg } from '../../../../components'

import './dice-button.scss'

export type Props = {
    nextAdvice: () => void,
    isLoading: boolean
}

const diceButton: React.FC<Props> = ({ nextAdvice }) => {
    return (
        <span className='dice-button' onClick={nextAdvice}>
            <DiceImg />
        </span>
    )
}

export default diceButton