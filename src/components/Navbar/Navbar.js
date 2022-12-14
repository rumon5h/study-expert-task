import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.inti";
import Loading from "../Loading/Loading";

const Navbar = () => {
    const [user, loading] = useAuthState(auth);

    if(loading){
        return <Loading/>
    }
    
  return (
    <div className="z-50 sticky top-0">        
      <div className="text-gray-600  shadow-lg rounder-md  shadow-orange-200 bg-white mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <i className="fa-solid text-[30px] text-orange-500 fa-graduation-cap"></i>
          <span className="ml-1 mt-2 text-xl">StudyExpert</span>
        </Link>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/home" className="mr-5 hover:text-gray-900">
           Home
          </Link>
          <Link to="/" className="mr-5 hover:text-gray-900">
            Services
          </Link>
          <Link to="/" className="mr-5 hover:text-gray-900">
            About 
          </Link>
          <Link to="/" className="mr-5 hover:text-gray-900">
           Contact
          </Link>
        </nav>
        {
            user?.uid ? <Link onClick={() => signOut(auth)} to="/log-in"><button className="px-6 py-2 text-sm uppercase text-orange-500 bg-orange-100 rounded shadow hover:bg-orange-200">
            {" "}
            <i className="fa-solid fa-right-to-bracket mr-1"></i> Log Out
          </button></Link> : <Link to="/log-in"><button className="px-6 py-2 text-sm uppercase text-orange-500 bg-orange-100 rounded shadow hover:bg-orange-200">
          {" "}
          <i className="fa-solid fa-right-to-bracket mr-1"></i> Log In
        </button></Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
