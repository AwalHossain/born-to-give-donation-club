import React from 'react';



const Cart = (props) => {
    let totalQuantity = 0;
    let totalMoney = 0;
    let name='';
    let point = 0;
    for(const each of props.cart){
        // debugger;
        console.log(each);
        if(!each.quantity){
            each.quantity=1;
        }
            totalQuantity = totalQuantity + each.quantity; 
            totalMoney = totalMoney + each.price*each.quantity
            point++
            name +=" " +point+(". ")  + each.name
    }
    console.log(totalQuantity);
    return (
        <div className='cart'>
            <h2 >Donate Information:</h2><p>{name}</p>
            <h3>Total Donation: {totalQuantity}</h3>
            <h3>Total Money:{totalMoney}</h3>
        </div>
    );
};

export default Cart;