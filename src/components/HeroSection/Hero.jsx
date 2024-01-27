import Marquee from "react-fast-marquee";
import "./style.scss";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <div className="text-cont">
            <h2>Empowering with Digital Innovation and Real-time Decisions.</h2>

            <p>
              As a trusted solutions provider, we create software and
              data-centric applications to keep our clients ahead in the
              competition by offering actionable insights.
            </p>

            <div className="btn-cont">
              <a to="#contact" className="learn-btn">
                <span>
                  <img src="/arrow.svg" />
                </span>
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img src="/hero-img.png" />
        </div>
      </div>

      <Marquee className="hero-bottom">
        <img src="/mtn.svg" />
        <img src="/eric.svg" />
        <img src="/ntel.svg" />
        <img src="/page.svg" />
        <img src="/emr.svg" />
        <img src="/quick.svg" />
      </Marquee>
    </div>
  );
};

export default Hero;
