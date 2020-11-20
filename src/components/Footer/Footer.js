import React from 'react';
import { NavLink } from 'react-router-dom';
import PawPrint from '../../images/pawprint.png'
import './Footer.css';

const NavBar = () => {
    console.log('Nav is working')

    return (
        <nav className="footer">
            <NavLink className='footlinks' exact to='/'><img id="pawprintf" src={PawPrint} /></NavLink>
            <div className="footnav">
                <NavLink className='footlinks' exact to='/about'>About</NavLink>
                <NavLink className='footlinks' exact to='/services'>Services</NavLink>
                <NavLink className='footlinks' exact to='/retail'>Retail</NavLink>
                <NavLink className='footlinks' exact to='/faq'>FAQ</NavLink>
                <NavLink className='footlinks' exact to='/gallery'>Photo Gallery</NavLink>
            </div>
        </nav>
    )
}
export default NavBar;