import React, { useState } from "react";
import { FiArrowRight, FiPlay, FiCheck, FiSmartphone } from "react-icons/fi";
import Slideshow from "./Slideshow";

const Erp_telco = () => {
  const distributionSlides = [
    {
      img: "/assets/erp/purchase-order.jpg",
      title: "Procure to Inventory",
      url: "#Procure-to-Inventory",
      msg: "Procure-to-inventory processes automation using our custom built ERP procurement and inventory modules",
    },
    {
      img: "/assets/erp/pos-point.jpg",
      title: "Point of Sales",
      url: "#inventory-to-sales",
      msg: "Inventory-to-sales process using Inventory and Point of Sales modules in the ERP",
    },
    {
      img: "/assets/erp/xla-subledger.jpg",
      title: "Integration with Oracle Fusion",
      url: "#integration-with-oracle-fusion",
      msg: "Internal subledgers integration with Oracle Fusion Cloud",
    },
  ];

  const procureInvSlides = [
    {
      img: "/assets/erp/distribution/procureinv/create-order.jpg",
      title: "Internal Order",
      msg: "Raise internal request for shop replenishment",
    },
    {
      img: "/assets/erp/distribution/procureinv/approve-order.jpg",
      title: "Approve Order",
      msg: "Multi-level order approval",
    },
    {
      img: "/assets/erp/distribution/procureinv/recieve-approved-order.jpg",
      title: "Receive Order",
      msg: "List of fulfilled order to receive",
    },
    {
      img: "/assets/erp/distribution/procureinv/receive-on-order.jpg",
      title: "Receive Stock into Inventory",
      msg: "Receive fulfilled stock into inventory including scanning for external orders",
    },
    {
      img: "/assets/erp/distribution/procureinv/inventory.jpg",
      title: "Inventory Management",
      msg: "Manage and report on inventory items",
    },
    {
      img: "/assets/erp/distribution/procureinv/moveinventory.jpg",
      title: "Inventory Movements",
      msg: "Move inventory items from one location to another",
    },
  ];

  const invSalesSlides = [
    {
      img: "/assets/erp/distribution/invsales/retail-sales.jpg",
      title: "Retail Shop Sales",
      msg: "Sale from inventory to walk-in customers",
    },
    {
      img: "/assets/erp/distribution/invsales/pos-point.jpg",
      title: "POS Sales",
      msg: "Field Sales by agents",
    },
  ];

  const oracleIntSlides = [
    {
      img: "/assets/erp/distribution/oracleint/xla.jpg",
      title: "Integration with Oracle",
      msg: "All transactions generates subledgers accounting entries that are posted to Oracle Fusion Cloud",
    },
  ];
  return (
    <section className="space-y-20">
      {/* Telecom Module */}
      <div className="grid md:grid-cols-2 !gap-12 !items-center !mt-8">
        <div className="!space-y-6">
          <div className="text-4xl flex items-center gap-2 text-[#FF3B30]">
            <FiSmartphone className="text-4xl" />
            <span className="font-semibold">Distribution and Sales</span>
          </div>
          <h2 className="text-2xl font-bold text-[#0A2463]">
            Streamlined Sales & Inventory Management
          </h2>
          <p className="text-lg text-gray-600">
            End-to-end business solution managing 5000+ sales agents across
            Nigeria with real-time stock visibility and sales tracking.
          </p>
          <ul className="space-y-3">
            {[
              "Agent performance dashboards",
              "Inventory availabilit reporting",
              "Stock replenishment integrated with Oracle Fusion",
              "Multi-level approvals",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <FiCheck className="text-[#3A86FF]" />
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-[#FF3B30] text-white !px-8 !py-3 !rounded-lg flex items-center gap-2 hover:bg-red-600 transition">
            <FiPlay /> Watch Demo
          </button>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-lg">
          <Slideshow slides={distributionSlides} />
        </div>
      </div>

      {/* Telecom Module - Internal order-to-inventory */}
      <div className="grid md:grid-cols-2 !gap-12 items-center bg-[#0A2463] !text-white !p-12 !rounded-2xl">
        <div className="!space-y-6">
          <h3
            id="procure-to-inventory"
            className="!text-3xl !font-bold !text-white">
            Procure-to-Inventory
          </h3>
          <p className="!text-sm !opacity-90 !text-white">
            Implemented internal Procure-to-inventory processes automation using
            our custom built ERP procurement and inventory modules for automated
            and manual requests for stock with approval workflow, delivery and
            receipt of the stock item into POS inventory locations across the
            country
          </p>
          <div className="grid grid-cols-2 !gap-8">
            {[
              "80% improvement in inventory management",
              "50+ inventory locations",
              "₦6B+ inventory under management",
              "100% Integration with Oracle Fusion",
            ].map((metric) => (
              <div key={metric} className="!border-l-2 border-[#3A86FF] !pl-4">
                <p className="!text-2xl !font-bold !text-white">
                  {metric.split(" ")[0]}
                </p>
                <p className="!text-sm !opacity-80 !text-white">
                  {metric.split(" ").slice(1).join(" ")}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <Slideshow slides={procureInvSlides} />
        </div>
      </div>

      {/* Telecom Module - Direct to Customer Sales */}
      <div className="grid md:grid-cols-2 !gap-12 items-center !bg-[#0A2463] !text-white !p-12 !rounded-2xl">
        <div className="!space-y-6">
          <h3 id="inventory-to-sales" className="!text-3xl !text-white !font-bold">
            Inventory-to-Sales
          </h3>
          <p className="!text-lg !text-white opacity-90">
            Implemented Inventory-to-sales process using Inventory and Point of
            Sales modules in the ERP to enable direct sales to customers from
            the telco sales outlets. Adapted same solution to power over 30
            partners' sales outlets across the country.
          </p>
          <div className="grid grid-cols-2 !gap-8">
            {[
              "90% improvement in Sales Experience",
              "100% Audit Compliance",
              "50+ Outlets",
              "₦5B+ Sales",
            ].map((metric) => (
              <div key={metric} className="!border-l-2 !border-[#3A86FF] !pl-4">
                <p className="!text-2xl !font-bold !text-white">{metric.split(" ")[0]}</p>
                <p className="!text-sm !!opacity-80 !text-white">
                  {metric.split(" ").slice(1).join(" ")}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <Slideshow slides={invSalesSlides} />
        </div>
      </div>

      {/* Telecom Module - Direct Integration with Oracle Fusion */}
      <div className="grid md:grid-cols-2 !gap-12 items-center bg-[#0A2463] !text-white !p-12 rounded-2xl">
        <div className="!space-y-6">
          <h3
            id="integration-with-oracle-fusion"
            className="!text-3xl !text-white !font-bold">
            Integration with Oracle Fusion
          </h3>
          <p className="!text-lg  !text-white !opacity-90">
            Implemented internal subledgers for all the modules deployed and
            integrated the internal subledgers with Oracle Fusion Cloud
          </p>
          <div className="grid grid-cols-2 gap-8">
            {[
              "100% integration achieved",
              "Direct GL integration for sales",
              "Invoicing integration for partner charge-backs",
              "Inventory integration with Warhouse Management Module",
            ].map((metric) => (
              <div key={metric} className="!border-l-2 border-[#3A86FF] !pl-4">
                <p className="!text-2xl !text-white !font-bold">{metric.split(" ")[0]}</p>
                <p className="!text-sm !opacity-80 !text-white">
                  {metric.split(" ").slice(1).join(" ")}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <Slideshow slides={oracleIntSlides} />
        </div>
      </div>
    </section>
  );
};

export default Erp_telco;
