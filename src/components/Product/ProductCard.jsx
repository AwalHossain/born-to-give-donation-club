import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../DonationCart/Cart';
import './ProductCard.css'

const ProductCard = () => {
const [information, setInformation] =useState([]);
const [cart, setCart] = useState([])
useEffect(()=>{
    fetch('./data.JSON')
    .then(resp => resp.json())
    .then(data => setInformation(data))
},[])
const handleClick = (data)=>{
    const newCount = [...cart, data];
    setCart(newCount)
}
    return (
        <div className='product-container my-5'>
            <div className='card '>
            {
                information.map(data => <Card
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