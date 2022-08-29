import React from "react";

export default function Header(){
    return(
        <header className="header">
            <img src={require('../images/troll.png')} alt="troll" className="header--img"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--proj">React Course - Project 3</h4>
        </header>
    )
}