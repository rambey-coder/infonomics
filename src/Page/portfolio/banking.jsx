import React from 'react';
import { FiCheck } from 'react-icons/fi';
import Slideshow from './Slideshow';

const Banking = () => {
    const slides = [
        {
            img: '/assets/banking/banking-login.png',
            title: "Secure Corporate Login",
            msg: "Role-based access control with multi-factor authentication"
        },
        {
            img: '/assets/banking/banking-login.png',
            title: "Account and Accounts Management",
            msg: "Complete functions to manage user and accounts"
        },
        {
            img: '/assets/banking/accounts/dashboard.jpg',
            title: "Dashboard",
            msg: "Customer dashboard"
        },
        {
            img: '/assets/banking/accounts/account-mgmt.jpg',
            title: "Account management",
            msg: "Manage customer accounts"
        },
        {
            img: '/assets/banking/accounts/beneficiary-mgmt.jpg',
            title: "Beneficiary management",
            msg: "Manage beneficiary for money transfer"
        },
        {
            img: '/assets/banking/accounts/change-pass.jpg',
            title: "Change password",
            msg: "Change password"
        },
        {
            img: '/assets/banking/banking-login.png',
            title: "Transaction Management",
            msg: "Different types of transactions at account and corporate level"
        },
        {
            img: '/assets/banking/transactions/own-acc-transfer.jpg',
            title: "Own account transfers",
            msg: "Transfer between different accounts belonging to the same person or corporate entity"
        },
        {
            img: '/assets/banking/transactions/single-transfer.jpg',
            title: "Single transfer",
            msg: "Single transfer to a beneficiary",
        },
        {
            img: '/assets/banking/transactions/multiple-transfer.jpg',
            title: "Multiple transfer",
            msg: "Multiple transfers to multiple beneficiaries",
        },
        {
            img: '/assets/banking/transactions/bulk-transfer.jpg',
            title: "Bulk transfer",
            msg: "Bulk transfers to multiple beneficiaries using file upload in a specified format",
        },
        {
            img: '/assets/banking/transactions/direct-debit-request.jpg',
            title: "Direct debit request",
            msg: "Set up direct debit request to periodically transfer to specified amount to specified account",
        },
        {
            img: '/assets/banking/transactions/standing-instruction.jpg',
            title: "Standing instruction",
            msg: "Active and historical direct debit instructions executed",
        },
        {
            img: '/assets/banking/transactions/trans-history.jpg',
            title: "Transction history",
            msg: "All transactions for the account including failed ones. Receipt can be printed from here as well",
        },

        

        
    ];

    return (
        <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className="text-4xl font-bold text-[#0A2463]">
                    Corporate Internet Banking Platform
                </h2>
                <p className="text-lg text-gray-600">
                    Secure transaction platform designed for Payment Service Banks,
                    supporting bulk payments, multi-level approvals, and real-time
                    reconciliation.
                </p>

                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="font-semibold mb-2">Core Features</h3>
                        <ul className="space-y-2 text-sm">
                            {['Corporate Onboarding',
                                'Approval Workflows',
                                'Bulk Transactions',
                                'API Integrations'].map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <FiCheck className="text-[#3A86FF] text-sm" />
                                        {item}
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className="bg-[#0A2463] p-6 rounded-xl text-white">
                        <h3 className="font-semibold mb-2">Coming Soon</h3>
                        <p className="text-sm opacity-90 mb-4">Currently in development for Q3 2025 launch</p>
                        <div className="flex items-center gap-2">
                            <div className="flex-1 h-2 bg-white/20 rounded-full">
                                <div className="w-2/3 h-2 bg-[#3A86FF] rounded-full"></div>
                            </div>
                            <span className="text-xs">70% Complete</span>
                        </div>
                    </div>
                </div>

                <button className="bg-[#FF3B30] text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-red-600 transition">
                    Request Early Access
                </button>
            </div>

            <Slideshow slides={slides} />
        </section>
    );
};

export default Banking;