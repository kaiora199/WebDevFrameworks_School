import React from 'react'


export default function HsSidePart(props) {
    return (
        <div className="sideCont">
            <span id="sideNum">{props.sNum}</span> <span id="sideTopic">{props.sTopic}</span> <span id="sideNews">{props.sNews}</span>
        </div>
        
    )
}