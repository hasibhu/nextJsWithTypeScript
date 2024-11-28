"use client"
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const url = 'https://www.course-api.com/react-tours-project';

type Tour = {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
}



const Tour = () => {

    const [tours, setTours] = useState<Tour[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchTours = async () => {
      setLoading(true);
      try {
          const response = await axios.get(url);
          //   console.log(response);
          
          setTours(response.data);
          
      } catch (error) {
        console.error('Error fetching tours:', error);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
        

        fetchTours();
    }, []);


    console.log(tours);


    return (
        <div>
            <div className='grid grid-cols-2 gap-5'>
                {
                    tours?.map((tour) => (
                        <div className='border border-yellow-400 p-1 mb-4 rounded-xl pt-6' key={tour.id}>
                            <h1 className='text-center text-2xl font-bold'>{tour.name}</h1>
                            <Image
                                src={tour.image}
                                alt={tour.name || 'Tour image'}
                                width={1080}
                                height={450}

                            ></Image>
                            <p>{ tour.info}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Tour;