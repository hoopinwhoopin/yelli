import { NavLink } from "react-router-dom";
import { useEffect } from "react";

import uparrow from "../assets/images/uparrow.svg";
import SlideShow from "./SlideShow";
import useFetchData from "../customHooks/useFetchData";

function Slider() {
  const { fetchPhotoStories, photoStoriesData } = useFetchData();

  useEffect(() => {
    fetchPhotoStories();
  }, []);

  return (
    <div className="pt-20 bg-[#EDECE7] p-5  justify-self-end  w-full overflow-hidden ">
      <div className="flex flex-col sm:flex-row  items-center justify-center   ">
        <div className="flex flex-col text-black p-5">
          <span className="Actonia lg:text-5xl text-3xl-mb-4">our</span>{" "}
          <span className="ml-12 text-5xl Boldy -mt-3 ">STORIES</span>
        </div>
        <div className="Courier text-1xl font-[#4A4A4A] max-w-4xl">
          are different and every couple is unique. Your moments become your
          life story and live from one generation to the next. Here are your
          stories through our particular way of seeing it
        </div>
      </div>
      <div>
        <SlideShow photoStoriesData={photoStoriesData} className="text-black" />
      </div>
      <div className="flex sm:flex-row justify-end flex-col mr-[15%]">
        <div className="flex flex-row text-4xl ml-2 pb-10">
          <img src={uparrow} alt="" className="w-[4vh] ml-10" />{" "}
          <span className="Actonia text-black mb-auto mr-2 text-4xl sm:text-">
            through
          </span>
          <span className="text-[#ffca00]  Boldy text-5xl">Photos</span>
        </div>
        <div className="text-[16px] p-3 border-yellow-400 Boldy cursor-pointer ml-6 rounded-lg  uppercase text-black">
          <NavLink to="/photostories">
            <button
              type="button"
              className="border-yellow-300 border-2 px-2  rounded-sm   hover:text-black hover:bg-yellow-300 hover:border-black transition-all ease-in duration-300"
            >
              see more stories
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Slider;
