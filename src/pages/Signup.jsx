import React from 'react'
const Signup = () => {
  return (
    <div class="bg-gradient-to-br flex h-[100vh] justify-center items-center from-blue-300 to-purple-300  max-sm:p-0">
  <div class="container  md:max-w-[870px]  bg-white rounded-lg m-auto shadow-2xl shadow-gray-500 max-sm:rounded-none ">
   <div class="flex items-center justify-between h-[630px] max-sm:block">
    <div class={`w-[50%]  h-full bg-[url(/bgOne.jpeg/)] bg-center bg-cover rounded-l-lg relative max-sm:w-full max-sm:rounded-none shadow-sm shadow-black`}>
        <div class="absolute left-0 top-0 w-full h-full bg-purple-900 bg-opacity-40 rounded-l-lg drop-shadow-2xl">
            <h1 class="text-2xl text-white font-bold w-[80%] absolute bottom-28 tracking-wide left-[50%] translate-x-[-50%] max-md:text-xl max-sm:text-3xl">Get Latest News From Our Fast News Services!</h1>
            <h1 class="text-2xl text-white font-bold  absolute bottom-10 right-10 tracking-wide max-md:text-xl max-sm:text-3xl">&#8377;299<sub class="text-sm ">/Month</sub></h1>
        </div>
    </div>
    <div class="px-10 bg-white max-md:px-6 max-sm:p-10">
        <h1 class="text-2xl font-bold">Registration Form</h1>
        <form action="#" class="mt-6">
            <div class=" relative">
                <label for="name">Full Name:</label>
            <input onchange="handleInput(event)" name="Name" type="text" placeholder="ex: Ayush Singh" class="input border py-2 px-4 mt-2 rounded-md placeholder:text-sm w-full shadow-sm"/>
            <i class="bi bi-person-fill text-2xl absolute right-2 top-9"></i>
            </div>
            <div class=" relative mt-6">
                <label for="name">Your Email:</label>
            <input onchange="handleInput(event)" name="EmailID" type="text" class="input border mt-2 py-2 px-4 rounded-md placeholder:text-sm w-full shadow-sm"/>
            </div>
            <div class=" relative mt-6">
                <label for="name">Password:</label>
            <input onchange="handleInput(event)" name="Password" type="password" class="input  border mt-2 py-2 px-4 rounded-md placeholder:text-sm w-full shadow-sm"/>
            <i onclick="handlePass(event)" class="bi bi-eye-slash text-2xl absolute right-2 top-9 cursor-pointer"></i>
            </div>
            <div class=" relative mt-6">
                <label for="name">Confirm Password:</label>
            <input onchange="handleInput(event)" name="ConfirmPassword" type="password" class="input border  mt-2 py-2 px-4 rounded-md placeholder:text-sm w-full shadow-sm "/>
            <i onclick="handlePass(event)" class="bi bi-eye-slash text-2xl absolute right-2 top-9 cursor-pointer"></i>
            </div>
           <div class="flex  items-start justify-start gap-4 mt-5 checkBox">
            
            <input type="checkbox" name="" id="check" class=""/>
            <label for="check" class="relative flex justify-center items-center mt-1"><i class="bi bi-check w-full h-full"></i></label>
            <div class="text-sm">
                <p>By signing up,you agree to the</p>
                <a href="#" class="underline text-blue-600 mt-1 block">Play Terms of Service</a>
            </div>
           </div>
         <div class="mt-6 flex justify-start items-center space-x-5  flex-wrap max-[370px]:flex-col max-[370px]:gap-2 max-[370px]:space-x-0">
            <button onclick="handleRegister(event)" class="text-sm bg-blue-600 rounded-sm px-8 py-2 font-semibold text-white border-2 border-blue-600 hover:border-blue-800  hover:bg-blue-800 transition max-sm:flex-grow">Register</button>
            <span class="text-sm font-semibold max-sm:flex-grow text-center">OR</span>
            <a href="login.html" class="text-sm border-2 border-black rounded-sm px-8 py-2 font-semibold hover:text-white hover:bg-black transition max-sm:flex-grow">LOGIN</a>
         </div>
        </form>
    </div>
   </div>
  </div>

    </div>
  )
}

export default Signup
