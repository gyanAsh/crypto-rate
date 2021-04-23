import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';

function App() {
  const [coins, setCoins]=useState([]);
  const [search, setSearch]=useState("");

  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res=>{
setCoins(res.data);
    }).catch(error =>console.log("Error msg !"));
  },[])

const searchItem= e =>{
  setSearch(e.target.value);
}

const filterCoins = coins.filter(coin =>  coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="coin-app">
     <div className="coin-search">
       <h1 className="coin-text">Search Crypto-Currency</h1>
       <form>
         <input type="text" placeholder="Search..." className="coin-name" onChange={searchItem}/>
       </form>
     </div>
     {filterCoins.map(coin=>{
       return(
         <Coin key={coin.id} coin={coin}/>
       )
     })}
    </div>
  );
}

export default App;
