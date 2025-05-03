import React from 'react';
import { SiFacebook } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find us on</h2>
            <div>
            <div className="join join-vertical w-full ">
  <button className="btn bg-base-100 justify-start join-item"><SiFacebook size={20}/>Facebook</button>
  <button className="btn bg-base-100 justify-start join-item"><FaXTwitter size={20}/>Twitter</button>
  <button className="btn bg-base-100 justify-start join-item"><GrInstagram size={20}/>Instagram</button>
</div>
            </div>
        </div>
    );
};

export default FindUs;