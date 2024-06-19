import { NavLink } from "react-router-dom";
import "../App.css";

function Thoughts() {
  return (
    <div className="">
      <div className="w-full justify-center flex flex-col items-center bg-[#D8CAB1] pt-20 ">
        <div className="sm:text-5xl text-3xl text-black Boldy flex-col  flex sm:flex-row w-[80%] mb-20">
          <div className=" h-[55vh] flex-1 flex flex-col flex-nowrap z-30 w-[] pb-10 items-center">
            <div className=" w-full flex flex-col ">
              <div className="flex flex-row sm:pl-[10vh] w-min justify-self-start">
                <p className="Actonia sm:text-5xl text-white"> our </p>
                <span className="text-nowrap  Boldy">HAPPY COUPLES</span>
              </div>
              <div className="flex flex-row sm:ml-20 justify-self-end  w-min ml-[10%]">
                <p className="Actonia sm:text-5xl mb-auto sm:pl-[20vh]">
                  {" "}
                  and{" "}
                </p>{" "}
                <span className="text-nowrap Boldy text-white">
                  THEIR THOUGHTS{" "}
                </span>
              </div>
            </div>
            <div className="Courier text-xl pb-15 mr-10 sm:w-[80%] px-5 w-full pt-10">
              <span className=" text-black sm:w-[50%] pr-5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </span>
              <p className="w-full  mr-20 text-[#4A4A4A] text-lg">
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Justo laoreet sit amet cursus. Consequat interdum varius sit
                amet mattis vulputate enim nulla aliquet. <br /> <br />{" "}
                Venenatis lectus magna fringilla urna porttitor. Risus quis
                varius quam quisque id diam vel quam elementum.
              </p>
            <div className=" w-full text-lg  border cursor-pointer pb-20  rounded-lg Boldy uppercase text-black ">
              <div className=" border w-fit h-min p-3 rounded-lg mt-10">
                <NavLink to="/testimonials" className="">
                < button type="button" className="border-black border-[1px]  px-2  rounded-lg   hover:text-black hover:bg-yellow-300 hover:border-yellow-300 transition-all ease-in duration-300">read more</button>

                  
                </NavLink>
              </div>
            </div>
            </div>
          </div>
          <div className=" bg-green-500 w-full -ml-[5%]">
            <img
              src="https://cdn.sanity.io/images/u8qx4arf/production/78c9de117f57bebf63efab92cd665b4a8cf2801b-859x646.png"
              alt="Hello"
              className="bg-center bg-cover w-full min-w-[300px] object-cover h-[450px] sm:h-full pb-0"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#EDECE7]">
        <div className="h-[15vh] pt-20 flex text-md sm:flex-row justify-center items-center text-3xl sm:text-3xl  Boldy bg-cover gap-2 pb-10">
          <span className="Actonia sm:lg:text-5xl text-3xlmb-4">our</span>{" "}
          <span className="text-[#FFCA00] Boldy sm:text-5xl">AWARDS</span>
          <span className="Actonia sm:text-5xl">&</span>{" "}
          <span className=" Boldy sm:lg:text-5xl text-3xltext-[#1c1c1c]">
              FEATURES
          </span>
        </div>
        <div className="flex sm:flex-row flex-col justify-center items-center gap-10  pb-20  ">
          <div>
            <img
              src="https://cdn.sanity.io/images/u8qx4arf/production/06baa6cdd698c5fdbfed0312edc9d0c1862da66c-155x155.png"
              alt="Award1"
              className="h-[120px]  "
            />
          </div>
          <div>
            <img
              src="https://cdn.sanity.io/images/u8qx4arf/production/65e6200766a57d5d7d6a8391dd60f4611cd08a27-127x155.png"
              alt="Award2"
              className="h-[120px]"
            />
          </div>
          <div>
            <img
              src="https://cdn.sanity.io/images/u8qx4arf/production/cbec8b97a6bf71eb2e5e6e17c64d746796d51085-154x155.png"
              alt="Award3"
              className="h-[120px]"
            />
          </div>
        </div>
      </div>
      <div className=" sm:h-[100%] h-[450px] object-cover flex justify-center items-center  ">
        <img
          src="https://cdn.sanity.io/images/u8qx4arf/production/719b9927c0c61f58c77df7c4c9ddaca3af3a715d-2560x920.png"
          className="object-cover h-[450px] sm:h-full pb-0"
          alt="Quote"
        />
      </div>
    </div>
  );
}
export default Thoughts;