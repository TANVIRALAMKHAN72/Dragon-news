import React from 'react';
import playground from '../assets/playground.png';
import swimming from '../assets/swimming.png';
import classing from '../assets/class.png';

const Qzone = () => {
    return (
        <div className='bg-base-200 p-5 rounded'>
            <h2 className='font-bold mb-5'>Q-Zone</h2>
            <div className='space-y-5'>
                <img src={swimming} alt="" />
                <img src={classing} alt="" />
                <img src={playground} alt="" />
            </div>
        </div>
    );
};

export default Qzone;