import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Friend = () => {
    const [money,setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h1>Friend here</h1>
            <p> Money:{money} </p>
            <button onClick={() => setMoney(money + 1000)}>add 1000</button>
        </div>
    );
};

export default Friend;