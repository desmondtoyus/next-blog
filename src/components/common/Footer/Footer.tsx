import React from 'react';
import Link from 'next/link';
import style from '@/components/common/Navbar/Navbar.module.scss';

const Footer = () => {
  return (
    <footer className={style.navbar}>
      <p> footer</p>
      <ul>
        <li>
          <Link href="/">Terms & Condition</Link>
        </li>
        <li>
          <Link href="/">Privacy Policy</Link>
        </li>
      </ul>
    </footer>
  );
};

export default React.memo(Footer);
