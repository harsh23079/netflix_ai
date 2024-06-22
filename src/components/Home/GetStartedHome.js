import AccordionData from "./AccordionHome";
import Home1 from "./Home1";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import { accordionData } from "../../utils/accordionData";
import { useState } from "react";

const GetStartedHome = () => {
  const [isActiveIndex, setIsActiveIndex] = useState(-1);
  const handleClick = (index) => {
    if (isActiveIndex === index) {
      setIsActiveIndex(-1);
    } else setIsActiveIndex(index);
  };

  return (
    <div className="text-white bg-black">
      <div className="border-t-8 w-full border-gray-600 p-10">
        <Home1 />
      </div>
      <div className="border-t-8 w-full border-gray-600 p-10 ">
        <Home2 />
      </div>

      <div className="border-t-8 w-full border-gray-600 p-10 ">
        <Home3 />
      </div>

      <div className="border-t-8 w-full border-gray-600 p-10">
        <Home4 />
      </div>
      <div className="border-t-8 border-b-8  w-full border-gray-600 p-10">
        <h1 className="text-center text-5xl mt-10 mb-16 font-semibold">
          Frequently Asked Questions
        </h1>
        {accordionData.map((data, index) => (
          <AccordionData
            key={data.question}
            value={data}
            isActive={index === isActiveIndex}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GetStartedHome;
