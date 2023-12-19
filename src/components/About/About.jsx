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
import { SiTailwindcss } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { DiMaterializecss } from "react-icons/di";
import { FaFigma } from "react-icons/fa6";
import { SiAboutdotme } from "react-icons/si";

const About = () => {
  return (
    <div id="About">
      <div className="mt-10 font-poppins ">
        <div className="flex ps-4  flex-col">
          <h1 className=" flex gap-x-2  left-0 text-left py-6 text-7xl font-bold decoreation-4 text-{#0c0e14}  decoration-{#6687D7}   ">
            <SiAboutdotme className="" />
            <span className="text-center"> :-</span>
            {/* Technologies */}
          </h1>
          <p className=" font-poppins antialiased   s:flex text-left prose-xl   italic pb-4  
         lg:pb-4  lg:border-b-4  lg:border-b-accent/70
         xl:pb-4  xl:border-b-4  xl:border-b-accent/70  ">
            Am  someone who enjoys
            engaging in meaningful and insightful conversations with others. I
            thrive on exploring a wide range of topics, from technology and
            science to arts and personal development. With a curiosity-driven
            mindset, I appreciate the opportunity to learn and share knowledge if i could  .
            A friendly and approachable individual, I find joy in connecting
            with others and discovering new perspectives.  

          </p>
        </div>
        {/* The  BASE OF ABOUT ME SECTOIN    */}
        <div className="  hidden  xl:gap-0   s:grid-cols-1 s:gap-x-4 s:px-1  ps-4  ring-indigo-700 py-4 xl:hidden xl:grid-cols-3  lg:hidden lg:grid-cols-3  ">
          {/* startig the base of the ABOUT ME YEAR SEC  skills sets */}
          <div className=" flex flex-col xl:w-[40%] s:w-[100%]   ring-2   gap-y-4 items-center s:mb-4 md:mb-4   ">
            <div className="   self-start relative flex flex-row xl:text-left xl:relative    align-middle">
              <h1 className="">2017</h1>
              <span className=" block  border-b-[5px] w-[100%]   h-3  border-solid border-accent absolute left-12  s:hidden" />
            </div>
            <div className="self-start  list-none">
              <li className="text-left"> Lorem ipsum dolor, </li>
            </div>
          </div>

          <div className=" flex flex-col xl:w-[40%] s:w-[100%]   ring-2   gap-y-4 items-center s:mb-4 md:mb-4   ">
            <div className="   self-start relative flex flex-row xl:text-left xl:relative    align-middle">
              <h1 className="">2017</h1>
              <span className=" block  border-b-[5px] w-[100%]   h-3  border-solid border-accent absolute left-12  s:hidden" />
            </div>
            <div className="self-start  list-none">
              <li className="text-left">Lorem ipsum dolor, </li>
            </div>
          </div>

          <div className=" flex flex-col xl:w-[40%] s:w-[100%]   ring-2   gap-y-4 items-center s:mb-4 md:mb-4   ">
            <div className="   self-start relative flex flex-row xl:text-left xl:relative    align-middle">
              <h1 className="">2017</h1>
              <span className=" block  border-b-[5px] w-[100%]   h-3  border-solid border-accent absolute left-12  s:hidden" />
            </div>
            <div className="self-start  list-none">
              <li className="text-left">Lorem ipsum dolor, </li>
            </div>
          </div>
        </div>

        {/* The END  DIV OF DIFFRENT STACKS   */}
      </div>
    </div>
  );
};

export default About;
