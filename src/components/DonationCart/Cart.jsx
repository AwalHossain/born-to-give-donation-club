import React from 'react';
import Info from '../DonationInfo/Info';
import './cart.css'


const Cart = (props) => {
    let totalQuantity = 0;
    let totalMoney = 0;
    const info = props.cart
    //iterate through data and find out the quantity
    for(const each of props.cart){
        console.log(each);
        if(!each.quantity){
            each.quantity=1;
        }
            totalQuantity = totalQuantity + each.quantity; 
            totalMoney = totalMoney + each.price*each.quantity
    }
    console.log(totalQuantity);
    //Cart Information
    return (
        <div className='cart'>
            <h3 >Information Cart</h3>
            <h4 >Total Donation: {totalQuantity}</h4>
            <h4>Total Money:{totalMoney}</h4>
            {
                info.map(selected => <Info info={selected}></Info>)
            }
        </div>
    );
};

export default Cart;