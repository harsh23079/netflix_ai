import { useRef, useState } from "react";
import GetStartedHome from "./Home/GetStartedHome";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const [emailInput, setEmailInput] = useState("");
  const ref = useRef("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (emailInput !== "") navigate(`signup`);

    setEmailInput("");
  };
  return (
    <div className="">
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="home-logo"
          className="h-screen w-full brightness-50"
          draggable={false}
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white w-[1100px] flex flex-col items-center gap-5">
        <div className="text-6xl font-extrabold">
          Unlimited movies, TV shows and more
        </div>
        <div className="text-3xl">Watch anywhere. Cancel anytime.</div>
        <div className="text-2xl">
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className="text-lg flex gap-2">
          <input
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            placeholder="Email address"
            className="w-[400px] h-14 px-2 outline-none focus:outline-white border rounded-lg bg-gray-800 bg-opacity-60 "
          />
          <button
            onClick={handleSubmit}
            className="bg-red-600 h-14 w-[200px] px-2 text-2xl font-bold rounded-lg hover:bg-red-800"
          >
            Get Started &nbsp; {">"}
          </button>
        </div>
      </div>
      <div>
        <GetStartedHome />
      </div>
    </div>
  );
};
export default GetStarted;
