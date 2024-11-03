import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import googleLogo from "../assets/google-logo.svg"
const SignUp = () => {
  const { createUser,signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState(null);


  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from ?.pathname || "/";



  const handleSignUp = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;


    try {
      await createUser(email, password);
      alert('Signed up successfully😃');
      navigate(from, { replace: true });


    } catch (error) {
      setError(error.message);
      console.error('Error during sign up:', error);
    }
  };




  //signing using Google
  const handleRegister=()=>{
    signInWithGoogle().then((result)=>{
        const user=result.user;
        alert("sign up with Google successful➡️")
        navigate(from,{replace:true})
    }).catch((error)=>{
        const errorCode=error.code;
        const errorMassage=error.message;
        setError(errorMassage)
    });
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">🌞Sign-Up Form🌞</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSignUp} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email address" />
                </div>
                <div className="relative">
                  <input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" />
                </div>
                <p>Already Have An Account, Feel Free To ➡️<Link to="/login" className='text-green-600 underline'>Login</Link></p>
                <div className="relative">
                  <button className="bg-green-500 text-white rounded-md px-2 py-1">SignUp😎</button>
                </div>
                {error && <p className="text-red-500">{error}</p>}
              </form>
            </div>
                {/* signing ibn with Google */}
        <hr/>
        <div className='flex w-full items-center flex-col mt-5 gap-3'>
            <button onClick={handleRegister} className='block'><img src={googleLogo} alt="" className='w-12 h-12 inline-block'/>Login With Google</button>
        </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
