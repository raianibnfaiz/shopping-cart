import React from 'react';
import Button from 'react-bootstrap/Button';

const Cart = (props) => {
    const cart=props.cart
    const courseTotal= cart.reduce((sum,cour) => sum+cour.price, 0)
    const tax=courseTotal/10
    return (
        <div>
            <h1>Course taken: {cart.length}</h1>
            <p>Price:{courseTotal}</p>
            <p>Tax:{tax}</p>
            <h2>Grand Total:{tax+courseTotal}</h2>
            <Button variant="success">Place Order</Button>
        </div>
    );
};

export default Cart;