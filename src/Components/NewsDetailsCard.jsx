import React from 'react';
import { Link } from 'react-router';
import { FaArrowLeft } from "react-icons/fa6";

const NewsDetailsCard = ({news}) => {
console.log(news)
const {title, image_url, details, category_id} = news;


    return (
        <div>
            <img className='w-full h-[400px] object-cover my-5 rounded-md' src={image_url} alt="" />
            <h1 className='text-2xl font-semibold mb-5'>{title}</h1>
            <p className='text-accent font-semibold mb-6'>{details}</p>
            <Link className='btn btn-secondary' to={`/category/${category_id}`}><span><FaArrowLeft size={20}/></span>All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;