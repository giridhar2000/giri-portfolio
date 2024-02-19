import React from 'react'
import Link from 'next/link'

const Tiles = (props) => {
    return (
        <div className="flex items-center border-solid border-2 border-gray-600 rounded-lg px-5 py-5 mx-auto my-10 w-full justify-between hover:scale-110 cursor-pointer transition-all">
            <div className="flex flex-col">
                <h2 className="font-bold text-xl">{props.projectName}</h2>
                <h3 className="text-slate-500 font-bold">{props.techStack}</h3>
            </div>
            <div className='flex gap-7'>
                <Link href={props.link} target='_blank'>
                    <button className='flex items-center gap-2'>
                        <span>View</span>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Tiles