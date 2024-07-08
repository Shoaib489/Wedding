import React from 'react'
import classes from "./navbar.module.css";
import Link from 'next/link';
import Dropdown from '@/pages/dropdown';

const Navbar = () => {

  return (
    <div className={`${classes.maiNavbar}`}>
      <nav className={`${classes.navbar}`}>
        <p className={`${classes.headingStyle}`}>wedding</p>
        <input type='checkbox' id='svg' className={classes.checkboxN}/>
        <div className={`${classes.changeFont} flex gap-[55px]`}>

          <div> <Link href="/">home</Link></div>
          <div><Link href="/aboutus">about us</Link></div>
          <div>
            <Dropdown />
          </div>
          <div><Link href="/portfolio">portfolio</Link></div>
          <div><Link href="/contactus">contact us</Link></div>
         
        </div>
        <label htmlFor="svg" className={classes.label1}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="35" viewBox="0 0 24 24">
              <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
            </svg>
          </label>
      </nav>
    </div>
  )

}

export default Navbar