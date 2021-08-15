import React from 'react';
import './Product.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const {name,price,img,seller,stock}=props.product
    return (
    <div className="product">
        <div className="">
            <img src={img} alt="" />
        </div>
        <div className="product-name">
            <h4>{name}</h4>
            <p><small>{seller}</small></p>
            <p><small>${price}</small></p>
            <p><small>In stock {stock} hurry up!!</small></p>
            <button className="add-to-card-btn"><FontAwesomeIcon icon={faCoffee} /> Add to card</button>
        </div>
    </div>

    );
};

export default Product;<h1>Eta holo products</h1>