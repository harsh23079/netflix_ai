import React from "react";

const Home3 = () => {
  return (
    <div className="flex justify-between items-center h-[500px]">
      <div className="flex flex-col gap-10 w-6/12">
        <div className="text-5xl font-extrabold">Watch everywhere</div>
        <div className="text-2xl font-semibold">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </div>
      </div>
      <div className=" relative  ">
        <div className=" ">
          {" "}
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            className="w-[300px]  "
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              type="video/mp4"
            />
          </video>
        </div>
        <div className=" w-[500px] ">
          {" "}
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            alt="tv_img"
            className="w-auto h-[400px]  absolute -top-12 right-[6rem] "
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Home3;
