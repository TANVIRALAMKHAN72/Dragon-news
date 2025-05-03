// import React from 'react';

// const NewsCard = ({news}) => {
//     return (
//         <div>
//             <h4>{news.title}</h4>
//             <img src={news.image_url} alt="" />
//         </div>
//     );
// };

// export default NewsCard;



import React from 'react';
import { FaEye, FaStar } from 'react-icons/fa';
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    image_url,
    details,
    author,
    rating,
    total_view,
    tags,
    others,
  } = news;

  const formattedDate = new Date (news.author.published_date).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-md rounded-md">
      <div className=" mb-5 p-4 flex items-center justify-between text-sm text-gray-600 bg-gray-100 rounded-t-xl">
        <div className="flex items-center gap-2">
          <img src={author?.img} alt="author" className="w-8 h-8 rounded-full" />
          <div>
            <p className="font-semibold">{author?.name}</p>
            <p className='text-accent'>{formattedDate}</p>
          </div>
        </div>
        <div className=" flex gap-3">
          <button className="btn btn-sm btn-circle btns-ghot p-2"><FaRegBookmark size={24}/></button>
          <button className="btn btn-sm btn-circle btns-ghot p-1"><IoShareSocialOutline size={24}/></button>
        </div>
      </div>

      <div className="px-4">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <img src={image_url} alt="news" className="rounded-md mb-3" />
        <p className="text-sm text-gray-700">
          {details.length > 150 ? (
            <>
              {details.slice(0, 150)}...
              <span className="text-orange-300 font-semibold ml-1">Read More</span>
            </>
          ) : (
            details
          )}
        </p>
      </div>

      <div className="card-actions items-center justify-between px-4 py-3 border-t border-gray-200 mt-4 text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span className="font-bold">{rating?.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
