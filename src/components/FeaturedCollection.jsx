import { NavLink } from "react-router-dom";
import "../App.css";

function FeaturedCollection() {
  return (
    <div className="bg-texture h-full bg-fixed" >
      <div className=" bg-aboutus text-white text-6xl Boldy pt-[13vh] pb-10  p-5 flex justify-center items-center">
        <div className="flex flex-col sm:flex-row sm:w-[60%]  ">
          <img
            className=" w-[90vw] sm:w-[25vw] sm:min-w-[477px]"
            src="https://cdn.sanity.io/images/u8qx4arf/production/6c1d7502c2d96b086051b64cbe9f7e165a6cae7f-636x809.png"
            alt="hello"
          />

          <div className="lg:text-5xl text-3xl Boldy flex-col flex  pl-10  justify-center  mt-20 sm:mt-0">
            Behind
            <br />
            <div className=" flex-row flex ">
              <p className="Actonia lg:text-5xl text-3xl mb-auto lowercase ml-6 ">
                the
              </p>
              <p className="text-[#FFCA00] ml-2"> brand</p>
            </div>
            <div className="text-lg flex-col flex  mt-5 sm:pl-10 pl-0 ">
              <div className="Courier">
                <h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Justo laoreet sit amet cursus.Consequat interdum varius sit
                  amet mattis vulputate enim nulla aliquet.
                </h1>{" "}
              </div>
              <div className="Courier mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Justo laoreet sit amet cursus.Consequat interdum varius sit amet
                mattis vulputate enim nulla aliquet.
              </div>

              <div className="text-lg mt-10  cursor-pointer w-fit">
                <NavLink to="/aboutus">
                  {" "}
                  <button
                    type="button"
                    className="border-yellow-300 border-2 h-8 w-[150px]  rounded-sm   hover:text-black hover:bg-yellow-300 hover:border-black transition-all ease-in duration-300"
                  >
                    more about us
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80vh] mt-20 bg-newCollection flex flex-col justify-center items-center lg:text-5xl text-3xl Boldy bg-center bg-cover text-white" />
    </div>
  );
}
export default FeaturedCollection;
