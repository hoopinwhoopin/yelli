
function GetInTouch() {
  return (
    <div className="w-full flex flex-col items-center text-center justify-center pt-20">
      <div className="sm:w-1/2 w-full px-10 sm:p-0">
        <span className="Actonia text-6xl text-[#FFCA00]">Hello!</span>
        <h1 className="sm:lg:text-5xl text-4xl mt-2 uppercase Boldy   text-black ">
          tell us all we need to know about you
        </h1>
        <p className="text-[#4A4A4A] Courier font-medium tracking-wider sm:text-lg text-sm mb-10">
          Please fill in the form below and provide as many details as possible
          to help us create an accurate and fair quote for your special
          occasion.
          <br />
          <br />
          Please go through our FAQ section to find answers to some common
          questions.
        </p>
        <span className="text-4xl uppercase text-[#FFCA00] Boldy">
          Get in touch with us
        </span>
        <br />
        <span className="text-sm Courier ">required fields are marked *</span>

        <div className=" Courier justify-start flex flex-col items-start mt-5">
          <span>What services are you looking for?</span>

          <div className="w-full justify-between flex sm:flex-row flex-wrap ">
            <div>
              <input type="checkbox" className=" Courier rounded-full" /> Photos
            </div>

            <div>
              <input type="checkbox" className=" Courier rounded-full" /> Photos & Videos
            </div>

            <div>
              <input type="checkbox" className=" Courier rounded-full" /> Couples Session
            </div>

            <div>
              <input type="checkbox" className=" Courier rounded-full" /> Question
            </div>
          </div>
          <div className="w-full mt-10">
            <div className="w-full">
              <input
                type="text"
                placeholder="Your Name*"
                className=" Courier w-full bg-[#EDECE7] border-none p-5 rounded mb-5"
              />

              <input
                type="text"
                placeholder="Your Email*"
                className=" Courier w-full bg-[#EDECE7] border-none p-5 rounded mb-5"
              />

              <input
                type="text"
                placeholder="Your Phone*"
                className=" Courier w-full bg-[#EDECE7] border-none p-5 rounded mb-5"
              />

              <input
                type="text"
                placeholder="Estimated Guest Count*"
                className=" Courier w-full bg-[#EDECE7] border-none p-5 rounded mb-5"
              />

              <textarea

                placeholder="Describe the details of the wedding- event schedule, venues.*"
                className="Courier w-full bg-[#EDECE7] border-none p-5 rounded h-[200px]"
              />
              <div className=" Courier w-full flex justify-start">
                <span>
                  please describe in length the details of the wedding
                </span>
              </div>
              <input type="text"   placeholder="Location of the wedding*" className="Courier w-full bg-[#EDECE7] border-none p-5 rounded mt-5 mb-5"/>
              <input type="text" placeholder="Event Dates*" className=" Courier w-full bg-[#EDECE7] border-none p-5 rounded mb-5"/>
            </div>
       
            <button className="border-[2px] border-black text-black p-3 rounded uppercase text-sm mb-20" type="button">Submit</button>
        
          </div>
      </div>
      </div>
    </div>
  );
}

export default GetInTouch;
