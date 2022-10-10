import React from 'react';
import Cousin from '../Cousin/Cousin'

const Aunty = ({house}) => {
    return (
        <div>
            <h1> Aunty here</h1>
            <p><small>house:{house}</small></p>
            <section className='flex'>
                <Cousin house={house}></Cousin>
                <Cousin house={house}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;