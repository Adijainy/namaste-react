const ShimmerUi = () => {
  return (
    <>
      <div className="flex flex-wrap px-30 ml-20">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} className="w-64 p-5 m-2 bg-white animate-pulse">
              <div className=" h-32 bg-[#dddada] m-5 rounded-md"></div>
              <div className="h-2 my-5 bg-[#dddada] "></div>
              <div className="h-2 my-5 bg-[#dddada]"></div>
              <div className="h-2 my-5 bg-[#dddada]"></div>
            </div>
          ))}
      </div>
    </>
  );
};
export default ShimmerUi;
