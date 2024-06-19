import { v4 as uuidv4 } from "uuid";
import PhotoStoryTile from "./PhotoStoryTile";


// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 200,
  autoplaySpeed: 2000,
  cssEase: "linear",
};

function SlideShow({ photoStoriesData, className }) {
  return (
    <div className=" justify-start text-[#211E1D] bg-gradient-to-r from-[#F6C0A905] to-[#EB9ABA05] flex flex-row Boldy overflow-x-scroll min-w-screen">
      {photoStoriesData?.map((image, index) => (
        <div key={uuidv4()} className="sm:mx-4 ">
          <PhotoStoryTile
            name={`${image?.firstPersonName} + ${image?.secondPersonName} ,`}
            location={image?.state}
            img={image?.image}
            className={className}
          />
        </div>
      ))}
    </div>
  );
}

export default SlideShow;
