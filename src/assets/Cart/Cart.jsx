/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


const Cart = ({selectedPlayer, remaining, totalCost}) => {
    
    console.log(selectedPlayer);

    return (
        <div>

            <h5>Total Actors:{selectedPlayer.length} </h5>
            <h4>Total Cost : {totalCost}</h4>
            <h4>Remaining : {remaining}</h4>
        {
            selectedPlayer.map((player)=>(
            <li key={player.id}>{player.name}</li>
                ))
        }
        </div>
    );
};

export default Cart;