import React from "react";

import Logo from "../assets/nLogo.png";
import { Link } from "react-router-dom";

import { CText } from "../resources/cresources";
import { CVideos } from "../resources/cresources";

const Cprog = () => {
  //search Function 2

  return (
    <div className=" mx-[10px] sm:mx-[2em]  md:mx-[3em]  lg:mx-[5em] py-[1em]">
      {/* wrapper */}
      <div>
        {/* topbar */}
        <div className="mb-[3em]">
          <Link to="/">
            <div className="h-[60px] w-[60px]">
              <img src={Logo} alt="logo" />
            </div>
          </Link>
        </div>

        {/* searchbar */}
        <div className="mt-[1em] mb-[3em]"></div>

        {/* className="flex gap-20" */}

        {/* video */}
        <h2 className="text-zinc-400 font-bold text-2xl mb-[1em]">
          Video Tutorials
        </h2>
        <div className="flex gap-10 flex-wrap mb-[3em]">
          {CVideos.map((item) => (
            <>
              {item.category === "video" && (
                <div className="video-container">
                  <div key={item.id}>
                    <div>
                      <iframe
                        className="responsive-iframe h-[400px] rounded-xl"
                        src={item.source}
                        title="Java Tutorial for Beginners"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>

        {/* text */}
        <h2 className="text-zinc-400 font-bold text-2xl mb-[1em]">
          Text Tutorials
        </h2>
        <div className="flex gap-20 flex-wrap pb-[3em]">
          {CText.map((item) => (
            <div className="bg-zinc-800 p-5 rounded-xl">
              {item.category === "text" && (
                <>
                  <div key={item.id}>
                    <div>
                      <h2 className="text-zinc-400 font-bold text-2xl mb-4">
                        {item.title}
                      </h2>
                      <a
                        href={item.source}
                        target="_blank"
                        rel="noreferrer"
                        className="text-center text-zinc-400 hover:text-purple-500"
                      >
                        Access Here
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cprog;
