const AccordionData = (props) => {
  const { value, isActive, onClick } = props;

  return (
    <div className="text-xl">
      <div
        className=" bg-zinc-700 p-5 my-5  flex justify-between items-center cursor-pointer  "
        onClick={onClick}
      >
        <div>{value.question}</div>

        <div className="text-3xl">{isActive ? "✕" : "＋"}</div>
      </div>
      {isActive && (
        <div className="bg-zinc-700 p-5 -mt-4 flex flex-col gap-4 ">
          <p>{value?.answer[0]}</p>
          <p> {value?.answer[1]}</p>
        </div>
      )}
    </div>
  );
};
export default AccordionData;
