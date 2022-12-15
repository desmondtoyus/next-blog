import React, { FC } from 'react';
import Link from 'next/link';


const Footer: FC<{}>=({})=>{

  return(
    <footer>
      <ul>
        <li><Link href='/'>Terms & Condition</Link></li>
        <li><Link href=''>Privacy Policy</Link></li>
      </ul>
    </footer>
  )
}

export default React.memo(Footer);