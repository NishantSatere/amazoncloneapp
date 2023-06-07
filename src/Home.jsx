import React from "react";
import './Home.css';
import Product from "./Product";

const Home = () =>{
    return <div className="home">
        <div className="home-container">
            <img className="home-img"
            src="https://m.media-amazon.com/images/I/61qa3132IFL._SX3000_.jpg"/>

        <div className="home-row">
            <Product title='BoAt headphones'
                image='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
                price={12.33}
                rating={5}

            />
            <Product title='Dokotoo Womens Blouses and Tops Short Sleeve Chiffon Shirts and Tops'
                image='https://m.media-amazon.com/images/I/71el10C5dmL._AC_UL600_FMwebp_QL65_.jpg'
                price={28.99}
                rating={4}
            />
        </div>
        <div className="home-row">
            <Product
                title='Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 64GB, Wi-Fi, 12MP front/8MP Back Camera, Touch ID, All-Day Battery Life – Space Gray'
                image='https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UL480_QL65_.jpg'
                price={248.99}
                rating={5}
            />
            <Product
                title='Apple 2020 MacBook Air Laptop M1 Chip, 13" Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Gray'
                image='https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SX522_.jpg'
                price={703.99}
                rating={5}
            />
            <Product
                title='Dokotoo Womens Blouses and Tops Short Sleeve Chiffon Shirts and Tops'
                image='https://m.media-amazon.com/images/I/71el10C5dmL._AC_UL600_FMwebp_QL65_.jpg'
                price={28.99}
                rating={4}
            />
        </div>
        <div className="home-row">
            <Product
                title='Dokotoo Womens Blouses and Tops Short Sleeve Chiffon Shirts and Tops'
                image='https://m.media-amazon.com/images/I/71el10C5dmL._AC_UL600_FMwebp_QL65_.jpg'
                price={28.99}
                rating={4}
            />
        </div>
        </div>
        
        
    </div>
}

export default Home;