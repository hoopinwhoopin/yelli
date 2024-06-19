import PropTypes from "prop-types";

function TestimonialTile({ name, title, content, img }) {
  return (
    <div className="m-5 ">
      <img
        src={img !== "" ? img : "https://via.placeholder.com/750X500"}
        alt="placeholder "
        className="h-full w-full"
      />
      <div>
        <p className="Courier Prime text-[#4A4A4A] font-bold text-lg mt-2">
          {title}
        </p>
        <p className="Courier text-[#4A4A4A] text-lg mt-2">{content}</p>
      </div>
      <div className=" text-black uppercase Boldy text-lg mt-5 mb-0 ">
        {name}
      </div>
      <hr className="border-black mt-5" />
    </div>
  );
}
TestimonialTile.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default TestimonialTile;
