import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const {id, category, name, img, price, quantity, ratings, ratingsCount, seller, shipping, stock} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <div>
                    <h6 className='product-name'>{name}</h6>
                    <p className='product-price'>Price : ${price}</p>
                </div>
                <div className='product-details'>
                    <p>Manufacturer : {seller}</p>
                    <p>Rating : {ratings}Stars</p>
                </div>
            </div>
            <button className='btn-cart'>Add to Cart</button>

            {/* <div className='product-details'>
                <div>
                    <h3>{name}</h3>
                    <h4>Price : ${price}</h4>
                </div>
                <div className='other'>
                    <p>Manufacturer : {seller}</p>
                    <p>Rating : {ratings}</p>
                </div>
            </div>
            <div className='btn-addToCart'>
                <p>Add to Cart</p> 
            </div> */}
        </div>
    );
};

export default Product;
