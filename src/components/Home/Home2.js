import React from "react";

const Home2 = () => {
  return (
    <div className="flex justify-between items-center  h-[500px] ">
      <div className="flex flex-col justify-center ">
        <img
          className="h-42 "
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt="mob_img"
        />
        <div className="flex justify-between items-center w-[400px] border rounded-lg p-2 px-4 relative -top-[130px] left-[110px] bg-black">
          <div className="flex items-center gap-2">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt="strangerimage"
              className="h-20"
            />
            <div className="">
              <div>Stranger Things</div>
              <div className="text-sky-600">Downloading...</div>
            </div>
          </div>

          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
            alt="gif"
            className="h-20"
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 w-6/12">
        <div className="text-5xl font-extrabold">
          Download your shows<br></br> to watch offline
        </div>
        <div className="text-2xl font-semibold">
          Save your favourites easily and always have something to watch.
        </div>
      </div>
    </div>
  );
};

export default Home2;
