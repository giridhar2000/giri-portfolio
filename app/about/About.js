"use client";
import React, { useEffect, useRef } from "react";

import { MdCircle } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import {
  TextRevealCard,
  TextRevealCardDescription,
} from "@/components/TextReveal";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const items = ["REACT", "NEXT.JS", "NODE.JS", "MONGODB"];
  const component = useRef();
  const imageRef = useRef();

  useEffect(() => {
    let cts = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        }
      );
    }, component);
    return () => cts.revert();
  });

  useEffect(() => {
    let cts = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".userimg",
        {
          z: -25,
          y: -25,
          opacity: 0,
        },
        {
          z: 0,
          y: 0,
          duration: 2.5,
          opacity: 1,
          ease: "elastic.out(1,0.2)",
        }
      );
    }, imageRef);

    const tl2 = gsap.timeline({
      scrollTrigger: {
        pin: true,
        start: "top bottom",
        end: "bottom top",
        scrub: 4,
      },
    });
    return () => cts.revert();
  });

  return (
    <>
      <div className="text-white mx-auto my-5 px-2 w-3/4">
        <div className="flex flex-col">
          <span className="font-extrabold text-[clamp(3rem,12vmin,12rem)] pt-5 text-slate-300">
            About Giri
          </span>
          <div className="flex items-center flex-col">
            <TextRevealCard
              text="You know the business"
              revealText="I know the chemistry "
            >
              {/* <TextRevealCardTitle>
                Sometimes, you just need to see it.
              </TextRevealCardTitle> */}
              <TextRevealCardDescription>
                <span className="text-xl mt-8 text-slate-300 text-justify">
                  Hey there! I'm Giri, a dedicated React enthusiast on a mission
                  to elevate digital experiences through innovative coding. With
                  a passion for crafting pixel-perfect interfaces and a knack
                  for problem-solving, I immerse myself in the intricacies of
                  React development to create seamless user interactions. With a
                  love for clean code and elegant design, I thrive on
                  transforming ideas into intuitive interfaces that leave a
                  lasting impact.
                </span>
              </TextRevealCardDescription>
              <br />
              <TextRevealCardDescription>
                <span className="text-xl text-slate-300 text-justify">
                  Driven by a curiosity to explore new horizons, I'm committed
                  to pushing the boundaries of what's possible in the
                  ever-evolving world of web development. When I'm not coding,
                  you'll find me experimenting with digital art or exploring the
                  latest in web animation.{" "}
                  <span className="font-bold text-yellow-300">
                    Join me as I continue to push the boundaries of what's
                    possible in the digital world!
                  </span>
                </span>
              </TextRevealCardDescription>
            </TextRevealCard>

            <div className="flex gap-5 mt-10">
              <Link
                href={"/resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                locale={false}
              >
                <button className="group relative flex w-fit text-slate-800 items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105">
                  <span className="absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
                  <span className="z-50 flex items-center gap-1">
                    Resume
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="inline-block"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                    </svg>
                  </span>
                </button>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/giridhar-b-1792a6189"}
                target="_blank"
              >
                <button className="group relative flex w-fit text-slate-800 items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105 ml-3 z-50">
                  <span className="absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
                  <span className="z-50 flex items-center gap-1">
                    Contact
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="inline-block"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white">
        <div className="mx-auto mt-[12rem] mb-10 w-3/4 ">
          <span className="font-extrabold text-[clamp(3rem,12vmin,12rem)] px-2 w-3/4 pt-5 text-slate-300">
            What I use
          </span>
        </div>
        <div className="mb-24 overflow-hidden" ref={component}>
          {items.map((val, index) => (
            <div
              key={index}
              className="flex tech-row items-center mb-8 my-12 justify-center gap-5 text-slate-500"
            >
              {Array.from({ length: 15 }, (_, index) => {
                var color = "rgb(255,255,255)";
                if (val === "REACT") color = "rgb(41, 216, 255)";
                if (val === "MONGODB") color = "rgb(10, 228, 72)";
                if (val === "NODE.JS") color = "rgb(255, 126, 51)";
                return (
                  <span
                    key={index}
                    className="tech-item text-8xl font-extrabold tracking-tighter flex items-center gap-5"
                  >
                    <span
                      style={{
                        color: index === 7 ? color : "inherit",
                      }}
                    >
                      {val}
                    </span>
                    <span className="text-3xl">
                      <MdCircle />
                    </span>
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto my-5 px-2 w-3/4">
        <span className="font-extrabold text-[clamp(3rem,12vmin,12rem)] pt-5 text-slate-300 ">
          Experience
        </span>
        <br />
        <br />
        <span className="font-extrabold text-[clamp(2rem,5vmin,5rem)] pt-5 text-slate-300 max-sm:text-[clamp(2rem,5vmin,5rem)]">
          Jr. Software Engineer - Cognizant
        </span>
        <br />
        <span className="text-slate-500 font-bold text-[clamp(2rem,3vmin,3rem)]  max-sm:text-[clamp(1rem,5vmin,5rem)]">
          2022 - present
        </span>
        <br />
        <br />
        <span className="font-extrabold text-[clamp(2rem,5vmin,5rem)] pt-5 text-slate-300 max-sm:text-[clamp(2rem,5vmin,5rem)]">
          Android App Development - UG/BE CSE
        </span>
        <br />
        <span className="text-slate-500 font-bold text-[clamp(2rem,3vmin,3rem)] max-sm:text-[clamp(1rem,5vmin,5rem)]">
          2022
        </span>
        <br />
        <br />
      </div>

      <div className="mx-auto my-5 px-2 w-3/4">
        <span className="font-extrabold text-[clamp(3rem,12vmin,12rem)] pt-5 text-slate-300">
          Education
        </span>
        <br />
        <br />
        <span className="font-extrabold text-[clamp(2rem,5vmin,5rem)] pt-5 text-slate-300 max-sm:text-[clamp(2rem,5vmin,5rem)]">
          Undergraduate
        </span>
        <br />
        <span className="text-slate-500 font-bold text-[clamp(2rem,3vmin,3rem)] max-sm:text-[clamp(1rem,5vmin,5rem)]">
          BE - CSE - 82.4%
        </span>
        <br />
        <br />
      </div>
    </>
  );
};

export default About;
