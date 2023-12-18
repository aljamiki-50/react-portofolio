import React, { useState, useEffect } from "react";
import liam from "../assets/liam.png";

const Section = () => {
  const [welcomeWords, setWelcomeWords] = useState([
    "Welcome",
    "привет",
    "Привіт",
    "مَرْحَبًا",
    // Add more words as needed
  ]);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex === welcomeWords.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [welcomeWords]);

  return (
    <div className=" relative
    s:flex s:flex-cols-1 s:gap-x-[70px] s:justify-center s:align-middle
    lg:flex lg:flex-cols-1 lg:gap-x-[70px] lg:justify-center lg:align-middle
     xl:grid xl:grid-cols-2 xl:gap-x-[70px] xl:items-center
      items-center  justify-between ">
      {/* <div className=" bg-red-400 p-16 w-full  -z-0 opacity-40 absolute "></div> */}
      <div className="text-left flex -z-10  xl:text-center   flex-col gap-y-10">
        <h1 className="   antialiased font-popins text-5xl
         md:text-5xl -z-10 table-caption  leading-[90px] flex-col
         xl:leading-[80px] xl:text-center xl:text-3xl
         lg:leading-[80px] lg:text-center lg:text-3xl
        s:leading-[80px] s:text-center s:text-xl ">
          <span className="  
          animate-pingy  transition-color text-5xl    text-cyan-200 uppercase">
            {welcomeWords[currentWordIndex]}
          </span>
          <br /> <span>&#x1F44B; </span> To My Personal Space!
        </h1>
        <img
          src={liam}
          className="     animate-bouncy hidden 
           s:mt-10 s:flex s:rounded-full
          
            bg-white w-full h-full "
          alt=""
        />
        <h2 className=" xl:text-2xl
        s:text-center  antialiased font-popins  ">🚀 Aspiring Junior Full-Stack Developer </h2>
        <p className="  antialiased font-popins md:w-[50%]  
         lg:text-center lg:w-[90%]
         xl:w-[90%]   xl:text-center  font md:leading-8 sm:leading-1 s:w-[100%]  s:text-center   ">
          💻 Passionate about Building Innovative Solutions
        </p>
        <button
          className="  
          hidden
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
      <div className="hidden  lg:block xl:block" >
        <img src={liam} className=" xl:scale-90 xl:animate-bouncy
        lg:scale-90 lg:animate-bouncy
         text-center w-[80%]" alt="" />
      </div>
    </div>
  );
};

export default Section;
