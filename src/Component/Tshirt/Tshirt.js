import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt,handleAddToCart}) => {
    const {picture,name,price} = tshirt
    return (
        <div className='t-shirt'>
              <img src={picture} alt=""></img>
              <h2>{name}</h2>
              <h4>price:{price}</h4>
              <button onClick={()=>handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;