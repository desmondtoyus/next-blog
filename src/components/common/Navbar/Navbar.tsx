import React from 'react';
import Link from 'next/link';
import style from './Navbar.module.scss';
import { ThemeSwitch } from '../ThemeSwith';

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul>
        <li>
          <Link href={'/'}> Home </Link>
        </li>
        <Link href="/about"> About</Link>
      </ul>
      <ThemeSwitch />
    </nav>
  );
};

export default React.memo(Navbar);
