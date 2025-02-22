"use client";
import React, { useRef } from 'react';
import {useRouter} from 'next/navigation';

//@ts-expect-error no types for js-cookie
import Cookies from 'js-cookie';

const Identify: React.FC = () => {
    const ref = useRef<HTMLSelectElement>(null);

    // Set the name in a cookie
    const handleClick = () => {
        if (ref.current) {
            Cookies.set('name', ref.current.value, { expires: 30 });
        }
        location.href = '/home';
    };

    return (
        <section className='flex flex-col items-center justify-center h-screen'>
            <p className='text-[32px]'>Are you Albin, Oliver or Rafey</p>
            <select className='p-2 mt-4 text-black' ref={ref}>
                <option value="albin">Albin</option>
                <option value="oliver">Oliver</option>
                <option value="rafey">Rafey</option>
            </select>
            <button className='bg-black p-2 mt-4 text-white' onClick={handleClick}>Submit</button>
        </section>
    );
};

export default Identify;
