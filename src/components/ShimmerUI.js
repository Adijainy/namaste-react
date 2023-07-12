const ShimmerUi = () => {
  return (
    <>
      <div class="container">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} class="shimmer-card">
              <div class="img-block"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="shimmer"></div>
            </div>
          ))}
      </div>
    </>
  );
};
export default ShimmerUi;
