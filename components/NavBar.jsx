import Link from 'next/link';
import React from 'react';
import { GiStreetLight } from "react-icons/gi";
import icon from '../favicon.ico'
import Image from 'next/image';
const NavBar = () => {
    return (
        <div className='font-sans fixed top-0 h-16 w-full shadow-gray-500 shadow-md bg-gradient-to-b from-orange-500 via-y-dark to-y-dark p-6 text-white flex items-center justify-between z-30'>
            <div className='flex flex-row justify-start gap-4 items-center w-[30%]'>
                {/* <div className='bg-gradient-to-t to-y-light from-white rounded-full p-2 pr-1 w-12 h-12 flex items-center justify-center shadow-md shadow-orange-900'><GiStreetLight className='text-orange-600 text-5xl'/></div> */}
                <div className='w-12 h-12 rounded-full bg-transparent  shadow-md shadow-orange-900 overflow-hidden object-contain flex items-center justify-center'><Image src={icon} alt='icon' className='w-12 h-12 rounded-full'></Image></div>
                <h1 className='max-lg:hidden text-2xl font-semibold'>NITE OWL</h1>
            </div>
            <div className='flex flex-row items-center gap-1 md:gap-4 w-[50%] justify-end'>
                <button type='button' className='transition-all duration-300 flex justify-center items-center px-2 py-1 border border-transparent rounded-lg bg-yellow-100 bg-opacity-0 hover:bg-opacity-30 hover:border-opacity-30 hover:text-black max-md:text-xs'><Link href='/home' to='/home'>Home</Link></button>
                <button type='button' className='transition-all duration-300 flex justify-center items-center px-2 py-1 border border-transparent rounded-lg bg-yellow-100 bg-opacity-0 hover:bg-opacity-30 hover:border-opacity-30 hover:text-black max-md:text-xs'><Link href='/about' to='/about'>About</Link></button>
                <button type='button' className='transition-all duration-300 flex justify-center items-center px-2 py-1 border border-transparent rounded-lg bg-yellow-100 bg-opacity-0 hover:bg-opacity-30 hover:border-opacity-30 hover:text-black max-md:text-xs'><Link href='/dashboard' to='/dashboard'>DashBoard</Link></button>
                <button type='button' className='transition-all duration-300 flex justify-center items-center px-2 py-1 border border-transparent rounded-lg bg-yellow-100 bg-opacity-0 hover:bg-opacity-30 hover:border-opacity-30 hover:text-black max-md:text-xs'><Link href='/login' to='/login'>LogIn</Link></button>
            </div>
        </div>
    )
}

export default NavBar