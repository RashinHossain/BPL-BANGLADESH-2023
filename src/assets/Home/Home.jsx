/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */


import { useEffect } from 'react';
import './Home.css'
import { useState } from 'react';
import Cart from '../Cart/Cart';




const Home = () => {

    const [allPlayer, setAllPlayer] = useState([])
    const [selectedPlayer, setSelectedPlayer] = useState([])
    const [remaining, setRemaining] = useState(0)
    const [totalCost, setTotalCost] = useState(0)

useEffect(()=>{
    fetch('./data.json')
    .then(res=> res.json())
    .then(data => setAllPlayer(data))
},[])

    const handleSelectedPlayer = (player) =>{
        const isExist = selectedPlayer.find(item => item.id == player.id)

        let count = player.salary


      if(isExist){
       return alert('Player is Already Booked')
      }
      else{
        selectedPlayer.forEach(item =>{
           count +=  item.salary
           
        })

        const totalRemaining = 20000 - count;
        if(count > 20000){
            return alert('Taka sesh ar hobena')
        }
    else{
        setTotalCost(count)
        setRemaining(totalRemaining);
        setSelectedPlayer([...selectedPlayer,player])
    }
      
       

      }
       
    }

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
            <button onClick={()=>handleSelectedPlayer(player)} className='btn'>Select</button>
                </div>
                ))
            }
            </div>
            </div>

            <div className="cart">
            <Cart selectedPlayer={selectedPlayer} remaining={remaining} totalCost={totalCost}></Cart>
            </div>
        </div>
    );
};

export default Home;