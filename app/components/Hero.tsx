"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
return ( <section
   id="home"
   className="min-h-screen flex items-center"
 > <div className="max-w-6xl mx-auto px-6 w-full"> <div className="grid md:grid-cols-2 gap-16 items-center">

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-cyan-400 text-lg mb-4">
          Hello, I'm
        </p>

        <h1 className="text-6xl md:text-7xl font-bold leading-tight">
          Mustafa Salah
        </h1>

        <h2 className="text-2xl md:text-3xl text-slate-400 mt-4">
          Flutter Developer & Front-End Engineer
        </h2>

        <p className="mt-6 text-slate-300 max-w-xl leading-8">
          I build modern mobile applications using Flutter
          and responsive web applications using React,
          Next.js and modern technologies.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-xl font-medium"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-slate-700 hover:border-cyan-500 transition px-6 py-3 rounded-xl"
          >
            Contact Me
          </a>

          <a
            href="/cv.pdf"
            className="border border-slate-700 hover:border-cyan-500 transition px-6 py-3 rounded-xl"
          >
            Download CV
          </a>
        </div>

        <div className="flex gap-6 mt-8">
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            className="text-slate-400 hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/YOUR_PROFILE"
            target="_blank"
            className="text-slate-400 hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>
        </div>

        <div className="flex gap-10 mt-10">
          <div>
            <h3 className="text-3xl font-bold text-cyan-400">
              4+
            </h3>

            <p className="text-slate-400">
              Projects
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-cyan-400">
              Flutter
            </h3>

            <p className="text-slate-400">
              Developer
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-cyan-400">
              React
            </h3>

            <p className="text-slate-400">
              Frontend
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

          <Image
            src="/images/profile.png"
            alt="Mustafa Salah"
            width={380}
            height={380}
            priority
            className="
              relative
              w-[320px]
              h-[320px]
              md:w-[380px]
              md:h-[380px]
              object-cover
              rounded-full
              border-4
              border-cyan-500
            "
          />
        </div>
      </motion.div>

    </div>
  </div>
</section>

);
}
