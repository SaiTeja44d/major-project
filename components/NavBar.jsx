import Link from 'next/link';
import React from 'react';
import { GiStreetLight } from "react-icons/gi";

const NavBar = () => {
    return (
        <div className='fixed top-0 h-16 w-full shadow-gray-500 shadow-md bg-gradient-to-b from-orange-500 via-y-dark to-y-dark p-6 text-white flex items-center justify-between'>
            <div className='flex flex-row justify-start gap-4 items-center w-[25%]'>
                <div className='bg-gradient-to-t to-y-light from-white rounded-full p-2 pr-1 w-12 h-12 flex items-center justify-center shadow-md shadow-orange-900'><GiStreetLight className='text-orange-600 text-5xl'/></div>
                <h1 className='text-2xl font-semibold'>STREET LIGHT MANAGER</h1>
            </div>
            <div className='flex flex-row items-center gap-4 w-[50%] justify-end'>
                <button type='button' className='transition-all duration-300 flex justify-center items-center px-2 py-1 border border-transparent rounded-lg hover:bg-y-gold hover:border-y-gold hover:text-black'><Link href='/' to='/'>Home</Link></button>
                <button type='button' className='transition-all duration-300 flex justify-center items-center px-2 py-1 border border-transparent rounded-lg hover:bg-y-gold hover:border-y-gold hover:text-black'><Link href='/' to='/'>About</Link></button>
                <button type='button' className='transition-all duration-300 flex justify-center items-center px-2 py-1 border border-transparent rounded-lg hover:bg-y-gold hover:border-y-gold hover:text-black'><Link href='/' to='/'>DashBoard</Link></button>
                <button type='button' className='transition-all duration-300 flex justify-center items-center px-2 py-1 border border-transparent rounded-lg hover:bg-y-gold hover:border-y-gold hover:text-black'><Link href='/' to='/'>Logout</Link></button>
            </div>
        </div>
    )
}

export default NavBar