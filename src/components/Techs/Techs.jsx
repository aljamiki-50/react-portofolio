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







const Techs = () => {
  return (
    <div>
      <div className="mt-10 ring-4 ring-red-600">
        <div className="flex ps-4  flex-col">
          <h1 className=" flex gap-x-2  left-0 text-left py-6 text-7xl font-bold decoreation-4 text-{#0c0e14}  decoration-{#6687D7}   ">
            <GrTechnology />
            <span> :-</span>
            {/* Technologies */}
          </h1>
          <p className=" xl:w-[50%]  s:hidden text-left ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            explicabo esse! Sit libero fugiat voluptates. Nemo sapiente
            perferendis ipsa quaerat eos saepe ipsam? Illo rem dolore nemo
            obcaecati aut omnis!
          </p>
        </div>
        {/* The  DIV OF DIFFRENT STACKS   */}
        <div className="  ring-indigo-700 py-4 xl:grid xl:grid-cols-3  lg:grid lg:grid-cols-3  ">
          {/* startig the base of the front end skills sets */}
          <div className=" flex flex-col ring-2   gap-y-4 items-center s:mb-4 md:mb-4   ">
            <div className=" ">
              <DiReact className=" animate-pulse fill-red-800" size="3rem" />
            </div>
            <h3 className=" text-left text-4xl font-semibold md:hidden ">Front End</h3>
            <ul className=" flex xl:flex-col xl:gap-y-5  lg:flex-col lg:gap-y-5  s:gap-x-4  md:gap-x-10    ">
              <li className=" hover:shadow-3xl  " >
                <FaHtml5  className=" fill-white-800" size="3rem" />
              </li>
              <li className=" hover:shadow-3xl  ">
                <FaLaravel  className=" fill-red-800" size="3rem" />
              </li>
              <li className=" hover:shadow-3xl  ">
                <FaReact  className=" fill-cyan-800 " size="3rem" />
              </li>
              <li className=" hover:shadow-3xl  ">
                <SiLivewire  className=" fill-pink-600 " size="3rem" />
              </li>
            </ul>
          </div>
          {/* startig the base of the BACK END   skills sets */}
          <div className=" flex flex-col ring-2   gap-y-4 items-center s:mb-4  md:mb-4   ">
            <div className=" ">
              <FaDatabase className=" animate-pulse fill-slate-400" size="3rem" />
            </div>
            <h3 className=" text-left text-4xl font-semibold md:hidden  ">Back End</h3>
            <ul className=" flex xl:flex-col xl:gap-y-5   lg:flex-col lg:gap-y-5 s:gap-x-4  md:gap-x-10    ">
              <li className=" hover:shadow-3xl  " >
                <FaHtml5  className=" fill-white-800" size="3rem" />
              </li>
              <li className=" hover:shadow-3xl  ">
                <FaPhp  className=" fill-cyan-800 " size="3rem" />
              </li>
              <li className=" hover:shadow-3xl  ">
                <FaLaravel  className="  fill-red-800  " size="3rem" />
              </li>
              <li className=" hover:shadow-3xl  ">
                <SiLivewire  className=" fill-pink-600 " size="3rem" />
              </li>
            </ul>
          </div>
          {/* startig the base of the UI / UX  BASE   skills sets */}
          <div className=" flex flex-col ring-2   gap-y-4 items-center s:mb-4   ">
            <div className=" ">
              <SiAltiumdesigner className=" animate-pulse fill-slate-400" size="3rem" />
            </div>
            <h3 className=" text-left text-4xl font-semibold md:hidden  ">UI / UX</h3>
            <ul className=" flex xl:flex-col xl:gap-y-5 s:gap-x-4 md:gap-x-10   lg:flex-col lg:gap-y-5    ">
              <li className=" hover:shadow-3xl  " >
                <DiMaterializecss  className=" fill-indigo-300" size="3rem" />
              </li>
              <li className=" hover:shadow-3xl  ">
                <SiTailwindcss  className=" fill-cyan-800 " size="3rem" />
              </li>
              <li className=" hover:shadow-3xl  ">
                <BsBootstrap  className="  fill-red-600  " size="3rem" />
              </li>
              <li className=" hover:shadow-3xl  ">
                <FaFigma  className=" fill-pink-200 " size="3rem" />
              </li>
            </ul>
          </div>
        </div>
        {/* The END  DIV OF DIFFRENT STACKS   */}
      </div>
    </div>
  );
};

export default Techs;
