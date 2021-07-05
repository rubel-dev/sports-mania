import React from 'react';
import './Header.css'

const Header = ({img,title}) => {
    return (
        <header className='header-bg'>
            <div className='banner'>
                <img className=' rounded mx-auto d-block pt-5 img-fluid' src={img} alt="" />
               {
                   title &&  <h4 className='banner-title'>Sports Mania</h4>
               }
            </div>
        </header>
    );
};

export default Header;