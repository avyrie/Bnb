import React from 'react';
import { NavLink } from 'react-router-dom';
import PawPrint from '../../images/pawprint.png'
import './NavBar.css';

const NavBar = () => {
    console.log('Nav is working')

    return (
        <nav className="navbar">
            <NavLink className='navlinks' exact to='/'><img id="pawprint" src={PawPrint} /></NavLink>
            <NavLink className='navlinks' exact to='/about'>About</NavLink>
            <NavLink className='navlinks' exact to='/services'>Services</NavLink>
            <NavLink className='navlinks' exact to='/retail'>Retail</NavLink>
            <NavLink className='navlinks' exact to='/faq'>FAQ</NavLink>
            <NavLink className='navlinks' exact to='/gallery'>Photo Gallery</NavLink>
        </nav>
    )
}
export default NavBar;