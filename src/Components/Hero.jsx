import React from "react";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="pt-[80px] hero pb-[50px] w-full text-white">
      <div className="container grid lg:grid-cols-2 gap-10 ">
        <div className="flex text-center flex-col gap-10 justify-center items-center">
          <h3 className="text-xl text-green-700 uppercase font-bold text-center">
            an alien world-conqueror and the leader of Warworld
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold leading-relaxed">
            Mongul is an alien world-conqueror and the leader of Warworld. His
            brutal and merciless nature make him an enemy to Superman and a
            threat to the larger universe.
          </h1>
          <div className="flex flex-col md:justify-between w-full md:flex-row gap-5">
            <a
              href=""
              className="px-6 py-3 border border-green-700 rounded-3xl font-semibold capitalize hover:text-white hover:bg-grewnborder-green-700"
            >
              telegram
            </a>
            <a
              href=""
              className="px-6 py-3 border border-green-700 bg-green-700 hover:bg-transparent hover:border-white rounded-3xl font-semibold capitalize hover:text-white hover:bg-grewnborder-green-700"
            >
              twitter
            </a>
          </div>
        </div>
        <img src={logo} alt="" className="rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
