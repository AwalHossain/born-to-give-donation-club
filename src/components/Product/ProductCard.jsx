import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../DonationCart/Cart';
import './ProductCard.css'

const ProductCard = () => {
    // This is where all the react hooks i am using in this website
const [information, setInformation] =useState([]);
const [cart, setCart] = useState([])

//React hook sideEffect
useEffect(()=>{
    fetch('./data.JSON')
    .then(resp => resp.json())
    .then(data =>{
        console.log(data)
        setInformation(data)
    }
        )
},[])
//This function is givining data and sending data also. So, this is an State which work as props
const handleClick = (data)=>{
    const newCount = [...cart, data];
    setCart(newCount)
}
//Most of the data are going to other component from here. I iterate through the data using array map and then send data as props
    return (
        <div className='product-container my-5'>
            <div className='card '>
            {
                information.map(data =>
                    <Card
                    key={data.id}
                    data={data}
                buttonClick={handleClick}
                ></Card> )
            }
            </div>
            <div className='  cart '>
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default ProductCard;