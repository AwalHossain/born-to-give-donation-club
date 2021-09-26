import React from 'react';
import Info from '../DonationInfo/Info';
import './cart.css'


const Cart = (props) => {
    let totalQuantity = 0;
    let totalMoney = 0;
    const info = props.cart
    for(const each of props.cart){
        // debugger;
        console.log(each);
        if(!each.quantity){
            each.quantity=1;
        }
            totalQuantity = totalQuantity + each.quantity; 
            totalMoney = totalMoney + each.price*each.quantity
    }
    console.log(totalQuantity);
    return (
        <div className='cart'>
            <h2 >Donate Information:</h2>
            <h3 >Total Donation: {totalQuantity}</h3>
            <h3>Total Money:{totalMoney}</h3>
            {
                info.map(selected => <Info info={selected}></Info>)
            }
        </div>
    );
};

export default Cart;