import React from 'react';

function Card(props){

    return(
        <card>
        <div className = "card">
        <div className = "top">
            <h2>{props.name}</h2>
            <img
            src={props.img}
            alt="product"
            />
        </div>
        <div className = "bottom">
            <p>${props.price}</p>
            <form>
                <div>
                <button type = "submit">Add to cart</button>
                </div>
                <button type = "submit">Add to wishlist</button>
            </form>
        </div>

        </div>
        </card>

    )

};

export default Card;