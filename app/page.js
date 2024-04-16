"use client";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/Lamp";
import About from "./about/About";
import Projects from "./projects/Projects";

export default function Home() {
  return (
    <div>
      <div>
        <LampContainer>
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: -30 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            <h1 className="mb-2 font-bold text-slate-300">Giridhar</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: -30 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-4 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            <h1
              className="bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 
          bg-clip-text "
            >
              Full Stack Developer
            </h1>
          </motion.div>
        </LampContainer>
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div className="my-[12rem]" id="About">
        <About />
      </div>
    </div>
  );
}
