import Tiles from '@/components/Tiles'
import React from 'react'

const Projects = () => {
  const projects = [
    {
      projectName: 'Vendor Contacts',
      techStack: 'ReactJS Supabase',
      link: 'https://vendorcontacts.io/'
    },
    {
      projectName: 'Block chain for Imapact',
      techStack: 'MERN',
      link: 'https://bfi-iota.vercel.app/'
    },
    {
      projectName: 'Blog website',
      techStack: 'MERN | MEAN | Next.js',
      link: 'https://memoir-alpha.vercel.app/'
    },
    {
      projectName: 'Transparency Portal UI',
      techStack: 'ReactJS',
      link: '/'
    },
    {
      projectName: 'House of Models',
      techStack: 'ReactJS',
      link: 'https://copperx-five.vercel.app/'
    },
    {
      projectName: 'Endless Design',
      techStack: 'ReactJS',
      link: 'https://endless-design.vercel.app/'
    }
  ]
  return (
    <div className='text-white mx-auto my-5 px-2 w-3/4'>
      <span className='font-extrabold text-[clamp(3rem,12vmin,12rem)] pt-5 text-slate-300'>
        Projects
      </span>
      <span>
        <h1>The tech projects I've worked on</h1>
      </span>
      {projects.map((val, index) => (
        <Tiles key={index} projectName={val.projectName} techStack={val.techStack} link={val.link}/>
      ))}

    </div>
  )
}

export default Projects