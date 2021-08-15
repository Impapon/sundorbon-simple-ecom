import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const fast10 = fakeData.slice(0, 10)
    const [product, setProduct] = useState(fast10)
    return (
        <div className='shop-container'>

            <div className="product-container">
               
                    {
                        product.map(pd => <Product product={pd}></Product>)
                    } </div>
            <div className="card-container">
            <Card></Card>
            </div>

        </div>
    );
};

export default Shop;