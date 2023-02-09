import React from "react";
import './divider.scss'

const divider: React.FC = () => {
    return (
        <picture>
            <source srcSet="./images/pattern-divider-mobile.svg" media="(max-width: 375px)"></source>
            <img className="divider" src="./images/pattern-divider-desktop.svg" alt="pattern divider desktop" />
        </picture>
    )
}

export default divider