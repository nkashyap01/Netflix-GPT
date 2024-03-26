import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
       navigate("/")
    }).catch((error) => {
      
    });
  }
  return (
    <div className=" absolute px-8 py-2 bg-gradient-to-b from-black w-full z-20 flex justify-between items-center">
    <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className="w-44"/>
    <div>
      <button className="bg-red-700 p-2 rounded-md" onClick = {handleSignOut}> Sign Out</button>
    </div>

    </div>
  )
}

export default Header