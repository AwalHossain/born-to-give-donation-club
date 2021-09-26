import React from 'react';
import './Card.css'

const Card = (props) => {
    //Destructuring the props
    const {name, img,country, price, description} = props.data
    // Specific Card design 
    return (
        <div className='card-body '>
                <div className="item-card my-5 ">
                <div className="">
                    <div className="">
                    <img src={img} className="" alt="..." />
                    </div>
                    <div className="body">
                        <h3  className="title mb-0">{name}</h3>
                        <p className="mb-0">{country}</p>
                        <h5 className="donate">Donate: ${price}</h5>
                        <p className="desc">{description.slice(0, 150)}</p>
                        {/* Button */}
                        <button className='donate-btn' onClick={()=>{props.buttonClick(props.data)}}><i className="fas fa-hand-holding-usd"></i> Donate</button>
                        {/* Social Media */}
                        <div className='social mb-0 mt-3'>
                        <a className='mb-5' href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>
                  
                </div>
        </div>
        </div>
    );
};

export default Card;