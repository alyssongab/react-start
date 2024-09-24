
import React from 'react';
import tokitoImage from './assets/tokito.jpg'; // ajuste o caminho conforme necessário

function Card() {
    return (
        <div className="card">
            <img src={tokitoImage} alt="Profile picture" width="250px"/>
            <h2>My Card</h2>
            <p>I am studying react</p>
        </div>
    );
}

export default Card;