'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Shapes from "@/components/Shapes";

export default function Home() {
  const component = useRef();
  const renderLetters = (name) => {
    if (!name) return;
    return name.split("").map((val, index) => {
      return (
        <span
          className={`names-animation names-animation-${index} inline-block opacity-0`}
          key={index}>
          {val}
        </span>
      )
    })
  }

  useEffect(() => {
    let cts = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(".names-animation", {
        x: -100,
        opacity: 0,
        rotate: -10
      }, {
        x: 0,
        opacity: 1,
        rotate: 0,
        ease: 'elastic.out(1,0.3)',
        duration: 1,
        transformOrigin: "left top",
        delay: 0.5,
        stagger: {
          each: 0.1,
          from: "random"
        }
      })

      tl.fromTo(".job-title", {
        y: 20,
        opacity: 0,
        scale: 1.2
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        ease: 'elastic.out(1,0.3)',
      })
    }, component)
    return () => cts.revert();
  }, [])

  return (
    <section ref={component} className="px-3 py-10 mx-auto my-0 md:px-6 md:py-8 lg:py-10">
      <div className="flex min-h-[70vh] items-center justify-evenly max-sm:flex-col-reverse max-sm:justify-end">
        <div className="col-start-1 md:row-start-1 pt-10 max-w-7x1">
          <h1 className="mb-8 text-[clamp(3rem,12vmin,12rem)] font-extrabold leading-none tracking-tighter">
            <span className="block text-slate-300">{renderLetters("GIRIDHAR")}</span>
          </h1>
          <span className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 
          bg-clip-text font-bold uppercase tracking-[.2rem] text-2xl text-transparent opacity-0 md:text-4xl">WEB-APP DEVELOPER</span>
        </div> 
          <Shapes />
      </div>
    </section>
  );
}
