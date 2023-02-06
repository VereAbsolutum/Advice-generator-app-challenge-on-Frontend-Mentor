import React from "react"
import { AdviceGenerator } from "../../../presentation/pages"
import { makeRemoteGetAdvice } from "../usecase"

const makeAdviceGenerator: React.FC = () => {
    return(
        <AdviceGenerator getAdvice={makeRemoteGetAdvice()} />
    )
}

export default makeAdviceGenerator