import { useEffect } from "react";
import Header from "../components/Header";
import TestimonialTile from "../components/TestimonialTile";
import useFetchData from "../customHooks/useFetchData";

function Testimonials() {
  const { testimonialsData, fetchTestimonials } = useFetchData();

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div>
      <div>
        <Header />
        <img
          src="https://cdn.sanity.io/images/u8qx4arf/production/6297a834a703a7dc29917260d5f4d49468908aca-2560x920.png"
          alt=""
          className="w-full h-[70vh] object-cover object-top"
        />
      </div>
      <div className="bg-testimonials flex flex-col justify-center items-center">
        <div className="sm:w-1/2 flex justify-center items-center flex-col">
          <div className="sm:w-[60%] text-nowrap mt-5  flex flex-row">
            <div className="h-[200%]  flex justify-end">
              <span className="sm:text-4xl  text-2xl Actonia text-white ">
                our
              </span>
            </div>
            <span className="text-black Boldy sm:text-4xl text-2xl">
              HAPPY COUPLES
            </span>
          </div>
          <div className="sm:w-[60%] text-nowrap flex justify-end">
            <span className="sm:text-4xl text-2xl Actonia text-black">and</span>{" "}
            <span className="text-white Boldy sm:text-4xl text-2xl">
              THEIR THOUGHTS
            </span>
          </div>
          {testimonialsData?.map((item, index) => (
            <div>
              <TestimonialTile
                name={`${item?.firstPersonName} + ${item?.secondPersonName}`}
                content={item?.description}
                title={item?.title}
                img={item?.image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className=" h-[100%] flex justify-center items-center  ">
        <img
          src="https://cdn.sanity.io/images/u8qx4arf/production/719b9927c0c61f58c77df7c4c9ddaca3af3a715d-2560x920.png"
          className="w-100% h-100% pb-0"
          alt="Quote"
        />
      </div>
    </div>
  );
}

export default Testimonials;
