import { useState, useEffect } from "react";
import { FiLayout, FiDollarSign } from "react-icons/fi";
import Erp_telco from "./erp_telco";
import Erp_services from "./erp_service";
import Banking from "./banking";
import { useLocation } from "react-router-dom"; // If you're using React Router
import Header from "../../components/Header/Header";

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState("erp");

  const location = useLocation();

  useEffect(() => {
    if (
      location.hash.includes("general-ledger") ||
      location.hash.includes("erp")
    ) {
      setActiveTab("erp");
    } else if (location.hash.includes("banking")) {
      setActiveTab("banking");
    }
  }, [location]);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // Delay to allow content to render
      }
    }
  }, [activeTab]);

  return (
    <>
      <Header />
      <div className="font-sans bg-[#F8F9FA] min-h-screen">
        <section className="bg-[#0A2463] text-white !py-[4rem] px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              {/* <img
                src="/assets/logo-white.png"
                alt="Infonomics"
                className="h-12 w-auto"
              /> */}
              <span className="ml-4 text-4xl font-bold">
                Driving Digital Transformation
              </span>
            </div>
            <h1 className="text-xl font-medium !text-white !mb-4">
              Enterprise Solutions Engineered for Growth
            </h1>
            <p className="!text-lg !text-white max-w-2xl">
              Specialized software solutions powering telecom operations,
              financial services, and accounting management across Africa.
            </p>
          </div>
        </section>

        {/* Solutions Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex !gap-8 !py-4">
              <button
                onClick={() => setActiveTab("erp")}
                className={`py-6 border-b-4 transition-colors ${
                  activeTab === "erp"
                    ? "!border-[#FF3B30] !text-[#0A2463]"
                    : "border-transparent text-gray-600 hover:text-[#0A2463]"
                }`}>
                <FiLayout className="inline mr-2" />
                ERP Solutions
              </button>
              <button
                onClick={() => setActiveTab("banking")}
                className={`py-6 border-b-4 !transition-colors ${
                  activeTab === "banking"
                    ? "!border-[#FF3B30] text-[#0A2463]"
                    : "border-transparent text-gray-600 hover:text-[#0A2463]"
                }`}>
                <FiDollarSign className="inline mr-2" />
                Banking Platform
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-6 py-16">
          {/* ERP Solutions Section */}
          {activeTab === "erp" && (
            <>
              <Erp_telco />
              <Erp_services />
            </>
          )}

          {/* Banking Platform Section */}
          {activeTab === "banking" && <Banking />}

          {/* Global CTA */}
          <section className="!mt-20 !text-center bg-[#0A2463] !rounded-2xl !p-16 !text-white">
            <h3 className="!text-3xl !font-bold !mb-6 !text-white ">
              Start Your Digital Transformation
            </h3>
            <p className="!text-lg !!max-w-2xl mx-auto !text-white ">
              Whether you&apos;re streamlining operations or building financial
              infrastructure, our tailored solutions drive measurable results.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-[#FF3B30] !text-white !px-8 !py-3 rounded-lg hover:bg-red-600 transition">
                Schedule Consultation
              </button>
              {/* <button className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white/10 transition">
                Download Brochure
              </button> */}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default PortfolioPage;
