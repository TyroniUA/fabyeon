import React from 'react';
import './card.css'

function Card(props) {

    return(
        <div class='reviewCard'>
            <span class='revTitle' >{props.title}</span>
            <span class='revText'>{props.text}</span>
        </div>
    )

}

export default Card;