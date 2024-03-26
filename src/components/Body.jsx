import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
 
// import {   RouterProvider,   createBrowserRouter } from 'react-router-dom'


const Body = () => {
//     const appRouter = createBrowserRouter([{
//         path:"/",
//         element:<Login />,
//     },
// {
//     path:"/browse",
//     element:<Browse/>
// }]);

const dispatch = useDispatch();
useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
       
      const {uid, email, displayName} = user;
      dispatch(addUser({uid: uid, email: email, displayName: displayName}))
      
    } else {
      dispatch(removeUser());
       
    }
  });

},[])
  return (
    <div>
        {/* <RouterProvider  router={appRouter} />  */}
        <BrowserRouter>
        <Routes>
            <Route path ="/"  element ={<Login />} />
            <Route path ="/browse"  element ={<Browse />} />
        </Routes>
        </BrowserRouter>

    </div>
  )
}

export default Body