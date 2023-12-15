import React from "react";
import  liam from "../assets/liam.png"

const Section = () => {
  return (
    <div className=" relative ">
      {/* <div className=" bg-red-400 p-16 w-full  -z-0 opacity-40 absolute "></div> */}
      <div className="text-left flex z-10   flex-col gap-y-10">
        <h1 className=" text-7xl md:text-5xl   s:text-xl ">
          Welcome To <br /> My Personal Portfolio
        </h1>
        <img src={liam} className="  s:mt-10  animate-bouncy hidden s:flex s:rounded-full bg-white w-full h-full " alt="" />
        <p className=" md:w-[50%] lg:w-[50%] antialiased md:leading-8 sm:leading-1 sm:w-[100%] s:hidden  ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, ipsa!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, ipsa!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, ipsa!
        </p>
        <button
          className="  
          s:hidden
         py-4 px-8 ring-2 
          w-max rounded-[30px] 
           tracking-wide
           hover:tracking-[.3em]
           hover:antialiased
          
        
          hover:scale-105
          hover:transition-scale-105
           hover:duration-700
           transition-all
           hvoer:leading
            ring-accent
            bg-gradient-to-r from-sky-500 to bg-cayan-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Section;
