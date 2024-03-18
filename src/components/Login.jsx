import React, { useRef, useState } from 'react'
 
import Header from './Header';
import {checkValidateData} from "../utils/validate"

 


const Login = () => {
  const [isSignInForm, SetIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
 const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    SetIsSignInForm(!isSignInForm);

  }
  const handleButtonClick = () => {
     
    const message = checkValidateData(email.current.value, password.current.value);
    setErrorMessage(message);
  
  }
  return (

    <div>
        
       
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" /> 
        </div>
        <form className="bg-black p-4  absolute w-3/12 mx-auto my-36 left-0 right-0 text-white bg-opacity-80 rounded-lg" onSubmit={(e)=>e.preventDefault()}>
          <h1 className="text-3xl my-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
          {!isSignInForm && (
             <input type="text" placeholder="Full Name" className="my-2 p-3 w-full bg-[#131517]"/>
          )}
          <input ref={email} type="text" placeholder="Email Address"  className="my-2 p-3 w-full bg-[#131517]"/>
          <input ref={password} type="password" placeholder="Password" className="my-2 p-3 w-full bg-[#131517]"/>
          
          <button className="text-white bg-red-700 my-2 p-2 w-full rounded-lg" onClick={handleButtonClick} > {isSignInForm?"Sign In":"Sign Up"}</button>
        <p className="text-red-700 text-lg font-bold py-2">{errorMessage}</p>
          <p className="py-6 cursor-pointer" onClick={toggleSignInForm} > {isSignInForm?"New to Netflix? Sign up now":"Already registered? Sign in now"}</p>
        </form>
        </div>
  )
}

export default Login