"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
//@ts-expect-error no types for js-cookie
import Cookies from 'js-cookie';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [darkReaderMode, setDarkReaderMode] = useState(true);
  const [yourname, setYourname] = useState("Your name");

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Dynamically import darkreader only on the client side
      import('darkreader').then(({ enable, disable }) => {
        if (darkReaderMode) {
          enable({
            brightness: 100,
            contrast: 90,
            sepia: 10,
          });
        } else {
          disable();
        }
      });
    }
  }, [darkReaderMode]);

  const handleDarkMode = () => {
    if (darkMode || darkReaderMode) {
      setDarkMode(false);
      setDarkReaderMode(false);
    } else {
      setDarkMode(true);
      setDarkReaderMode(true);
    }
  };

  return (
    <nav className="mt-[8px] flex items-center justify-around w-full px-80">
      <Link 
      href="/identify"
      className='text-black capitalize text-[24px] dark:text-white transition-colors duration-500'>{yourname}</Link>
      <ul className="flex gap-6 text-[20px] text-black h-[40px] transition-colors duration-500 dark:text-white mx-auto">
        <li><Link href="/home">Project</Link></li>
        <li><Link href="/learn">Learn</Link></li>
        <li><Link href="/paths">Paths</Link></li>
        <li><Link href="/quiz">Quiz</Link></li>
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
