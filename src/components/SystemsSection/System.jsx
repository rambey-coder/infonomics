import { useThemeContext } from "../../context/Context";
import "./style.scss";

const System = () => {
  const { theme } = useThemeContext();

  const lightTheme = {
    background: "linear-gradient(320deg, #21214F, #85374E)",
  };

  const darkTheme = {
    background: "",
  };

  const heroStyles = (theme) => ({
    background:
      theme === "light" ? lightTheme.background : darkTheme.background,
  });

  // https://docs.google.com/presentation/d/1gtwRpIGOK1YlkTdGSMf1_ymloa13RJ2r/edit?usp=sharing&ouid=111340413373821216017&rtpof=true&sd=true

  return (
    <div className="system_container" id="services" style={heroStyles(theme)}>
      <div className="container val_head">
        <h2 className="!text-3xl">
          We offer a range of services to suit your needs
        </h2>
        <p>
          Elevating Possibilities: Unveiling the Essence of Infonomics
          Technology Services Limited.
        </p>

        <div className="!grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  val_cont">
          <div>
            <img src="/analytic.svg" />
            <h5>Business intelligence (BI) and Analytic Services</h5>
            <p>
              Data Warehousing, VAS short code integration, Master Data
              Management, Data Visualization and Reporting, Analytics, BI-
              operation management and Machine and Deep Learning.{" "}
            </p>
          </div>

          <div>
            <img src="/settings.svg" />
            <h5>Managed Service Operation and Resourcing</h5>
            <p>
              Managed Services, Smart Sourcing, Client Resource Augmentation,
              Project Resourcing, Agile Project Management, and Upskilling and
              knowledge transfer.
            </p>
          </div>
          <div>
            <img src="/dash.svg" />
            <h5>Enterprise Applications</h5>
            <p>
              ERP Implementation and Support, CRM Implementation and Support,
              Sales Enablement and Intelligence and Custom backend, web & mobile
              application development.
            </p>
          </div>
          <div>
            <img src="/code.svg" />
            <h5>Telco Services</h5>
            <p>
              VAS short code integration, Custom VAS application development,
              and Telco product testing.
            </p>
          </div>
          <div>
            <img src="/cloud.svg" />
            <h5>Cloud Deployment, Integration and Assurance Services</h5>
            <p>
              Software as a Service (SaaS), Infrastructure/Platform as a
              Service, and Cloud software services development and support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default System;
