import React, { useRef } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiTwotoneEdit,
} from "react-icons/ai";
import { GrMenu } from "react-icons/gr";

import { DiCssdeck } from "react-icons/di";
import { ImCross } from "react-icons/im";

import { Link } from "react-router-dom";
import {
  Container,
  Div1,
  Div2,
  Div3,
  Div4,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => {
  const [toggle, setToggle] = React.useState(false);
  const linkref = useRef(null);

  const swap = () => {
    setToggle(!toggle);
    const { current } = linkref;
    if (toggle) {
      current.style.color = "white";
    } else {
      current.style.color = "var(--accent-hover)";
    }

    // alert("hey been clicked"); // Toggles the state between true and false
    // console.log("hey");
  };

  // const handleClick = () => {
  //   setToggle(!toggle); // Toggles the state between true and false
  // };

  return (
    <Container className="  md:mt-2 ">
      <Div1>
        <Link
          ref={linkref}
          className=" "
          style={{
            display: "flex",
            textAlign: "center",
            fontSize: "1.5rem",
            alignSelf: "center",
            color: "var(--accent-hover)",
          }}
          to={"/"}
        >
          <div className="md:flex flex  justify-between md:gap-x-24 self-center items-center gap-3   text-center ">
            <DiCssdeck className=" s:hidden md:scale-[1.9] " size="3rem" />
            {"  "}
            <span className="md:scale-[1.9]  self-center">Portofolio</span>
          </div>
        </Link>
      </Div1>
      <Div2 className=" md:none  ">
        <Link to="#Projects">
          <NavLink>Projects</NavLink>
        </Link>
        <Link to="#Projects">
          <NavLink>Tech</NavLink>
        </Link>
        <Link to="#Projects">
          <NavLink>About</NavLink>
        </Link>
        {/* <div className="s:hidden">hey it s  me </div> */}
      </Div2>
      <Div3 className=" s:hidden md:hidden">
        <NavLink>
          <AiFillLinkedin />
        </NavLink>
        <NavLink>
          <AiFillInstagram />
        </NavLink>
        <NavLink>
          <AiTwotoneEdit />
        </NavLink>
        <NavLink>
          <AiFillGithub />
        </NavLink>
      </Div3>
      <Div4 className=" relative  ">
        {!toggle ? (
          <>
            <ImCross
              className="transition-all duration-500 ease-in-out md:scale-[2.9] hover:bg-red-300"
              onClick={swap}
            />
            <div
              className=" z-10 bg-transpernt  text-primary   py-2 absolute top-10 right-[0.5px] 
               transition-all duration-[700ms]
                ease-linear 
                md:scale-[1.9] md:top-32 md:right-10
                    "
            >
              <ul className=" flex text-accent  flex-col   align-middle    justify-start text-left gap-y-4  transition-all duration-[1000ms] ease delay-250    hover:divide-amber-400 ">
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Tech</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li className=" flex  ">
                  <a href="#">Linked In</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <GrMenu
              className=" transition-opacity duration-1000 ease-in-out scroll-smooth  md:scale-[2.9]  focus:bg-red-300"
              onClick={swap}
            />
             <div
              className=" z-10 bg-transpernt  text-primary opacity-0   py-2 absolute top-10 right-[0.5px] 
               transition-all duration-[700ms]
                ease-linear delay-[100 ms]
                md:scale-[1.9] md:top-32 md:right-10
                    "
            >
              <ul className=" flex text-accent  flex-col   align-middle    justify-start text-left gap-y-4  transition-all duration-[1000ms] ease delay-250    hover:divide-amber-400 ">
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Tech</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li className=" flex  ">
                  <a href="#">Linked In</a>
                </li>
              </ul>
            </div>
          </>
        )}
      </Div4>
    </Container>
  );
};

export default Header;
