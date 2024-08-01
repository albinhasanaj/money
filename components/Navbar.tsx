"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="mt-[8px] flex justify-between  items-center w-full px-5">
      <ul className="flex gap-6 text-[20px] text-black h-[40px] transition-colors duration-500 dark:text-white mx-auto">
        <li><Link href="/home">Project</Link></li>
        <li><Link href="/learn">Learn</Link></li>
        <li><Link href="/paths">Paths</Link></li>
        <li><Link href="/review">Review</Link></li>
        <li><Link href="/publish">Publish</Link></li>
      </ul>
      <div className='flex justify-end items-center'>
        <Image
          onClick={handleDarkMode}
          className="cursor-pointer"
          src={darkMode ? '/icons/light-mode.svg' : '/icons/dark-mode.svg'}
          alt="Toggle Dark Mode"
          width={32}
          height={32}
        />
      </div>
    </nav>
  );
};

export default Navbar;
