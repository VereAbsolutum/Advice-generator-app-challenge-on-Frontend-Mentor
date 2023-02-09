import React from 'react'
import { DiceImg } from '../../../../components'

import './dice-button.scss'

export type Props = {
    nextAdvice: () => void,
    isLoading: boolean
}

const diceButton: React.FC<Props> = ({ nextAdvice, isLoading }) => {
    return (
        <span className={`dice-button isloading-${isLoading}`} onClick={nextAdvice}>
            <DiceImg />
        </span>
    )
}

export default diceButton