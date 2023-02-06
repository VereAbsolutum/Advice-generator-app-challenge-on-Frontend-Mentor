import React from "react";
import './divider.scss'

const divider: React.FC = () => {
    return(
        <>
            <source srcSet="./images/pattern-divider-mobile.svg" media="(max-width: 375px)"></source>
            <img className="divider" src="./images/pattern-divider-desktop.svg" />
        </> 
    )
}

export default divider