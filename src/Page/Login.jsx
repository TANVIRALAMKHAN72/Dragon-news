import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { authContext } from '../Provider/AuthProvider';

const Login = () => {
const [error, setError] = useState("")

const {signIn} = useContext (authContext)

const location = useLocation();
// console.log(location);
const navigate = useNavigate();


const handleLogin = e => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  // console.log(email, password);
  signIn (email, password)
  .then (result => {
    const user = result.user;
    // console.log(user)
    navigate(`${location.state? location.state : '/'}`)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // alert(errorCode, errorMessage)
    setError (errorCode)
  });
}


    return (
        <div className='flex justify-center min-h-screen items-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-6">
            <h1 className='text-2xl mx-auto font-bold text-gray-600 py-5'>Login your account</h1>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" required />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" required />
          <div><a className="link link-hover">Forgot password?</a></div>
          {
            error && <p className='text-red-400 font-semibold'>{error}</p>
          }
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <p className='text-accent font-semibold text-center pt-3'>Dont’t Have An Account ? <Link className='text-secondary' to='/auth/register'>Register</Link></p>
        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Login;