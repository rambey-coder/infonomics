import "./style.scss";

const Value = () => {
  return (
    <div className="value_container">
      <div className="container val_cont">
        <div>
          <h2>Our Values</h2>
          <div>
            <h3>Our Vision</h3>
            <p>
              To be the preferred information management and solution provider
              in Africa through strong partnership, innovation and domain
              expertise.
            </p>
          </div>
          <div>
            <h3>Our Mission</h3>
            <p>
              To ensure the long-term success of our clients through the
              deployment of effective solutions to manage data from origination,
              organization, and interpretation of insightful and actionable
              intelligence to gain competitive advantage in the marketplace.
            </p>
          </div>
          <div>
            <h3>Core Values</h3>
            <p>
              At Infonomics Technology Services Limited, our foundation rests on
              seven core values. We prioritize integrity, passion, and quality,
              delivering innovative solutions with teamwork. Our commitment to
              customer service ensures client satisfaction, while reliability
              and accountability define us as a trusted partner in consistently
              meeting deadlines and taking ownership of impactful decisions.
            </p>
          </div>
        </div>

        <div className="img-cont">
          <img src="/value-img.png" />
        </div>
      </div>
    </div>
  );
};

export default Value;
