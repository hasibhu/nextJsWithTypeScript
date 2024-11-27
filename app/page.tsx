import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1 className='text-3xl'>Home Page</h1>

      <Link href={'/about'}>
        <button className='bg-yellow-500 rounded-xl p-2'>About</button>
      </Link>
    </div>
  );
};

export default HomePage;