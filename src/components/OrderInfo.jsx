import React from 'react';

const OrderInfo = ({ orderInfo }) => {

    return (
        <div>
            <h3>Your Order:</h3>
            <p>Name: {orderInfo.name}</p>
            <p>Size: {orderInfo.size}</p>
            <p>Toppings:
                {orderInfo.pepperoni ? ' Pepperoni ' : null}
                {orderInfo.olives ? ' Olives ' : null}
                {orderInfo.mushrooms ? ' Mushrooms ' : null}
                {orderInfo.spinach ? ' Spinach ' : null}
            </p>
            <p>Special instructions: {orderInfo.instructions}</p>
        </div>
    )
}

export default OrderInfo;