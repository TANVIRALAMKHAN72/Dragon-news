import React, { Suspense } from 'react';
import Categories from '../Components/Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
            <Categories></Categories>
            </Suspense>
            
        </div>
    );
};

export default LeftAside;