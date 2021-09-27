import React from 'react'

export default function HsNot(props) {
    return (
        <div className="NotificBar">
            <div><span id="HSNotAnalys">{props.topic}:</span> {props.news}</div>
        </div>
    )
}
