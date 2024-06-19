import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import downarrow from "../assets/images/downarrow.svg";



import useFetchData from "../customHooks/useFetchData";

import SlideShow from "./SlideShow";

function Videos() {
  const { videoStoriesData, fetchVideoStories } = useFetchData();

  useEffect(() => {
    fetchVideoStories();
  }, []);

  return (
    <div className=" pt-10 bg-texture bg-fixed h-full bg-cover ">
      <div className="flex  w-full ">
        <div className="flex flex-row ml-[20%] ">
          <span className="Actonia text-white mb-auto   text-4xl">through</span>
          <span className="text-[#ffca00] ml-2 Boldy text-5xl">Videos</span>
          <img src={downarrow} alt="" className="w-[4vh] ml-1 mt-5" />
        </div>
      </div>
      <SlideShow
        photoStoriesData={videoStoriesData}
        className="text-[#D8CAB1]"
      />
      <div className="text-lg p-3 border-yellow-400 Boldy cursor-pointer pb-20 ml-3 rounded-lg uppercase text-white w-full justify-end flex">
        <NavLink to="/videostories" className="mr-[20%]">
          <button
            type="button"
            className="border-yellow-300 border-2 px-2  rounded-sm   hover:text-black hover:bg-yellow-300 hover:border-yellow-300 transition-all ease-in duration-300"
          >
            see more videos
          </button>
        </NavLink>
      </div>
    </div>
  );
}
export default Videos;
