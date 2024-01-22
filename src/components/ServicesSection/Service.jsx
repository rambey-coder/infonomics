import "./style.scss";

const Service = () => {
  return (
    <div className="container service_cont">
      <div className="service-header">
        <h2>Our Services</h2>
        <p>
          We provide world-class enterprise systems solutions using highly
          skilled professionals.
        </p>
      </div>

      <div className="service-content">
        <div className="service-desc">
          <div>Business intelligence (BI) and Analytic Services</div>
          <div>Managed Service Operation and Resourcing</div>
          <div>Enterprise Applications</div>
          <div>Telco Services</div>
          <div>Cloud Deployment, Integration and Assurance Services</div>
        </div>

        <div className="service-text">
          <div>
            <img src="service-img.png" />
          </div>
          <div className="mini-text">
            <div>
              <h6>Data Warehousing </h6>
              <p>Oracle, Hadoop, SQL Server, AWS Redshift, Azure Synapse</p>
            </div>
            <div>
              <h6>Data Integration </h6>
              <p>
                ETLs – Oracle Data Integrator, SSIS, Infomatica, Airflow, AWS
                Glue, Spark, Kafka, Google-Big Query, etc
              </p>
            </div>
            <div>
              <h6>Master Data Management </h6>
              <p>MDM</p>
            </div>
            <div>
              <h6>Data Visualization and Reporting </h6>
              <p>
                (Tableau, OTBI, Oracle Cloud Analytics, Power BI, Apache
                Superset, Qlick, etc)
              </p>
            </div>

            <div>
              <h6>Analytics</h6>
              <p>
                • Marketing Analytics • Customer Analytics, and • Predictive
                Analytics
              </p>
            </div>

            <div>
              <h6>BI operation management and support</h6>
            </div>
            <div>
              <h6>
                Big Data, Data Lakes, Data Lake House, and Data Warehouse.
              </h6>
            </div>
            <div>
              <h6>Machine and Deep Learning </h6>
              <p>Intersystems Iris, AWS SageMaker, Rapid Miner, Altyrex</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
