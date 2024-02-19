import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='mx-auto my-5 flex justify-between p-4 px-5 w-3/4 items-center text-white flex-row max-sm:flex-col max-sm:h-40'>
            <div className='flex justify-between w-1/5 max-sm:w-full '>
                <span>Giridhar</span>
                <span>/</span>
                <span>&#169; 2024 Giridhar</span>
            </div>
            <div className='flex justify-between w-2/12 items-center flex-row max-sm:w-[70%]'>
                <Link href={'/about'}><span className='cursor-pointer'>About</span></Link>/
                <Link href={'/projects'}><span className='cursor-pointer'>Projects</span></Link>
            </div>
            <div className='cursor-pointer' >
                <a href="https://github.com/giridhar2000" target='_blank'><FaGithub /></a>
            </div>
        </div>
    )
}

export default Footer