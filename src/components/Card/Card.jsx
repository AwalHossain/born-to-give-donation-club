import React from 'react';
import './Card.css'

const Card = (props) => {
    //Destructuring the props
    const {name, img,country, price, description, goal} = props.data
    // Specific Card design 
    return (
        <div className='card-body '>
            <div className="item-card my-5 ">
                <div className="">
                    <div className="">
                    <img src={img} className="" alt="..." />
                    </div>
                    <div className="body">
                        {/* Basic card information */}
                        <h3  className="fs-5 title mb-0">{name}</h3>
                        <p className="mb-0">{country}</p>
                        <h5 className="donate">Donate: ${price}</h5>
                        <p>Goal: ${goal}</p>
                        <p className="desc">{description.slice(0, 100)}</p>
                        {/* Button */}
                        <button className='donate-btn mb-3' onClick={()=>{props.buttonClick(props.data)}}><i className="fas fa-hand-holding-usd"></i> Donate</button>
                        {/* Social Media */}

                    </div>
                </div>
            </div>
       </div>
    );
};

export default Card;