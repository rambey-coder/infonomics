import "./style.scss";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <div className="top-cont">
            <div></div>
            <p>Infonomics Technology Services Limited</p>
          </div>
          <div className="text-cont">
            <h2>
              Transforming Opportunities With Digital Innovation & Realtime
              Decision.
            </h2>

            <p>
              We are a well-established solutions provider, specializing in
              software and data-centric applications. Our core emphasis lies in
              delivering actionable insights, consistently positioning our
              clients ahead of the competition.
            </p>
          </div>
        </div>
        <div className="hero-right">
          <img src="/hero-img.png" />
        </div>
      </div>

      <div className="hero-bottom">
        <img src="/mtn.svg" />
        <img src="/eric.svg" />
        <img src="/ntel.svg" />
        <img src="/page.svg" />
        <img src="/emr.svg" />
      </div>
    </div>
  );
};

export default Hero;
