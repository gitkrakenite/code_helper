import { useState } from "react";

const Hero = () => {
  return (
    <div className="w-full h-[44vh] relative">
      <img
        src="https://images.pexels.com/photos/13458334/pexels-photo-13458334.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        alt="Background Placeholder"
        className="w-full h-[44vh] object-cover rounded-xl"
      />

      {/* overlay div */}
      <div className="absolute top-0 left-0 w-full rounded-xl h-full bg-[rgba(0,0,0,.5)]" />
      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white">
        <h2 className=" text-3xl text-center sm:text-4xl md:text-6xl font-bold mb-6">
          Hello There. Welcome
        </h2>
        <h2 className=" text-2xl text-center md:text-4xl font-bolder mb-4">
          To Code Helper
        </h2>
        <p className=" text-xl text-center md:text-2xl  mb-4">
          Better, Easier, Convenient Resources
        </p>
      </div>
    </div>
  );
};

export default Hero;
