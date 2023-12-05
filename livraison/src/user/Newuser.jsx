import React from 'react'
import {useState} from 'react'
import axios from 'axios'

export const Newuser = () => {

    const [user,setUser]=useState()

    const [email,setEmail]=useState()

    const handleChange=(e)=>{
   
       setEmail({email,[e.target.id]:e.target.value})
   
    }

    const submitGetUser=(e)=>{
         e.preventDefault();

        axios.post('http://localhost:4000/api/users/checkuser',email, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          })
            .then(res => {
                setUser(res.data.user)
              console.log(res.data);
            
            })
            .catch(error => {
              console.error(error);
             
            });
   }






  return (
    <>

          <form onSubmit={submitGetUser} className="space-y-6" >
                  <h5 className="text-xl font-medium text-gray-900 dark:text-white">Get user info</h5>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input  type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" onChange={handleChange}   />

                  </div>
            
                  <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">getInfoUser</button>

              </form>


              <h1>userName :{user ? user.name : ""} </h1>
              <h1>Email :{user ? user.email : ""} </h1>
              <h1>Role :{user ? user.role : ""} </h1>




              






    </>
  


  )
}
