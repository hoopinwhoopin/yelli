function Hero() {
  return (
    <div className="bg-hero-pattern h-screen flex flex-auto bg-cover justify-center items-center text-white lg:text-5xl text-3xl  bg-top px-20 pb-20">
      <div className=" mt-auto ml-auto text-yellow-300 flex-col flex  ">
        <div className="Boldy flex flex-row ">
          LOVE{" "}
          <p className="Actonia lg:text-5xl text-3xl  text-nowrap text-white ml-2 mr-2 pb-0 pt-2">
            {" "}
            is the{" "}
          </p>
          <span className=" text-nowrap Boldy text-white">WHOLE THING.</span>
        </div>
        <div className="Boldy text-white text-end">
          <p> WE ARE ONLY PIECES.</p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
