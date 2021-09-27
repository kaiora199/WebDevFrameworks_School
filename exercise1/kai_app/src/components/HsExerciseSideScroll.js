import React from 'react'
import HsSidePart from './HsExSide'


export default function HsSide(props) {
    return (
        <div className="sideBarNews">
            <h2>Luetuimmat</h2>
            <HsSidePart sNum="1"sTopic="Rikosepäilyt |"sNews="EIT-huijaus: Kuolleeksi väitetyn jne."/>
            <HsSidePart sNum="2"sTopic="HS Vantaa |"sNews="Vantaalle nousi talo"/>
            <HsSidePart sNum="3"sTopic="Seuranta |"sNews="EIT-huijaus: Kuolleeksi väitetyn isä jne."/>
            <HsSidePart sNum="4"sTopic="Nyt.fi |"sNews="Harry Styles puki ylleen vaatteita..."/>
            <HsSidePart sNum="5"sTopic="Rikosepäilyt |"sNews="Atte Jääskeläinen sai syytteet..."/>
        </div>
        
    )
}




