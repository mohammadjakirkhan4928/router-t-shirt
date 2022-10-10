import React from 'react';
import Special from '../Special/Special';

const Myself = ({house,ring}) => {
    return (
        <div>
            <h1> my self here</h1>
            <p>my house:{house}</p>
            <section>
                <Special ring={ring}> </Special>
            </section>
        </div>
    );
};

export default Myself;