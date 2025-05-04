import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router'
import userIcon from '../assets/user.png'
import { authContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext (authContext);

    const handleLogout =() => {
        // console.log ('logout')
        logOut()
        .then(() => {
            alert ('Logout Successfully');
          }).catch((error) => {
            console.log(error);
          });
          
    }
    return (
        <div className='flex justify-between items-center'>
            <div className='text-accent border border-gray-400 bg-base-200 px-2 py-1 rounded-md '>
                {user && user.email}
            </div>
            <div className='flex gap-5 text-accent font-semibold'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex gap-3'>
                <img className='w-14 h-14' src={`${user ? user.photoURL : userIcon }`} alt="" />
                {
                    user ? (
                        <button onClick={handleLogout} className='btn btn-primary px-10'>Logout</button>
                    ) :  (<Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>
                    )}
            </div>
        </div>
    );
};

export default Navbar;