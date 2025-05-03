import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-4 bg-base-200 px-3 py-2'>
            <h4 className='text-base-100 bg-secondary px-3 py-2 font-semibold'>Latest</h4>
            <Marquee className='flex gap-5' pauseOnHover={true}>
            <p className='font-bold'>Here’s a catchy, Bengali-English mixed headline in the style you mentioned:</p>
            <p className='font-bold'>Here’s a catchy, Bengali-English mixed headline in the style you mentioned:</p>
            <p className='font-bold'>Here’s a catchy, Bengali-English mixed headline in the style you mentioned:</p>
            </Marquee>
            
        </div>
    );
};

export default LatestNews;