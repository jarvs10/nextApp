import React from 'react'
import ActiveLink from './ActiveLink';
import styles from '../styles/NavBar.module.css'

const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  },
];

const NavBar = () => {
  return (
    <nav className={styles.navegacion}>
      {
        menuItems.map(menu =>{
          const {text, href} = menu
          return (
            <ActiveLink key={href} text={text} href={href} />
          )
        })
      }
    </nav>
  )
}

export default NavBar