import React from 'react'
import { DiceImg } from '../../../../components'

import './dice-button.scss'

export type Props = {
    nextAdvice: () => void
}

const diceButton: React.FC<Props> = ({ nextAdvice }) => {
    return (
        <button className='dice-button' onClick={nextAdvice}>
            <DiceImg/>
        </button>
    )
}

export default diceButton