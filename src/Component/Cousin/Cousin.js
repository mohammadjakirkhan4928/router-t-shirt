import React, { useContext } from 'react';
import Friend from '../Friend/Friend';
import { MoneyContext } from '../Grandpa/Grandpa';


const Cousin = ({house}) => {
  const [money] = useContext(MoneyContext)
    return (
        <div>
            <h1>cousin here</h1>
            <p><small>house:{house}</small></p>
            <p>money:{money}</p>
            <section>
                <Friend></Friend>
                <Friend></Friend>
            </section>
        </div>
    );
};

export default Cousin;