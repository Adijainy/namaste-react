const ShimmerUi = () => {
  return (
    <>
      <div className="container">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmer-card">
              <div className="img-block"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="shimmer"></div>
            </div>
          ))}
      </div>
    </>
  );
};
export default ShimmerUi;
