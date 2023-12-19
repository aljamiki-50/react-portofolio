import React from "react";
import { GrTechnology } from "react-icons/gr";
import { FaPhp, FaReact } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import { FaLaravel } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiLivewire } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { SiPhp } from "react-icons/si";
import { SiNextui } from "react-icons/si";
import { SiAltiumdesigner } from "react-icons/si";
// import { SiTailwindcss } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { DiMaterializecss } from "react-icons/di";
import { FaFigma } from "react-icons/fa6";
import { SiAlpinedotjs, SiTailwindcss } from "react-icons/si";


import "typeface-poppins";
import "typeface-roboto";

const Techs = () => {
  return (
    <div className=" scroll-smooth " id="Tech">
      <div className="mt-10  s:mt-[60px]
      lg:pb-4  lg:border-b-4  lg:border-b-accent/70
      xl:pb-4  xl:border-b-4  xl:border-b-accent/70

      ">
        <div className="flex ps-4 md:mb-6
          flex-col">
          <h1 className=" flex gap-x-2  left-0 text-left py-6 text-7xl font-bold decoreation-4 text-{#0c0e14}  decoration-{#6687D7}   ">
            <GrTechnology />
            <span> :-</span>
            {/* Technologies */}
          </h1>
          <p className=" xl:w-[50%] xl:pb-4  font-poppins   antialiased s:hidden text-left ">
            In the "Tech" section of my portfolio, I showcase a experience with
            React for creating dynamic and user-friendly interfaces. On the
            backend, I've worked with PHP Laravel, LiveWire to build reliable
            and interactive features. 🛠️ As a junior developer, I'm continually
            honing my skills and excited about the journey ahead in the world of
            web development! 🚀
          </p>
        </div>
        {/* The  DIV OF DIFFRENT STACKS   */}
        <div
          className=" s:grid s:grid-rows-3 s:gap-y-12
           md:gap-y-10 md:flex md:flex-col
           
          
          py-4 xl:grid xl:grid-cols-3  lg:grid lg:grid-cols-3  "
        >
          {/* startig the base of the front end skills sets */}
          <div
            className=" flex flex-col 
          
            
           
             gap-y-4 items-center
              md:items-center md:gap-y-4
              s:mb-4 md:mb-4   "
          >
            <div
              className=" 

              md:flex md:self-start 
              md:gap-x-4
             
            s:flex s:self-start   "
            >
              <DiReact
                className="   animate-pulse fill-red-800"
                size="3rem"
              />
              <h3
                className=" antialiased font-popins hidden
              
               s:flex text-left text-4xl font-semibold md:flex "
              >
                Front End :
              </h3>
            </div>
            <h3 className="  antialiased font-popins s:hidden text-left text-4xl font-semibold md:hidden ">
              Front End :
            </h3>
            <ul
              className=" flex xl:flex-col xl:gap-y-5 
             lg:flex-col lg:gap-y-5  s:gap-x-4  md:gap-x-10  md:flex-2   "
            >
              <li className=" hover:shadow-3xl  ">
                <FaHtml5 className=" fill-white-800" title="Html" size="3rem" />
              </li>
              
              <li className=" hover:shadow-3xl  ">
                <FaLaravel className=" fill-red-800"  title="Laravel" size="3rem" />
              </li>
              <li className=" hover:shadow-3xl  ">
                <FaReact className=" fill-cyan-800 "  title="React" size="3rem" />
              </li>
              <li className=" hover:shadow-3xl  ">
                <SiLivewire className=" fill-pink-600 "  title="Livewire" size="3rem" />

              </li>
              <li className=" hover:shadow-3xl  ">
                <SiAlpinedotjs className=" fill-pink-200 "  title="Alpinedotjs" size="3rem" />

              </li>
            </ul>
            <div className="  s:border-b-8  s:border-b-orange-600 
            md:w-[50%] md:my-0  md:pt-8    md:border-b-8  md:border-b-orange-600 
            s:my-0  s:pt-8   mx-auto s:w-[50%] xl:hidden " />
          </div>
          {/* startig the base of the BACK END   skills sets */}
          <div
            className=" flex flex-col   gap-y-4 items-center
           md:items-center
           s:mb-4  md:mb-4   "
          >
            <div
              className="  md:flex md:gap-x-4 md:self-start
            s:flex s:gap-x-2 s:self-start "
            >
              <FaDatabase
                className=" 

                

                animate-pulse fill-slate-400"
                size="3rem"
              />
              <h3 className="  antialiased font-popins hidden s:flex text-left text-4xl font-semibold md:flex  ">
                Back End :
              </h3>
            </div>
            <h3 className="  antialiased font-popins s:hidden text-left text-4xl font-semibold md:hidden  ">
              Back End :
            </h3>
            <ul className=" flex xl:flex-col xl:gap-y-5   lg:flex-col lg:gap-y-5 s:gap-x-4  md:gap-x-10    ">
              <li className=" hover:shadow-3xl  ">
                <FaHtml5 className=" fill-white-800" size="3rem" />
              </li>
              <li className=" hover:shadow-3xl  ">
                <SiAlpinedotjs className=" fill-pink-200 "  title="Alpinedotjs" size="3rem" />

              </li>
              <li className=" hover:shadow-3xl  ">
                <FaPhp className=" fill-cyan-800 "  size="3rem" />
              </li>
              <li className=" hover:shadow-3xl  ">
                <FaLaravel className="  fill-red-800  "  title="Laravel" size="3rem" />
              </li>
              <li className=" hover:shadow-3xl  ">
                <SiLivewire className=" fill-pink-600 "  title="Livewire" size="3rem" />
              </li>
            </ul>
            <div className="  s:border-b-8  s:border-b-orange-600 
            md:w-[50%] md:my-0  md:pt-8    md:border-b-8  md:border-b-orange-600 
            
            s:my-0  s:pt-8   mx-auto s:w-[50%] xl:hidden " />
          </div>
          {/* <div className="  s:border-b-8  s:border-b-orange-600  mx-auto s:w-[50%] xl:hidden  " /> */}

          {/* startig the base of the UI / UX  BASE   skills sets */}
          <div
            className=" flex flex-col 
            md:items-center md:flex-1
          
             gap-y-4 items-center s:mb-4   "
          >
            <div
              className=" s:flex s:gap-x-2 s:self-start
            md:flex md:self-start md:gap-x-4
            "
            >
              <SiAltiumdesigner
                className=" animate-pulse fill-slate-400"
                size="3rem"
              />
              <h3 className=" hidden s:flex text-left text-4xl font-semibold md:flex  ">
                UI / UX :
              </h3>
            </div>
            <h3 className="  antialiased font-popins s:hidden text-left text-4xl font-semibold md:hidden  ">
              UI / UX :
            </h3>
            <ul className=" flex xl:flex-col xl:gap-y-5 s:gap-x-4 md:gap-x-10   lg:flex-col lg:gap-y-5    ">
              <li className=" hover:shadow-3xl  ">
                <DiMaterializecss className=" fill-indigo-300"  title="Materializecss" size="3rem" />
              </li>
              <li className=" hover:shadow-3xl  ">
                <SiTailwindcss className=" fill-cyan-800 "  title="TailwindCss"  size="3rem" />
              </li>
              <li className=" hover:shadow-3xl  ">
                <BsBootstrap className="  fill-red-600  "  title="BootStrap" size="3rem" />
              </li>
              <li className=" hover:shadow-3xl  ">
                <FaFigma className=" fill-pink-200 "  title="Figma" icon="Figma
                " size="3rem" />
              </li>
            </ul>
            <div
              className="  s:border-b-8  s:border-b-orange-600 s:my-0  s:pt-8 
            md:border-b-8  md:border-b-orange-600 md:my-0  md:pt-8  md:w-[50%]

             mx-auto s:w-[50%] xl:hidden "
            />
          </div>
        </div>
        {/* The END  DIV OF DIFFRENT STACKS   */}
      </div>
    </div>
  );
};

export default Techs;
