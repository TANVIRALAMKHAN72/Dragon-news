import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from "react-icons/fa6";


const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold mb-5'>login with</h1>
            <div className='space-y-3'>
                <button className='btn btn-outline btn-secondary w-full'><FcGoogle size={20}/>Login with Google</button>
                <button className='btn btn-outline btn-primary w-full'><FaGithub size={20}/> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;