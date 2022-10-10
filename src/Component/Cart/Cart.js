import React from 'react';
import './Cart.css'



const Cart = ({cart,handleRemoveItem}) => {

    let message;
    if(cart.length ===0){
        message=<p>Please buy one</p>
    }
    else if(cart.length ===1){
        message = <p>buy for orphan</p>
    }
    else{
        message = <p>Thanks for buying!</p>
    }

    return (
        <div>
            <h1 className={cart.length ===2 ? `orange`: 'purple'}>order summary </h1>
            <h3 className={`bold ${cart.length ===2 ? 'blue': 'yellow'}`}>order quantity:{cart.length}</h3>
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={()=>handleRemoveItem(tshirt)}>x</button>
                </p>)
            }
            {
                message
            }
            {cart.length ===3 ? <p>gift for three pepole</p>: <p>buy more ! </p>}

            {cart.length ===2 && <h2>Double Items</h2>}
        </div>
    );
};

export default Cart;