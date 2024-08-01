"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

//@ts-expect-error no types for js-cookie
import Cookies from 'js-cookie';

import {
  enable as enableDarkMode,
  disable as disableDarkMode,
  auto as followSystemColorScheme,
  exportGeneratedCSS as collectCSS,
  isEnabled as isDarkReaderEnabled
} from 'darkreader';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [darkReaderMode, setDarkReaderMode] = useState(true);
  const [yourname, setYourname] = React.useState("Your name");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    if (darkReaderMode) {
      enableDarkMode({
        brightness: 100,
        contrast: 90,
        sepia: 10,
      });
    } else {
      disableDarkMode();
    }
  }, [darkReaderMode]);

  useEffect(() => {
    const name = Cookies.get('name');
    if (name) {
      setYourname(name);
    }
  }, []);

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
