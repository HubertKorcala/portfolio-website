"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:pt-16 lg:pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="sm:col-span-7 lg:col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-text-100 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I{`'`}m{` `}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Hubert", 1000, "Web Developer", 1000]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"></p>
          <div>
            <Link
              href="#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full  mr-4  bg-gradient-to-br from-secondary-400 via-primary-500 to-third-600 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <a 
              href="/Hubert_Korcala_Resume.pdf" 
              download="Hubert_Korcala_Resume.pdf"
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-secondary-500 via-primary-500 to-third-500 hover:bg-slate-800 text-white mt-3 inline-block"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className=" w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative flex justify-center items-center">
            <div className="rounded-full w-full h-full z-0 absolute bg-blue-600 blur-3xl"></div>
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              width={300}
              height={300}
              className="rounded-full absolute transform -translate-x-1/2 z-10 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
