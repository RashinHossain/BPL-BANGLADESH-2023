/* eslint-disable react/jsx-key */


import { useEffect } from 'react';
import './Home.css'
import { useState } from 'react';


const Home = () => {

    const [allPlayer, setAllPlayer] = useState([])

useEffect(()=>{
    fetch('./data.json')
    .then(res=> res.json())
    .then(data => setAllPlayer(data))
},[])



   

    return (

        <div className='container'>

            <div className='home-container'>
            
            <div className='card-container'>
            {
                // eslint-disable-next-line no-unused-vars
                allPlayer.map(player =>(
                    <div className="card">
                <div>
                    <img className="photo" src={player.image} alt="" />
                </div>
                <h3>{player.name}</h3>
                <p>Age : {player.age}</p>
                <p>From: {player.country}</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className="info">
                    
                    <h4>{player.salary}$</h4>
                    <h4>{player.role}</h4>
            </div>
            <button>Select</button>
                </div>
                ))
            }
            </div>
            </div>

            <div className="cart">
            <h3>This is cart</h3>
            </div>
        </div>
    );
};

export default Home;