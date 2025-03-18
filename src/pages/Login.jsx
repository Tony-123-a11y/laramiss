import React from 'react'
import { useLocation } from 'react-router-dom'

const Login = () => {
  return (
    <div class=" h-[100vh]  bg-gradient-to-br from-blue-300 to-purple-300  flex items-center justify-center ">
  <div class="container h-[700px]  max-lg:h-[570px] max-md:h-full   bg-white rounded-lg m-auto shadow-2xl shadow-gray-500 max-sm:rounded-none">
   <div class="flex items-center h-full justify-center"> 
    <div class="w-[60%] h-full  bg-center bg-cover  relative  shadow-sm shadow-black max-lg:w-[50%] max-md:hidden">
        <img src="newsbg.jpg" alt="" class="object-cover w-full h-full"/>
        <div class="absolute left-0 top-0 w-full h-full bg-black bg-opacity-60  drop-shadow-2xl backdrop-blur-sm">
            <h1 class="text-4xl text-white font-bold w-[70%] absolute top-10 tracking-wider leading-relaxed left-[50%] translate-x-[-50%] max-lg:text-xl max-sm:text-3xl">Welcome Back to Our News Platform!</h1>
            <h1 class="text-2xl text-white font-bold  absolute bottom-10 right-10 tracking-wide max-md:text-xl max-sm:text-3xl">&#8377;299<sub class="text-sm ">/Month</sub></h1>
        </div>
    </div>
    <div class="p-10 w-[35%] mx-auto max-lg:w-[50%]  max-md:w-[100%] max-sm:p-10">
        <h1 class="text-4xl font-bold">Welcome back</h1>
        <p class=" text-gray-500 mt-4 font-semibold">Please enter your details</p>
        <form action="#" class="mt-6">
            <div class=" relative mt-6">
                <label for="name">Your Email:</label>
            <input onchange="handleInput(event)" name="EmailID" type="text" class="input border mt-2 py-2 px-4 rounded-md placeholder:text-sm w-full shadow-sm"/>
            </div>
            <div class=" relative mt-6">
                <label for="name">Password:</label>
            <input onchange="handleInput(event)" name="Password" type="password" class="input  border mt-2 py-2 px-4 rounded-md placeholder:text-sm w-full shadow-sm"/>
            <i onclick="handlePass(event)" class="bi bi-eye-slash text-2xl absolute right-2 top-9 cursor-pointer"></i>
            </div>
            <a href="#" class="my-4 block text-blue-500 underline text-end">Forgot Password?</a>
           
           
         
            <button onclick="handleRegister(event)" class=" w-full text-sm bg-blue-600 rounded-md px-8 py-2 font-semibold text-white border-2 border-blue-600 hover:border-blue-800  hover:bg-blue-800 transition max-sm:flex-grow">Sign in</button>
         <button class="text-sm border-2 border-black rounded-sm px-8 py-2 font-semibold hover:text-white hover:bg-black transition max-sm:flex-grow">LOGIN</button>
         <p class="mt-6 text-center">New to our services? <a href="signup.html" class="text-blue-700 underline">Sign up</a></p>
        </form>
    </div>
   </div>
  </div>

    </div>
  )
}

export default Login
