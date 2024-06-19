import PropTypes from "prop-types";

function PhotoStoryTile({ name, location, img, className, link }) {
  return (
    <a href={link ? link : ""} target="_blank">
      <div className="sm:m-3 p-3 sm:p-3 sm:max-w-[17.6vw]">
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
            className=" min-w-[300px] w-full h-[400px] object-cover"
          />
        )}
        <div className={`Boldy uppercase mt-1 text-lg ${className}`}>
          {name}
          <span
            className={`ml-2 text-sm font-medium text-[#595959] capitalize ${className}`}
          >
            {location}
          </span>
        </div>
      </div>
    </a>
  );
}

PhotoStoryTile.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default PhotoStoryTile;
