"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

//@ts-expect-error no types for js-cookie
import Cookies from 'js-cookie';

const Navbar = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const [yourname, setYourname] = React.useState("Your name");
  useEffect(() => {
    const name = Cookies.get('name');
    if (name) {
      setYourname(name);
    }
  }, []);

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
    <nav className="mt-[8px] flex items-center justify-around w-full px-80">
      <h3 className='text-black capitalize text-[24px]'>{yourname}</h3>
      <ul className="flex gap-6 text-[20px] text-black h-[40px] transition-colors duration-500 dark:text-white mx-auto">
        <li><Link href="/home">Project</Link></li>
        <li><Link href="/learn">Learn</Link></li>
        <li><Link href="/paths">Paths</Link></li>
        <li><Link href="/review">Review</Link></li>
        <li><Link href="/publish">Publish</Link></li>
      </ul>
        <Image
          onClick={handleDarkMode}
          className="cursor-pointer"
          src={darkMode ? '/icons/light-mode.svg' : '/icons/dark-mode.svg'}
          alt="Toggle Dark Mode"
          width={32}
          height={32}
        />
    </nav>
  );
};

export default Navbar;
