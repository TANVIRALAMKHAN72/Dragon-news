import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';



const Categories = () => {
const [categories, setCategories] = useState ([]);

useEffect (() => {
    fetch ('/public/categories.json')
    .then (res => res.json ())
    .then (data => setCategories (data))
})

    return (
        <div>
            <h3 className='font-bold '>All Category ({categories.length})</h3>
            <div className='grid grid-cols-1 mt-5 gap-3'>
            {
                categories.map (category => <NavLink key={category.id} className={'btn bg-base-100 border-0 hover:bg-base-200 text-accent'} to={`/category/${category.id}`}>{category.name}</NavLink>)
            }
            </div>
        </div>
    );
};

export default Categories;