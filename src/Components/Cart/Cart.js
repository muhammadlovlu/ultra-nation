import React from 'react';

const Cart = (props) => {
 
    const cart = props.updateCart;
    console.log("astexe",cart);
    const totalPopulation = cart.reduce((total,cart)=> total+cart.population,0);
    return (
        <div>
           <h4> This is a Cart Component : {cart.length} </h4>
           <h6>Total Population : {totalPopulation} </h6>
        </div>
    );
};

export default Cart;