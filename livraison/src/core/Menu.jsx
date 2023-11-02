import React from 'react'
import logo from '../imgs/download.png'
import Swal from 'sweetalert2'; // Import the main SweetAlert2 module
import 'sweetalert2/dist/sweetalert2.min.css'; // Import the CSS file
import 'sweetalert2/dist/sweetalert2.min.js'; // Import the JavaScript file
import {isAuthenticated} from './../auth/helpers'

import {Link,useLocation, useNavigate} from 'react-router-dom'

const isActive=(location,path)=>{
  if(location.pathname===path) return {color:'black'}
  else return {color:'grey'}
}

 const Menu = (props) => {
 
  const navigate=useNavigate()

  const location =useLocation()


  const signout=()=>{
    fetch('http://localhost:4000/api/users/signout')
    .then(()=>{
      localStorage.removeItem('jwt_token')
      Swal.fire({
        title: 'User Signout see you NextTime',
        showclassName: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideclassName: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      navigate('/signin');

    })
    .catch()
  }

  


  return (
    <div>
        <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center">
                <img src={logo} className="h-8 mr-3" alt=" Logo" />
                <span className=" text-yellow-400	 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Marhaba</span>
            </Link>
           
            <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
              <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                {isAuthenticated() && (
                <li>
                  <Link  style={isActive(location,'/')}  to="/"className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</Link>
                </li>
                )
                 }
                {!isAuthenticated() && (
                <>
                <li>
                  <Link style={isActive(location,'/signin')} to="/signin" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Signin</Link>
                </li>
                <li>
                  <Link style={isActive(location,'/signup')} to="/signup" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Signup</Link>
                </li>
                </>
                )
                 }
                {isAuthenticated() && (
              <>
                <li>
                  <span onClick={signout} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Signout</span>
                </li>
                <li>
                 <Link style={isActive(location,'/dashboard')} to="/dashboard" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Dashboard</Link>
                </li>
              </>
                )
                }
              </ul>
            </div>
          </div>
        </nav>


    </div>
  )
}

export default Menu
