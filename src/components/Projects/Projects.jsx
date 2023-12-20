import React, { useRef, useEffect } from "react";
import project1 from "../../assets/project1.png";
import movie1 from "../../assets/movie1.png";
import movie2 from "../../assets/movie2.png";
import movie3 from "../../assets/movie3.png";

import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.jpg";

import Ai1 from "../../assets/Ai1.png";
import Ai2 from "../../assets/Ai2.png";
import Ai3 from "../../assets/Ai3.png";

import bank1 from "../../assets/bank1.png";
import bank2 from "../../assets/bank2.png";

import food1 from "../../assets/food1.png";
import food2 from "../../assets/food2.png";

import { FaGit, FaGithub } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";
import { SiAlpinedotjs, SiTailwindcss } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiLivewire } from "react-icons/si";
import { TbBrandAlpineJs } from "react-icons/tb";
// import { SiLivewire } from "react-icons/si";

const Projects = () => {
  // const containerRef = useRef(null);
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const containerRef4 = useRef(null);

  const imgref = useRef(null);

  const applyScrollBehavior = (ContRef) => {
    const imgwidth = imgref.current.clientWidth;
    const interval = setInterval(() => {
      if (
        ContRef.current.scrollLeft + ContRef.current.clientWidth ==
        ContRef.current.scrollWidth
      ) {
        ContRef.current.scrollLeft = 0;
        ContRef.current.style.scrollBehavior = "smooth";
        ContRef.current.style.overflow = "auto"; // For WebKit

      } else {
        ContRef.current.scrollLeft += ContRef.current.clientWidth;
        ContRef.current.style.scrollBehavior = "smooth";
        ContRef.current.style.overflow = "auto"; // For WebKit

      }
    }, 8000);
    return () => {
      clearInterval(interval);
    };
  };

  useEffect(() => {
    applyScrollBehavior(containerRef1);
  }, [containerRef1]);

  useEffect(() => {
    applyScrollBehavior(containerRef2);
  }, [containerRef2]);
  useEffect(() => {
    applyScrollBehavior(containerRef3);
  }, [containerRef3]);
  useEffect(() => {
    applyScrollBehavior(containerRef4);
  }, [containerRef4]);

  //   const intervalId = setInterval(() => {
  //     if (
  //       container.scrollLeft + container.clientWidth ==
  //       container.scrollWidth
  //     ) {
  //       container.scrollLeft = 0;
  //     } else {
  //       container.scrollLeft += container.clientWidth;
  //     }
  //   }, 5000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <div
      id="projects"
      className="  grid grid-cols-2  gap-x-4 gap-y-6  justify-center  mt-10  px-10 py-12 md:grid md:grid-cols-1 md:gap-y-10 s:grid-cols-1 s:px-0 s:gap-y-12 s:ring-0     "
    >
      {/* It s the 1st project demo */}
      {/* It s the 1st project demo */}
      <div
        className="  antialiased  hover:shadow-3xl
      hover:transition-all hover:duration-1000 hover:ease-in-out rounded-3xl s:rounded-xl 
         flex flex-col  gap-y-10 text-center   ring-1 ring-black s:ring-accent  
         md:rounded-tl-[30px] md:rounded-tr-[30px]   "
      >
        <div
          className=" s:flex s:flex-col  s:pb-3   s:items-center
        md:flex md:flex-col  md:pb-3   md:items-center
        lg:flex lg:flex-col  lg:pb-3   lg:items-center
        xl:flex xl:flex-col  xl:pb-3   xl:items-center
         gap-y-4
          flex  justify-center   border-b-[5px] border-b-accent s:border-b-transparent       "
        >
          <div
            className="   
            flex w-full gap-x-4   overflow-auto"
            ref={containerRef1}
          >
            <img
              ref={imgref}
              src={food1}
              className="  rounded-tr-3xl  rounded-tl-3xl ring-4 ring-black  w-full md:rounded-tl-[30px] md:rounded-tr-[30px] md:pt-[1.2px]   "
              alt="food1"
            />
            <img
              src={food2}
              className="  rounded-tr-3xl  rounded-tl-3xl   w-full md:rounded-tl-[30px] md:rounded-tr-[30px] md:pt-[1.2px]   "
              alt="food2"
            />
            <img
              src={food1}
              className="  rounded-tr-3xl  rounded-tl-3xl   w-full md:rounded-tl-[30px] md:rounded-tr-[30px] md:pt-[1.2px]   "
              alt="food3"
            />
          </div>

          <h1 className=" hidden s:block  font-bold text-5xl text-white-400/75 s:text-lg   ">
            Restaurant L.P
          </h1>

          <div
            className=" liam hidden
           s:flex s:flex-row s:space-between s:gap-x-10 
            md:flex md:flex-row md:space-between md:gap-x-10  md:py-8 md:scale-125
            lg:flex lg:flex-row lg:space-between lg:gap-x-10  lg:py-8 lg:scale-125
            xl:flex xl:flex-row xl:space-between xl:gap-x-10  xl:py-8 xl:scale-125
          
             bg-transparent "
          >
            <a
              href="https://github.com/aljamiki-50/Food/tree/main/food-landingpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className=" fill-blue-200" size={32} />
            </a>
            <a
              href="https://65819ed27b7a6f11049401e9--shiny-parfait-654303.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <BsBrowserChrome
                className="  animate-pulse fill-rose-400 fill-"
                size={32}
              />
            </a>
          </div>

          {/* Tech bar which shows what F Wroks been applied in every and each   */}
        </div>

        <div
          className="  flex flex-col gap-y-10   items-center  liam-hover:flex 
        xl:pb-5 
        lg:flex   lg:pb-12
        md:flex   md:pb-12
         
        s:flex   s:pb-5 "
        >
          <h1 className="  s:hidden font-bold text-5xl text-white-400/75 s:text-lg   ">
            Restaurant L.P
          </h1>

          <div className="  border-b-[5px] w-[10%]   h-3  border-solid border-accent s:flex s:w-[50%] " />

          <p className=" s:hidden   pb-5    text-left  font-meduim  w-[80%] leading-[25px] tracking-widest ">
            A tantalizing virtual gateway to culinary delight awaits on our
            restaurant landing page. Immerse yourself in a visual feast of
            delectable dishes, discover our chef's specialties, and experience
            the inviting ambiance—all elegantly showcased to whet your appetite
            and entice your senses. Explore menus, reserve your table, and
            embark on a flavorful journey with us. 👇
          </p>
          {/* Stack of techs been applied here  */}
          <div
            className="  hidden
           xl:flex  xl:flex-row xl:space-around xl:gap-x-4 
           lg:flex  lg:flex-row lg:space-around lg:gap-x-4 
           md:flex  md:flex-row md:space-around md:gap-x-4 
          s:flex s:flex-row s:space-around s:gap-x-4    bg-transparent "
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTailwindcss
                className=" fill-cyan-400  text- "
                title="TailWind css"
                size={32}
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsBootstrap
                className=" fill-indigo-600"
                size={32}
                title="Bootstrap "
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              // alt
            >
              <SiAlpinedotjs
                className=" hidden fill-blue-600"
                size={32}
                title="Alpine JS"
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaReact className="  fill-red-600" title="REact" size={32} />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLivewire
                className=" fill-red-600"
                title="Livewire"
                size={32}
              />
            </a>
          </div>
          {/* End of Stack of techs been applied here  */}
        </div>
      </div>

      {/* It s the 2nd project demo */}
      {/* It s the 2nd project demo */}
      <div
        className="  antialiased  hover:shadow-3xl
      hover:transition-all hover:duration-1000 hover:ease-in-out rounded-3xl s:rounded-xl 
         flex flex-col  gap-y-10 text-center   ring-1 ring-black s:ring-accent  
         md:rounded-tl-[30px] md:rounded-tr-[30px]   "
      >
        <div
          className=" s:flex s:flex-col  s:pb-3   s:items-center gap-y-4 
         md:flex md:flex-col  md:pb-3   md:items-center 
         lg:flex lg:flex-col  lg:pb-3   lg:items-center 
         xl:flex xl:flex-col  xl:pb-3   xl:items-center 
         flex  justify-center   border-b-[5px] border-b-accent s:border-b-transparent       "
        >
          <div
            className="   
            flex w-full gap-x-4   overflow-auto"
            ref={containerRef2}
          >
            <img
              src={movie1}
              className="  rounded-tr-3xl  rounded-tl-3xl ring-4 ring-black  w-full md:rounded-tl-[30px] md:rounded-tr-[30px] md:pt-[1.2px]   "
              alt="movie1"
            />
            <img
              src={movie2}
              className="  rounded-tr-3xl  rounded-tl-3xl   w-full md:rounded-tl-[30px] md:rounded-tr-[30px] md:pt-[1.2px]   "
              alt="movie2"
            />
            <img
              src={movie3}
              className="  rounded-tr-3xl  rounded-tl-3xl   w-full md:rounded-tl-[30px] md:rounded-tr-[30px] md:pt-[1.2px]   "
              alt="movie3"
            />
          </div>

          <h1 className=" hidden s:block  font-bold text-5xl text-white-400/75 s:text-lg   ">
            Movie DB
          </h1>

          <div
            className=" liam  
          s:flex s:flex-row s:space-between s:gap-x-10 
          md:flex md:flex-row md:space-between md:gap-x-10  md:py-8 
          lg:flex lg:flex-row lg:space-between lg:gap-x-10  lg:py-8 
          xl:flex xl:flex-row xl:space-between xl:gap-x-10  xl:py-8 



bg-transparent "
          >
            <a
              href="https://github.com/aljamiki-50/Movie-DB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className=" fill-blue-200" size={32} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden"
            >
              <BsBrowserChrome
                className="  animate-pulse fill-rose-400 fill-"
                size={32}
              />
            </a>
          </div>

          {/* Tech bar which shows what F Wroks been applied in every and each   */}
        </div>

        <div
          className="  flex flex-col gap-y-10   items-center  liam-hover:flex 
        xl:pb-5 
        lg:flex   lg:pb-12
        md:flex   md:pb-12
         
        s:flex   s:pb-5 "
        >
          <h1 className="  s:hidden font-bold text-5xl text-white-400/75 s:text-lg   ">
            Movie DB
          </h1>

          <div className="  border-b-[5px] w-[10%]   h-3  border-solid border-accent s:flex s:w-[50%] " />

          <p className=" s:hidden   pb-5    text-left  font-meduim  w-[80%] leading-[25px] tracking-widest ">
            Depicting a film project that posed challenges but proved
            fulfilling, particularly when applying innovative technology such 👇
          </p>
          {/* Stack of techs been applied here  */}
          <div
            className="  
           xl:flex  xl:flex-row xl:space-around xl:gap-x-4 
           lg:flex  lg:flex-row lg:space-around lg:gap-x-4 
           md:flex  md:flex-row md:space-around md:gap-x-4 
          s:flex s:flex-row s:space-around s:gap-x-4    bg-transparent "
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTailwindcss
                className=" fill-cyan-400  text- "
                title="TailWind css"
                size={32}
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsBootstrap
                className=" fill-indigo-600"
                size={32}
                title="Bootstrap "
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              alt
            >
              <SiAlpinedotjs
                className=" fill-blue-600"
                size={32}
                title="Alpine JS"
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLaravel className=" fill-red-600" title="Laravel" size={32} />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLivewire
                className=" fill-red-600"
                title="Livewire"
                size={32}
              />
            </a>
          </div>
          {/* End of Stack of techs been applied here  */}
        </div>
      </div>

      {/* It s the 3rd project demo */}
      {/* It s the 3rd project demo */}

      <div
        className="  antialiased  hover:shadow-3xl
      hover:transition-all hover:duration-1000 hover:ease-in-out rounded-3xl
       s:rounded-xl  
         flex flex-col  gap-y-10 text-center   ring-1 ring-black s:ring-accent  
         md:rounded-tl-[30px] md:rounded-tr-[30px]   "
      >
        <div
          className=" s:flex s:flex-col  s:pb-3   s:items-center 
        md:flex md:flex-col md:items-center
        lg:flex lg:flex-col lg:items-center
        xl:flex xl:flex-col xl:items-center
        gap-y-4  flex  justify-center   border-b-[5px] border-b-accent s:border-b-transparent       "
        >
          <div
            className="   
            flex w-full gap-x-4   overflow-auto"
            ref={containerRef3}
          >
            <img
              src={Ai1}
              className="  rounded-tr-3xl  rounded-tl-3xl ring-4 ring-black  w-full md:rounded-tl-[30px] md:rounded-tr-[30px] md:pt-[1.2px]   "
              alt="Project1"
            />
            <img
              src={Ai2}
              className="  rounded-tr-3xl  rounded-tl-3xl   w-full md:rounded-tl-[30px] md:rounded-tr-[30px] md:pt-[1.2px]   "
              alt="Project1"
            />
            <img
              src={Ai3}
              className="  rounded-tr-3xl  rounded-tl-3xl   w-full md:rounded-tl-[30px] md:rounded-tr-[30px] md:pt-[1.2px]   "
              alt="Project1"
            />
          </div>

          <h1 className=" hidden s:block  font-bold text-5xl text-white-400/75 s:text-lg   ">
            AI L.P
          </h1>

          <div
            className=" liam  s:flex s:flex-row s:space-between s:gap-x-10 
          md:flex md:flex-row md:space-between md:gap-x-10  md:py-8 
          lg:flex lg:flex-row lg:space-between lg:gap-x-10  lg:py-8 
          xl:flex xl:flex-row xl:space-between xl:gap-x-10  xl:py-8 

            bg-transparent "
          >
            <a
              href="https://github.com/aljamiki-50/react-demo-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className=" fill-blue-200" size={32} />
            </a>
            <a
              href="https://eloquent-genie-c957b6.netlify.app/"
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
        </div>

        <div
          className="  flex flex-col gap-y-10   items-center  liam-hover:flex 
        xl:pb-5 
        lg:flex   lg:pb-12
        md:flex   md:pb-12
         
        s:flex   s:pb-5 "
        >
          <h1 className="  s:hidden font-bold text-5xl text-white-400/75 s:text-lg   ">
            AI L.P
          </h1>

          <div className="  border-b-[5px] w-[10%]   h-3  border-solid border-accent s:flex s:w-[50%] " />

          <p className=" s:hidden   pb-5    text-left  font-meduim  w-[80%] leading-[25px] tracking-widest ">
            Illustrating the prowess of AI by crafting an impressive showcase AI
            landing page, harnessing the combined strengths of Tailwind CSS and
            React for a seamless and dynamic user experience.👇
          </p>
          {/* Stack of techs been applied here  */}
          <div
            className="  hidden
           xl:flex  xl:flex-row xl:space-around xl:gap-x-4 
           lg:flex  lg:flex-row lg:space-around lg:gap-x-4 
           md:flex  md:flex-row md:space-around md:gap-x-4 
          s:flex s:flex-row s:space-around s:gap-x-4    bg-transparent "
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTailwindcss
                className=" fill-cyan-400  text- "
                title="TailWind css"
                size={32}
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaReact className=" fill-indigo-600" size={32} title="React " />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              alt
            >
              {/* <SiAlpinedotjs
                className=" fill-blue-600"
                size={32}
                title="Alpine JS"
              /> */}
            </a>
            {/* <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLaravel className=" fill-red-600" title="Laravel" size={32} />
            </a> */}

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLivewire
                className=" fill-red-600"
                title="Livewire"
                size={32}
              />
            </a>
          </div>
          {/* End of Stack of techs been applied here  */}
        </div>
      </div>

      {/* It s the 4th project demo */}
      {/* It s the 4th project demo */}
      <div
        className="  antialiased  hover:shadow-3xl
      hover:transition-all hover:duration-1000 hover:ease-in-out rounded-3xl s:rounded-xl 
         flex flex-col  gap-y-10 text-center   ring-1 ring-black s:ring-accent  
         md:rounded-tl-[30px] md:rounded-tr-[30px]   "
      >
        <div
          className=" s:flex s:flex-col  s:pb-3   s:items-center
        md:flex md:flex-col md:items-center
        lg:flex lg:flex-col lg:items-center
        xl:flex xl:flex-col xl:items-center
         gap-y-4  flex  justify-center   border-b-[5px] border-b-accent s:border-b-transparent       "
        >
          <div
            className="   
            flex w-full gap-x-4   overflow-auto"
            ref={containerRef4}
          >
            <img
              src={bank1}
              className="  rounded-tr-3xl  rounded-tl-3xl ring-4 ring-black  w-full md:rounded-tl-[30px] md:rounded-tr-[30px] md:pt-[1.2px]   "
              alt="bank1"
            />
            <img
              src={bank2}
              className="  rounded-tr-3xl  rounded-tl-3xl   w-full md:rounded-tl-[30px] md:rounded-tr-[30px] md:pt-[1.2px]   "
              alt="bank2"
            />
            <img
              src={bank1}
              className="  rounded-tr-3xl  rounded-tl-3xl   w-full md:rounded-tl-[30px] md:rounded-tr-[30px] md:pt-[1.2px]   "
              alt="bank1"
            />
          </div>

          <h1 className=" hidden s:block  font-bold text-5xl text-white-400/75 s:text-lg   ">
            Bank L.P
          </h1>

          <div
            className=" liam  s:flex s:flex-row s:space-between s:gap-x-10 
          md:flex md:justify-between md:items-center  md:gap-x-10  md:py-8
          lg:flex lg:justify-between lg:items-center  lg:gap-x-10  lg:py-8
          xl:flex xl:justify-between xl:items-center  xl:gap-x-10  xl:py-8
          
            bg-transparent "
          >
            <a
              href="https://github.com/aljamiki-50/Banking-react-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className=" fill-blue-200" size={32} />
            </a>
            <a
              href="https://strong-kheer-1f5c1b.netlify.app/"
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
        </div>

        <div
          className="  flex flex-col gap-y-10   items-center  liam-hover:flex 
        xl:pb-5 
        lg:flex   lg:pb-12
        md:flex   md:pb-12
         
        s:flex   s:pb-5 "
        >
          <h1 className="  s:hidden font-bold text-5xl text-white-400/75 s:text-lg   ">
            Bank L.P
          </h1>

          <div className="  border-b-[5px] w-[10%]   h-3  border-solid border-accent s:flex s:w-[50%] " />

          <p className=" s:hidden   pb-5    text-left  font-meduim  w-[80%] leading-[25px] tracking-widest ">
            Transform your bank's landing page into an extraordinary showcase of
            Tailwind CSS seamlessly integrated with React, highlighting the
            incredible synergy between cutting-edge design and advanced
            functionality. 👇
          </p>
          {/* Stack of techs been applied here  */}
          <div
            className="  hidden
           xl:flex  xl:flex-row xl:space-around xl:gap-x-4 
           lg:flex  lg:flex-row lg:space-around lg:gap-x-4 
           md:flex  md:flex-row md:space-around md:gap-x-4 
          s:flex s:flex-row s:space-around s:gap-x-4    bg-transparent "
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTailwindcss
                className=" fill-cyan-400  text- "
                title="TailWind css"
                size={32}
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsBootstrap
                className=" fill-indigo-600"
                size={32}
                title="Bootstrap "
              />
            </a>
            {/* <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              alt
            >
              <SiAlpinedotjs
                className=" fill-blue-600"
                size={32}
                title="Alpine JS"
              />
            </a> */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaReact className=" fill-red-600" title="React" size={32} />
            </a>

            {/* <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLivewire
                className=" fill-red-600"
                title="Livewire"
                size={32}
              />
            </a> */}
          </div>
          {/* End of Stack of techs been applied here  */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
