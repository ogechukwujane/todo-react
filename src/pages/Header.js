import React from 'react';
import {GiNotebook} from 'react-icons/gi';
import './Header.css'


const Header = () => {
    return (
        <div className='header-rap'>
            <div className='header-content'><GiNotebook /> MyTaskList </div>
        </div>
    )
}

export default Header;