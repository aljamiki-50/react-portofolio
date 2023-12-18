import React, { useState, useEffect } from "react";
import { GrTechnology } from "react-icons/gr";
import { FaPhp, FaReact } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import { FaLaravel } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiGmail, SiLivewire } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { SiPhp } from "react-icons/si";
import { SiNextui } from "react-icons/si";
import { SiAltiumdesigner } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { DiMaterializecss } from "react-icons/di";
import { FaFigma } from "react-icons/fa6";
import { SiAboutdotme } from "react-icons/si";
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiLinkedinLogo, PiTelegramLogo } from "react-icons/pi";
import { AiFillMail } from "react-icons/ai";

const Connect = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const gmailAddress = "workathic@gmail.com";

  const handleSubmit = (e) => {
    e.preventDefault();

    const config = {
      SecureToken: "e43c76b2-42d4-44c8-8630-0b4cdd389435",
      To: "liam@yopmail.com",
      From: email,
      Subject: "This is my contatc form",
      Body: ` message been submitted from your portofolio t${message} `,
    };

    if (window.email) {
      window.Email.send(config).then(() =>
        alert("your Email succeffuly been sent ")
      );
    } else {
      console.error("SMTP.js library not loaded.");
    }
  };

  return (
    <div>
      <div id="Connect" className="mt-10 ring-4 ring-red-600">
        {/* Start of the talk section */}
        <div className="flex ps-4  flex-col">
          <h1 className=" flex gap-x-2  left-0 text-left py-6 text-7xl font-bold decoreation-4 text-{#0c0e14}  decoration-{#6687D7}   ">
            <IoChatbubblesOutline className="" />
            <span className="text-center"> :-</span>
            {/* LET s talk sect */}
          </h1>
          <p className="   s:flex text-left prose-xl s:w-[90%]  border-b-4 border-b-neutral-200 ">
            "Feel free to reach out through the provided contact information—I'm
            always open for collaboration, discussions, and opportunities to
            connect."
          </p>
        </div>
        {/* start of the form div */}

        <div
          className="
         xl:grid xl:grid-cols-2 xl:gap-x-10  xl:items-center xl:text-center xl:justify-center
         mt-10 p-6  bg-transparent shadow-lg rounded-md"
        >
          <div>
            {/* <h2 className="text-2xl font-bold mb-4 text-accent">Contact Me</h2> */}
            {/* start of the form */}
            {/* start of the form */}
            <form onSubmit={handleSubmit}>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
                
              >
                Email:
              </label>
              <input
                className="w-full p-2 mb-4 border-b-2 border-gray-300 focus:outline-none focus:border-accent"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {email ? (
                <>
                  {/* <h1 className="bg-red-800">Hey, it exists!</h1> */}
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message:
                  </label>
                  <textarea
                    className="w-full p-2 mb-4 border-b-2 border-gray-300 focus:outline-none focus:border-accent"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </>
              ) : (
                <>{/* <h1>No, it doesn't exist.</h1> */}</>
              )}

              {message ? (
                <>
                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </>
              ) : (
                <></>
              )}

              {/* <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              className="w-full p-2 mb-4 border-b-2 border-gray-300 focus:outline-none focus:border-accent"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            /> */}

              {/* <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button> */}
            </form>
            {/* End of the form  */}
            {/* End of the form  */}
          </div>
          <div className="  align-middle items-center  justify-around mt-1 
           s:flex-row s:flex s:mt-5
           md:flex-row md:flex md:mt-5
           lg:flex-row lg:flex lg:mt-5

           xl:flex-row xl:flex ">
            {/* <a href=""> </a> */}
            <a
              href="https://t.me/workathic"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <PiTelegramLogo className=" fill-blue-400" size="3rem" />
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/liam-musa50/"
            >
              {" "}
              <PiLinkedinLogo className=" fill-blue-400" size="3rem" />
            </a>

            <a
              href={`mailto:${gmailAddress}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillMail className=" fill-accent" size="3rem" />
            </a>
          </div>
        </div>

        {/* End of the form div ,  */}
      </div>
    </div>
  );
};

export default Connect;
