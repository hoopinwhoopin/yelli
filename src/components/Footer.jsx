// import githubIcon from "../assets/img/github-icon.png";
import { FacebookOutlined, Instagram } from "@mui/icons-material";
import { useState } from "react";
import MovingComponent from "react-moving-text";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import { NavLink } from "react-router-dom";

function Footer() {
  const header = document.querySelector("#header")
  const [CurrentStuff, setCurrentStuff] = useState(0);
  setTimeout(() => {
    if (CurrentStuff === 5) setCurrentStuff(0);
    else setCurrentStuff(CurrentStuff + 1);
  }, 2000);
  const stuff = [
    "IN TOUCH",
    "TOGETHER",
    "FOREVER",
    "CREATIVE",
    "STARTED",
    "LOUD",
  ];
  return (
    <footer className="footer bg-footertext">
      <div className="min-h-[300px] w-full flex flex-col sm:flex-row justify-between items-center px-[7%] ">
        <div className="flex-1  ">
          <div className="w-[60px]">
            <img
              src="https://cdn.sanity.io/images/u8qx4arf/production/272ca9b7e96fc5ac962b9cbb5d0e4ecbc6d9ff47-74x89.png"
              className=" w-[57px] pt-[60px] sm:mb-0 "
              alt="Quote"
            />
            <div className="flex flex-row justify-between text-white mt-2">
              <FacebookOutlined />
              <Instagram />
            </div>
          </div>
        </div>
        <div className=" flex flex-col text-4xl Boldy text-white text-center mb-20 sm:mb-0 ">
          <div className="flex flex-row text-4xl Boldy text-white text-center pl-10 pt-[50px]">
            Lets Get
            <img
              src="https://cdn.sanity.io/images/u8qx4arf/production/4b7a41122dadf6389912a00d9927152055eb626a-28x28.svg"
              alt="hello"
              className="w-[28px] h-[18px]"
            />{" "}
          </div>

          <div className="text-yellow-300 pl-5" key={CurrentStuff}>
            <MovingComponent
              id="moving"
              type="fadeInFromBottom"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease-in-out"
              iteration="1"
              fillMode="none"
            >
              {stuff[CurrentStuff]}
            </MovingComponent>
          </div>
        </div>
        <div className="flex flex-1 flex-row items-center justify-center">
          <div className="Courier flex-1 flex flex-col sm:justify-end justify-center items-end sm:pt-[100px] ">
            <span className="Boldy sm:text-2xl text-lg sm:self-end self-center  text-[#D8CAB1] ">
              Write to us:
            </span>
            <a
              href="mailto:heythere@flashbakc-studios.com"
              className="text-white Courier sm:text-1xl  text-sm sm:mb-2 mb-10 justify-center text-center"
            >
              heythere@flashbakc-studios.com
            </a>
          </div>
        </div>
        <div className="text-white relative cursor-pointer -right-10 hidden sm:flex" >
        <a
              href="#top"
              onclick='window.scrollTo({top: 0, behavior: "smooth"});'
            >
          <ArrowCircleUpOutlinedIcon />
          </a>
        </div>
      </div>
      <div className="Courier border border-white w-full px-[7%] pb-[50px] ">
        <hr className="border-[#4A4A4A]" />
        <div className="flex flex-col sm:flex-row justify-between text-xs pt-5 text-center items-center">
          <span>
            © 2024 Flashbakc Studios Fabian & Rahul. All rights reserved.
          </span>
          <div className="flex sm:mt-0 mt-10 flex-row">
            <span className="mr-2">Privacy Policy</span>
            <span className="mr-2">Terms & Conditions</span>
            <span className="">Copyright</span>
          </div>
          <div className=" Courier flex sm:mt-0 mt-10 flex-row items-center">
            <span className="mr-2 ">
              Designed & developed with intention by
            </span>
            <a
              href="#top"
              onClick='window.scrollTo({top: 0, behavior: "smooth"});'
            >
              <img
                src="https://cdn.sanity.io/images/u8qx4arf/production/767b4d9d11a5deea3d3d490f8e1762d9a89cad5e-57x50.png"
                alt="hello"
                width={57}
                height={50}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;