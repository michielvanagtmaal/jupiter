import React from 'react'
import Link from 'next/link';import { NavigationStyles } from "@/components/styles/NavigationStyles";

export const Navigation = () => {
  return (
    <NavigationStyles>
      <nav className='navigation'>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT US</Link>
          </li>
          <li>
            <Link href="/services">OUR SERVICES</Link>
          </li>
          <li>
            <Link href="/portfolio">PORTFOLIOS</Link>
          </li>
          <li>
            <Link href="/blog">BLOG</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT US</Link>
          </li>
        </ul>
      </nav>
    </NavigationStyles>
  );
}
