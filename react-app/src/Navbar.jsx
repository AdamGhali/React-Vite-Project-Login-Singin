import React from 'react'
import 'flowbite';
const Navbar = () => {
   
  return (
    <div >
      


<nav class="bg-black opacity-40 p-4 fixed-top ">
  <div class="max-w-screen-xl   flex flex-wrap items-center justify-between mx-auto ">
  <a href="https://flowbite.com/" class="text-white flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <div class="flex  md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <button >
    <ul class="flex flex-col font-medium  md:p-0   rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
   
      <li>
        <a href="/login" class="block px-3 text-red-900 rounded hover:bg-gray-100 "> Login </a>
      </li>
      <li>
        <a href="/register" class="block px-3 text-red-900 rounded hover:bg-gray-100 "> Register </a>
      </li>
     
    </ul>
    </button>
  </div>
  <div class="items-center  justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium  md:p-0   rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    <li>
        <a href="/home" class="block  px-3 text-red-600 rounded hover:bg-gray-800 md:hover:bg-transparent " aria-current="page"> HOME </a>
      </li>
      <li>
        <a href="/about" class="block  px-3 text-red-600 rounded hover:bg-gray-600 md:hover:bg-transparent "> About</a>
      </li>
      <li>
        <a href="/booking" class="block  px-3 text-red-600 rounded hover:bg-gray-200 md:hover:bg-transparent "> BOOKING </a>
      </li>
     
      
    </ul>
  </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar
