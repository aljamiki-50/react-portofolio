import React from "react";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.jpg";
import { FaGit, FaGithub } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiLivewire } from "react-icons/si";

const Projects = () => (
  <div className="  grid grid-cols-2  gap-x-4 gap-y-6  justify-center  mt-10 ring-4 px-10 py-12 md:grid md:grid-cols-1 md:gap-y-10 s:grid-cols-1 s:px-0 s:gap-y-12 s:ring-0     ">
    {/* It s the 1st project demo */}
    {/* It s the 1st project demo */}
    <div
      className="  
    antialiased  hover:shadow-3xl   hover:transition-all 
    hover:duration-1000 hover:ease-in-out rounded-3xl   
      flex flex-col  gap-y-10 text-center   ring-1 ring-accent
      md:rounded-tl-[30px] md:rounded-tr-[30px] 
      s:rounded-tl-[30px] s:rounded-tr-[30px]      "
    >
      <div className=" s:flex s:flex-col  s:pb-3   s:items-center gap-y-4  flex  justify-center   border-b-[5px] border-b-accent s:border-b-transparent       ">
        <img
          src={project1}
          className="  rounded-tr-3xl  rounded-tl-3xl   w-full
           s:rounded-tl-[30px] s:rounded-tr-[30px] 
           md:rounded-tl-[30px] md:rounded-tr-[30px] md:pt-[1.2px]   "
          alt="Project1"
        />

        <h1 className=" hidden s:block  font-bold text-5xl text-white-400/75 s:text-lg   ">
          Mern Meomories
        </h1>

        <div className=" liam hidden s:flex s:flex-row s:space-between s:gap-x-10   bg-transparent ">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className=" fill-blue-200" size={32} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsBrowserChrome
              className="  animate-pulse fill-rose-400 fill-"
              size={32}
            />
          </a>
        </div>

        {/* Tech bar which shows what F Wroks been applied in every and each   */}

        <div className="  hidden s:flex s:flex-row s:space-around s:gap-x-2    bg-transparent ">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTailwindcss className=" fill-cyan-400  text- " size={32} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsBootstrap className=" fill-indigo-600" size={32} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaReact className=" fill-blue-600" size={32} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLaravel className=" fill-red-600" size={32} />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLivewire className=" fill-red-600" size={32} />
          </a>
        </div>
      </div>
      <div className="  flex flex-col gap-y-10    items-center s:hidden liam-hover:flex ">
        <h1 className="  font-bold text-5xl text-white-400/75 s:text-lg   ">
          Mern Meomories
        </h1>

        <div className="  border-b-[5px] w-[10%]   h-3  border-solid border-accent s:hidden" />

        <p className="  pb-5    text-left  font-meduim  w-[80%] leading-[25px] tracking-widest ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          vel.lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consectetur sunt dicta praesentium recusandae odit magnam culpa,
          libero impedit! Eveniet voluptate officia pariatur eos dicta quaerat
          dolorum minima in itaque? Explicabo?
        </p>
      </div>
    </div>

    {/* It s the 2nd project demo */}
    {/* It s the 2nd project demo */}
    <div className="  antialiased  hover:shadow-3xl
      hover:transition-all hover:duration-1000 hover:ease-in-out rounded-3xl s:rounded-xl 
         flex flex-col  gap-y-10 text-center   ring-1 ring-black s:ring-accent  
         md:rounded-tl-[30px] md:rounded-tr-[30px]   ">
      <div className=" s:flex s:flex-col  s:pb-3   s:items-center gap-y-4  flex  justify-center   border-b-[5px] border-b-accent s:border-b-transparent       ">
        <img
          src={project2}
          className="  rounded-tr-3xl  rounded-tl-3xl   w-full md:rounded-tl-[30px] md:rounded-tr-[30px] md:pt-[1.2px]   "
          alt="Project1"
        />

        <h1 className=" hidden s:block  font-bold text-5xl text-white-400/75 s:text-lg   ">
          Mern Meomories
        </h1>

        <div className=" liam hidden s:flex s:flex-row s:space-between s:gap-x-10   bg-transparent ">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className=" fill-blue-200" size={32} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsBrowserChrome
              className="  animate-pulse fill-rose-400 fill-"
              size={32}
            />
          </a>
        </div>

        {/* Tech bar which shows what F Wroks been applied in every and each   */}

        <div className="  hidden s:flex s:flex-row s:space-around s:gap-x-4    bg-transparent ">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTailwindcss className=" fill-cyan-400  text- " size={32} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsBootstrap className=" fill-indigo-600" size={32} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaReact className=" fill-blue-600" size={32} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLaravel className=" fill-red-600" size={32} />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLivewire className=" fill-red-600" size={32} />
          </a>
        </div>
      </div>
      <div className="  flex flex-col gap-y-10    items-center s:hidden liam-hover:flex ">
        <h1 className="  font-bold text-5xl text-white-400/75 s:text-lg   ">
          Mern Meomories
        </h1>

        <div className="  border-b-[5px] w-[10%]   h-3  border-solid border-accent s:hidden" />

        <p className="  pb-5    text-left  font-meduim  w-[80%] leading-[25px] tracking-widest ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          vel.lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consectetur sunt dicta praesentium recusandae odit magnam culpa,
          libero impedit! Eveniet voluptate officia pariatur eos dicta quaerat
          dolorum minima in itaque? Explicabo?
        </p>
      </div>
    </div>

    {/* It s the 3rd project demo */}
    {/* It s the 3rd project demo */}

    <div
      className="  
    antialiased  hover:shadow-3xl   hover:transition-all 
    hover:duration-1000 hover:ease-in-out rounded-3xl s:rounded-xl  
      flex flex-col  gap-y-10 text-center   ring-1 ring-accent 
      md:rounded-tl-[30px] md:rounded-tr-[30px]     "
    >
      <div className=" s:flex s:flex-col  s:pb-3   s:items-center gap-y-4  flex  justify-center   border-b-[5px] border-b-accent s:border-b-transparent       ">
        <img
          src={project3}
          className="  rounded-tr-3xl  rounded-tl-3xl   w-full md:rounded-tl-[30px] md:rounded-tr-[30px] md:pt-[1.2px]   "
          alt="Project1"
        />

        <h1 className=" hidden s:block  font-bold text-5xl text-white-400/75 s:text-lg   ">
          Mern Meomories
        </h1>

        <div className=" liam hidden s:flex s:flex-row s:space-between s:gap-x-10   bg-transparent ">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className=" fill-blue-200" size={32} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsBrowserChrome
              className="  animate-pulse fill-rose-400 fill-"
              size={32}
            />
          </a>
        </div>

        {/* Tech bar which shows what F Wroks been applied in every and each   */}

        <div className="  hidden s:flex s:flex-row s:space-around s:gap-x-4    bg-transparent ">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTailwindcss className=" fill-cyan-400  text- " size={32} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsBootstrap className=" fill-indigo-600" size={32} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaReact className=" fill-blue-600" size={32} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLaravel className=" fill-red-600" size={32} />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLivewire className=" fill-red-600" size={32} />
          </a>
        </div>
      </div>
      <div className="  flex flex-col gap-y-10    items-center s:hidden liam-hover:flex ">
        <h1 className="  font-bold text-5xl text-white-400/75 s:text-lg   ">
          Mern Meomories
        </h1>

        <div className="  border-b-[5px] w-[10%]   h-3  border-solid border-accent s:hidden" />

        <p className="  pb-5    text-left  font-meduim  w-[80%] leading-[25px] tracking-widest ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          vel.lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consectetur sunt dicta praesentium recusandae odit magnam culpa,
          libero impedit! Eveniet voluptate officia pariatur eos dicta quaerat
          dolorum minima in itaque? Explicabo?
        </p>
      </div>
    </div>

    {/* It s the 4rd project demo */}
    {/* It s the 4rd project demo */}
    <div
      className="  
    antialiased  hover:shadow-3xl   hover:transition-all 
    hover:duration-1000 hover:ease-in-out rounded-3xl s:rounded-xl  
      flex flex-col  gap-y-10 text-center   ring-1 ring-accent 
      md:rounded-tl-[30px] md:rounded-tr-[30px]     "
    >
      <div className=" s:flex s:flex-col  s:pb-3   s:items-center gap-y-4  flex  justify-center   border-b-[5px] border-b-accent s:border-b-transparent       ">
        <img
          src={project4}
          className="  rounded-tr-3xl  rounded-tl-3xl   w-full md:rounded-tl-[30px] md:rounded-tr-[30px] md:pt-[1.2px]   "
          alt="Project1"
        />

        <h1 className=" hidden s:block  font-bold text-5xl text-white-400/75 s:text-lg   ">
          Mern Meomories
        </h1>

        <div className=" liam hidden s:flex s:flex-row s:space-between s:gap-x-10   bg-transparent ">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className=" fill-blue-200" size={32} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsBrowserChrome
              className="  animate-pulse fill-rose-400 fill-"
              size={32}
            />
          </a>
        </div>

        {/* Tech bar which shows what F Wroks been applied in every and each   */}

        <div className="  hidden s:flex s:flex-row s:space-around s:gap-x-4    bg-transparent ">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTailwindcss className=" fill-cyan-400  text- " size={32} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsBootstrap className=" fill-indigo-600" size={32} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaReact className=" fill-blue-600" size={32} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLaravel className=" fill-red-600" size={32} />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLivewire className=" fill-red-600" size={32} />
          </a>
        </div>
      </div>
      <div className="  flex flex-col gap-y-10    items-center s:hidden liam-hover:flex ">
        <h1 className="  font-bold text-5xl text-white-400/75 s:text-lg   ">
          Mern Meomories
        </h1>

        <div className="  border-b-[5px] w-[10%]   h-3  border-solid border-accent s:hidden" />

        <p className="  pb-5    text-left  font-meduim  w-[80%] leading-[25px] tracking-widest ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          vel.lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consectetur sunt dicta praesentium recusandae odit magnam culpa,
          libero impedit! Eveniet voluptate officia pariatur eos dicta quaerat
          dolorum minima in itaque? Explicabo?
        </p>
      </div>
    </div>
  </div>
);

export default Projects;
