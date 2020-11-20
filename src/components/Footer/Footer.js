import React from 'react';
import { NavLink } from 'react-router-dom';
import PawPrint from '../../images/pawprint.png'
import './Footer.css';

const NavBar = () => {
    console.log('Nav is working')

    return (
        <nav className="footer">
            {/* <NavLink className='footlinks' exact to='/'><img id="pawprintf" src={PawPrint} /></NavLink> */}
            <div className="footnav">
                <div className="navs">
                    <NavLink className='footlinks' exact to='/about'>About</NavLink> 
                    <NavLink className='footlinks' exact to='/services'>Services</NavLink> 
                    <NavLink className='footlinks' exact to='/retail'>Retail</NavLink> 
                    <NavLink className='footlinks' exact to='/faq'>FAQ</NavLink> 
                    <NavLink className='footlinks' exact to='/gallery'>Photo Gallery</NavLink>
                    <NavLink className='footlinks' exact to='/hours'>Hours</NavLink>
                </div>
                <p className="copyright">Copyright &copy; <script>document.write(new Date().getFullYear())</script> Bark 'N Bubbles' All Rights Reserved</p>
            </div>
        </nav>
    )
}
export default NavBar;