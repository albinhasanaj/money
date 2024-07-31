"use client";
import React, { useRef } from 'react';
import {useRouter} from 'next/navigation';

//@ts-expect-error no types for js-cookie
import Cookies from 'js-cookie';

const Identify: React.FC = () => {
    const ref = useRef<HTMLSelectElement>(null);
    const router = useRouter();

    // Set the name in a cookie
    const handleClick = () => {
        if (ref.current) {
            Cookies.set('name', ref.current.value);
            router.push('/home');
        }
    };

    return (
        <section className='flex flex-col items-center justify-center h-screen'>
            <p className='text-[32px]'>Are you Albin, Oliver or Rafey</p>
            <select className='p-2 mt-4 text-black' ref={ref}>
                <option value="" disabled selected>Select your name</option>
                <option value="Albin">Albin</option>
                <option value="Oliver">Oliver</option>
                <option value="Rafey">Rafey</option>
            </select>
            <button className='bg-black p-2 mt-4' onClick={handleClick}>Submit</button>
        </section>
    );
};

export default Identify;
