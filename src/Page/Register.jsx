import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { authContext } from '../Provider/AuthProvider';

const Register = () => {
const {createUser, setUser, updateUser} = useContext(authContext);

const navigate = useNavigate();


const handleRegister = e => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const photo = form.photo.value;
  // console.log(name,email,password,photo);
  createUser (email, password)
  .then (result => {
    const user = result.user;
    // console.log(user);
    updateUser({displayName: name, photoURL: photo})
    .then (() => {
      setUser({...user, displayName: name, photoURL: photo});
      navigate('/');
    })
    .catch((error) => {
      console.log(error);
      setUser();
      // An error occurred
      // ...
    });
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert (errorMessage);
    // ..
  });
}

    return (
        <div className='flex justify-center min-h-screen items-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-6">
            <h1 className='text-2xl mx-auto font-bold text-gray-600 py-5'>Register your account</h1>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Your Name</label>
          <input type="text" name='name' className="input" placeholder="Enter your name" required />
          <label className="label">Photo URL</label> 
          <input type="text" name='photo' className="input" placeholder="URL" required/>
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" required />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" required/>
          
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
          <p className='text-accent font-semibold text-center pt-3'>Already Have An Account ? <Link className='text-secondary' to='/auth/login'>Login</Link></p>
        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Register;