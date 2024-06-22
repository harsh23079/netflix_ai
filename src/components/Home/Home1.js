const Home1 = () => {
  return (
    <div className="flex justify-between items-center h-[500px]">
      <div className="flex flex-col gap-10 w-6/12 ">
        <div className="text-5xl font-extrabold">Enjoy on your TV</div>
        <div className="text-2xl font-semibold">
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more.
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
            className="w-[300px] "
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
        <div className=" w-[500px] ">
          {" "}
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="tv_img"
            className="w-auto h-[300px]  absolute -top-14 right-[9.5rem] "
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};
export default Home1;
