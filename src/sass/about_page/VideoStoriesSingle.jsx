import ReactPlayer from "react-player";
import Header from "../../components/Header";

function VideoStoriesSingle() {
  return (
    <div>
      <div className="h-full bg-[#1C1C1C]">
        <Header />
        <div className="w-full flex flex-col mt-32 items-center min-h-screen">
          <ReactPlayer
            url="https://youtu.be/ipgt1MnQni4"
            width="80%"
            height="80vh"
          />
          <div className="flex flex-col justify-center items-center w-[80%] text-white border-b-4 border-indigo-500">
            <div className="uppercase mt-10 text-[#D8CAB1] text-3xl font-extrabold flex-row">
                {" "}
             
                <p> MELANIE + ELROY</p>
         
               </div>        
                      <p>Goa</p>    
            </div>
            <div className="flex flex-col sm:flex-row w-full sm:p-10 p-5 justify-around text-left m-6 font-sans mb-20 ">
              <p className=" Courier mt-5 pr-7  text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Massa tincidunt dui ut ornare lectus sit amet est placerat. Consectetur purus ut faucibus pulvinar elementum. Dolor sit amet consectetur adipiscing elit pellentesque.</p>
              <p className=" Courier mt-5  text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Massa tincidunt dui ut ornare lectus sit amet est placerat. Consectetur purus ut faucibus pulvinar elementum. Dolor sit amet consectetur adipiscing elit pellentesque.</p>
            </div>
            </div>
          </div>
        </div>
      
  );
}

export default VideoStoriesSingle;
