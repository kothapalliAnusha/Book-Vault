import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logOut}=useContext(AuthContext);
    const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from ?.pathname || "/";
    const handleLogOut=()=>{
        logOut().then(() => {
            // Sign-out successful.
            alert("Sign-out succesfully✅")
            navigate(from,{replace:true})
          }).catch((error) => {
            // An error happened.
          });
        
    }
  return (
    <div className='relative'>
    <div className='h-screen bg-teal-100 flex flex-col items-center justify-center'>
      <button className='bg-red-700 px-4 py-2 text-white rounded mb-4' onClick={handleLogOut}>
        Log-Out
      </button>
      <p className='text-center text-gray-700'>
        👋Thank You For Visiting, welcoming you back soon. Have a wonderful day!👋
      </p>
    </div>
  </div>
  )
}

export default Logout