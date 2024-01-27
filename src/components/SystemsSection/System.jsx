import "./style.scss";

const System = () => {
  return (
    <div className="system_container">
      <div className="container val_head">
        <h2>We offer a range of services to suit your needs</h2>
        <p>
          Elevating Possibilities: Unveiling the Essence of Infonomics
          Technology Services Limited.
        </p>

        <div className=" val_cont">
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
