import React from 'react';
import './Coin.css';

const Coin =({coin:{image, name, symbol, current_price, market_cap,price_change_percentage_24h,total_volume}})=>{
    return(
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto"/>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price"><span className="heading">Current Price </span><span>Rs. {current_price.toLocaleString()}</span></p>
                    <p className="coin-volume"><span className="heading">Total Vol. </span><span>Rs. {total_volume.toLocaleString()}</span></p>
                    <p id ="coin-percent" className ={(price_change_percentage_24h >0) ? "green " : "red "}><span className="heading">Price Change % (24H)</span> <span>{price_change_percentage_24h.toLocaleString()}%</span></p>  
                    <p className="coin-market"><span className="heading">Market Cap. </span><span>Rs. {market_cap.toLocaleString()}</span></p>
                </div>
            </div>

        </div>
    )
}

export default Coin;