import React from 'react'
import nimikuva from './nimikuva.jpg'

export default function HsMain() {
    return (
        <div className="mainNews">
            <h1>Koronavirus</h1>
            <img src={nimikuva}></img>
            <h4>• HS seuraa</h4>
            <h3>Päivittyvä seuranta</h3>
            <div className="clickBait">STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan</div>
        </div>
    )
}
