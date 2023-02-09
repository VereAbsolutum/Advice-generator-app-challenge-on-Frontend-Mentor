import React from 'react'
import { DiceImg } from '../../../../components'

import './dice-button.scss'

export type Props = {
    nextAdvice: () => void,
    isLoading: boolean
}

const diceButton: React.FC<Props> = ({ nextAdvice }) => {
    return (
        <div className='dice-button' onClick={nextAdvice}>
            <DiceImg />
        </div>
    )
}

export default diceButton