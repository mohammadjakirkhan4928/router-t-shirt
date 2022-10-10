import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle'

export const MoneyContext = createContext('money')

const Grandpa = () => {
    const house = 7;
    const ring = 'dimond ring';
    const[money,setMoney] = useState(55)

    return (
      <MoneyContext.Provider value={[money,setMoney]}>
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <section className='flex'>
                <Father house={house} ring={ring}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
      </MoneyContext.Provider>
    );
};

export default Grandpa;