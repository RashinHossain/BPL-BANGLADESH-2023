/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


const Cart = ({selectedPlayer}) => {
    
    console.log(selectedPlayer);

    return (
        <div>

            <h5>Total Actors:{selectedPlayer.length} </h5>
        {
            selectedPlayer.map((player)=>(
            <li key={player.id}>{player.name}</li>
                ))
        }
        </div>
    );
};

export default Cart;