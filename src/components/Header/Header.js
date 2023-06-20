import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='headerParent'>
            <nav>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                <NavLink to='/categories'>All Meals</NavLink>
                <NavLink to='/random'>Random Meal</NavLink>
                <NavLink to='/area'>Meals by Area</NavLink>
            </nav>
        </div>
    );
};

export default Header;