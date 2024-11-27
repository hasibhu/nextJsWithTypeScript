'use client'
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    
    return (
        <div className='mx-auto'>
            <h2 className='text-center'>Counter is here </h2>

            <p className='text-center text-2xl font-bold'>{count}</p>
            

            <button className='text-center ml-5 bg-yellow-400 p-1 rounded-xl' onClick={()=> setCount(count+1)}>increment</button>
            <button className='text-center ml-5 bg-yellow-400 p-1 rounded-xl' onClick={()=> setCount(count-1)}>decrement</button>
        </div>
    );
};

export default Counter;