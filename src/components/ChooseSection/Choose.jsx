import "./style.scss";

const Choose = () => {
  return (
    <div className="container choose_cont">
      <div className="img-cont ">
        <img src="/ch-img.png" alt="choose" />
      </div>

      <div className="text-cont">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>
            <h6> Cultivating Excellence in IT Services</h6>
            <p>
              Infonomics Technology Services (Infonomics ) has been in the
              business of providing IT Services to various customers over the
              last 8 years in Nigeria with highly skilled and experienced
              resources, delivering best practices solutions . Infonomics
              started with MTN Nigeria as main Business Intelligence partner.
              <br /> <br />
              This relationship has been developed and strengthened by
              continuously exceeding the expectations of our clients through
              prompt on -time and high quality service deliver.
            </p>
          </li>

          <li>
            <h6>Effective Program Management Approach</h6>
            <p>
              Infonomics extensive solution implementation experience and IT
              domain knowledge.
            </p>
          </li>
          <li>
            <h6>Expertise in Solution Implementation</h6>
            <p>
              A blend of firmness and agility ensures on-time implementation and
              accuracy right from the very first time for our customers.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Choose;
