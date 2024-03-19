import React from "react";
import Logo from "../assets/nLogo.png";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

const Home = () => {
  return (
    <div>
      {/* wrapper */}
      <div className=" mx-[10px] sm:mx-[2em]  md:mx-[3em]  lg:mx-[5em] py-[1em]">
        {/* topbar */}
        <div className="mb-[3em]">
          <div className="h-[60px] w-[60px]">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        {/* hero */}
        <div className="mb-[3em]">
          <Hero />
        </div>
        {/* categories */}
        <div className="mb-[3em]">
          <Categories />
        </div>
        <div>
          <h2 className="text-zinc-400 font-bold text-lg sm:text-4xl mb-[1em]">
            Contact Us
          </h2>
          <div className="text-zinc-300 flex flex-col  sm:flex-row gap-16 justify-start">
            <div className="bg-zinc-800 p-5 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Mr. Edwin Osoro</h2>
              <p className="text-sm mb-4">Senior Lecturer Daystar Univerity</p>
              <div className="mb-4">
                <a
                  href="mailto:eosoro@daystar.ac.ke"
                  className="flex items-center gap-2"
                >
                  <IoMailOutline className="text-purple-600 text-xl" />
                  <p className="hover:text-purple-600">Email Now</p>
                </a>
              </div>
              <div className="mb-4">
                <a
                  href="tel:+254 712 329618"
                  className="flex items-center gap-2"
                >
                  <MdOutlinePhone className="text-purple-600 text-xl" />
                  <p className="hover:text-purple-600">Call Now</p>
                </a>
              </div>
            </div>
            {/*  */}
            <div className="bg-zinc-800 p-5 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Mr. John Steele</h2>
              <p className="text-sm mb-4">Full Stack Software Engineer</p>
              <div className="mb-4">
                <a
                  href="mailto:eosoro@daystar.ac.ke"
                  className="flex items-center gap-2"
                >
                  <IoMailOutline className="text-purple-600 text-xl" />
                  <p className="hover:text-purple-600">Email Now</p>
                </a>
              </div>
              <div className="mb-4">
                <a
                  href="https://www.linkedin.com/in/john-nderitu-8b38aa244/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <CiLinkedin className="text-purple-600 text-2xl" />
                  <p className="hover:text-purple-600">Connect</p>
                </a>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
