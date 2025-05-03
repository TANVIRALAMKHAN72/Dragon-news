import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div>
            <div className='flex justify-center mt-10 flex-col items-center gap-4'>
            <img src={logo} alt="" />
            <p  className='text-accent font-semibold'>Journalism Without Fear or Favour</p>
            <p className='text-accent font-bold'>{format(new Date(), 'EEEE, MMMM MM, yyyy')}</p>
            </div>
        </div>
    );
};

export default Header;