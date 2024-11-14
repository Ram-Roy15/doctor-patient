

const Slide = ({image, text}) => {

    return (
        <div
  className="hero h-[600px]"
  style={{
    backgroundImage: "url(" + image + ")",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <p className="mb-5">
     {text}
      </p>
    </div>
  </div>
</div>
    );
};

export default Slide;