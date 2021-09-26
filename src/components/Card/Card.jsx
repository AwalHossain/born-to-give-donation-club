import React from 'react';
import './Card.css'

const Card = (props) => {

    const {name, img,country, price} = props.data

    return (
        <div className='card-body '>
                <div className="item-card my-5 ">
                <div className="">
                    <div className="">
                    <img src={img} className="" alt="..." />
                    </div>
                    <div className="body">
                        <h3  className="title  ">{name}</h3>
                        <p>Country:{country}</p>
                        <h5 className="donate">Donate: ${price}</h5>
                        <p className="">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        {/* Button */}
                        <button className='donate-btn' onClick={()=>{props.buttonClick(props.data)}}><i className="fas fa-hand-holding-usd"></i> Donate</button>
                        {/* Social Media */}
                        <div className='social my-2 mt-3'>
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