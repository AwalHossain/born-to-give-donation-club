import React from 'react';
import './Info.css'
const info = (props) => {
    const {name, img} = props.info;

    // Selected Name and picture for the cart
    return (
        <div>
         <div className="selected-dev d-flex align-items-center my-3">
            <img src={img} alt="" />
            <h6 className="p-3">{name}</h6>
        </div>
        </div>
    );
};

export default info;