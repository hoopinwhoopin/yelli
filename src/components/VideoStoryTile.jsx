import PropTypes from "prop-types";

function VideoStoryTile({ name, location, img, link }) {
  return (
    <a href={link ? link : ""} target="_blank">
      <div className="sm:m-3  p-3 sm:p-3">
        {img?.includes("mp4") ? (
          <video
            src={img}
            alt="placeholder"
            className="min-w-[300px] h-[400px] object-cover"
            autoPlay
            muted
            loop
          />
        ) : (
          <img
            src={img !== "" ? img : "https://via.placeholder.com/280X400"}
            alt="placeholder"
            className=" min-w-[300px] h-[400px] object-cover"
          />
        )}
        <div className="font-bold  text-[#D8CAB1] uppercase Boldy text-lg">
          {name}
          <span className="ml-2 text-sm Courier text-[#D8CAB1] ">
            {location}
          </span>
        </div>
      </div>
    </a>
  );
}

VideoStoryTile.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default VideoStoryTile;
