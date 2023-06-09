import React from "react";
import './Product.css'


const Product = ({id,title,image,price,rating}) =>{
    return <div className="product">
        <div className="product-info">
            <p>{title}</p>
            <p className="prduct-price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product-rating">
                {Array(rating).fill().map((_,i)=><p>⭐</p>)}
            </div>
        </div>
        <img className="product-img" src={image} alt="product"></img>
        <button className="product-button">Add to Basket</button>
    </div>
}

export default Product;