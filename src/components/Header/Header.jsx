import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <section className='nav-details'>
                <div className='nav-title'>JobHunting</div>
                <div className='nav-links'>
                    <Link to="/">Home</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/applied-jobs">Applied Jobs</Link>
                    <Link to="/blog">Blog</Link>
                </div>
                <div>
                    <button className='btn-nav'>Start Applying</button>
                </div>
            </section>
        </nav>
    );
};

export default Header;