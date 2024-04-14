import React from 'react'
import closex from './svgs/closex.svg'
import './OverlayCard.css';

const OverlayCard = ({ message, toggle }) => {

    return (
        <div className="overlayCard">
            <div className="overlayContent">
                <button className="closeButton" onClick={toggle}>
                    <img src={closex} alt="close" />
                </button>
                <div className="message">
                    <div>{message}</div>
                </div>
            </div>
        </div>
    )
}

export default OverlayCard
