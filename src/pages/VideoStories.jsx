import { useEffect } from "react";
import Header from "../components/Header";
import useFetchData from "../customHooks/useFetchData";
import PhotoStoryTile from "../components/PhotoStoryTile";

function VideoStories() {
  const { videoStoriesData, fetchVideoStories } = useFetchData();

  useEffect(() => {
    fetchVideoStories();
  }, []);

  return (
    <div>
      <div
        className="bg-center h-[300px] bg-cover bg-blend-overlay bg-gray-800"
        style={{
          backgroundImage: `url('https://cdn.sanity.io/images/u8qx4arf/production/82895e8a74c95c86122685d0e1f61a257f292286-2560x512.png')`,
        }}
      >
        <Header />
      </div>
      <div className="bg-[#1C1C1C] flex justify-center items-center text-white">
        <div className="flex flex-col items-center sm:w-[70%]">
          <div className="text-4xl uppercase font-extrabold Boldy tracking-normal text-white text-center mb-10 mt-10">
            {/* Love <span className="Actonia lowercase"> is the </span> whole thing. <br /> we are only pieces. */}
            NAMES ON A PAPER WE ARE NOT
          </div>
          <div className="flex flex-col justify-around mb-10 sm:flex-row p-5">
            <div className="flex-1 text-md  Courier m-2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Interdum velit euismod in pellentesque massa placerat duis
              ultricies lacus. Massa tincidunt dui ut ornare lectus sit amet est
              placerat. Consectetur purus ut faucibus pulvinar elementum. Dolor
              sit amet consectetur adipiscing elit pellentesque.
            </div>
            <div className="flex-1 text-md  Courier m-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Interdum velit euismod in pellentesque massa placerat duis
              ultricies lacus. Massa tincidunt dui ut ornare lectus sit amet est
              placerat. Consectetur purus ut faucibus pulvinar elementum. Dolor
              sit amet consectetur adipiscing elit pellentesque.
            </div>
          </div>

          <div className=" Courier flex flex-row flex-wrap justify-center items-center pb-[50px] xl:w-[1500px]">
            {videoStoriesData.map((videoStory, index) => (
              <PhotoStoryTile
                name={`${videoStory?.firstPersonName} + ${videoStory?.secondPersonName}`}
                location={videoStory.state}
                img={videoStory?.image}
                link={videoStory?.narrativeLink}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoStories;
