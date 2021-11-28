import React from 'react';

function Card(props){

    return(
        <card>
        <div className = "card">
        <div className = "top">
            <h2>{props.name}</h2>
            <img
            src={props.img}
            alt="product image"
            />
        </div>
        <div className = "bottom">
            <p>${props.price}</p>
        </div>

        </div>
        </card>

    )

};

export default Card;