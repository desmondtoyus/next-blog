import React, { FC } from 'react';
import Link from 'next/link';
import style from './Navbar.module.scss';

const Navbar: FC<{}> = ({}) => {
  return (
    <nav className={style.navbar}>
      <ul>
        <li>
          <Link href={'/'}> Home </Link>
        </li>
        <Link href="/about"> About</Link>
      </ul>
    </nav>
  );
};

export default React.memo(Navbar);
