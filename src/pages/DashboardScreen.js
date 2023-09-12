import React from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../components/Common/PageTitle";

// import InvoiceIcon from "../components/Icons/InvoiceIcon";
// import Button from "../components/Button/Button";
// import QuickEditCompany from "../components/Dashboard/QuickEditCompany";
// import QuickAddClient from "../components/Dashboard/QuickAddClient";

import dashboard from './dashboard.png'
import clients from './clients.png'
import products from './products.png'
import invoice from './invoice.png'


function DashboardScreen() {
  const navigate = useNavigate();

  // const goToNewInvoice = useCallback(() => {
  //   navigate("/invoices/new");
  // }, [navigate]);

  return (
      <div>
        <div className="p-4">
          <PageTitle title="Getting Started" />
        </div>
        <div className="flex flex-wrap">
          <div className="  pl-4 pr-4 sm:pl-4 sm:pr-0 mb-4 sm:mb-1">

            <div className="w-full flex flex-wrap gap-12 item-center">
              <div className="p-4 w-[100%] md:w-[30%] hover:drop-shadow-md bg-white rounded-xl ">
                <img src={dashboard} alt="dashboard pic" className="h-20 w-20" />
                <h1 className="font-semibold text-lg mt-4">View Dashboard</h1>
                <p className="text-slate-500 mt-3 mb-5">Access your dashboard for all the updates about the clients and invoice at one place.</p>
                <button onClick={() => navigate('/dashboard')} className=" rounded bg-blue-600 text-white p-1 w-[100%] md:w-[50%] hover:bg-blue-500">Go to Dashboard</button>
              </div>

              <div className="p-4 w-[100%] md:w-[30%] hover:drop-shadow-md bg-white rounded-xl ">
                <img src={invoice} alt="invoice pic" className="h-20 w-20" />
                <h1 className="font-semibold text-lg mt-4">Create an Invoice</h1>
                <p className="text-slate-500 mt-3 mb-5">Effortlessly create, download and share professional invoices to clients</p>
                <button onClick={() => navigate('/invoices')} className=" rounded bg-blue-600 text-white p-1 w-[100%] md:w-[50%] hover:bg-blue-500">New Invoice</button>
              </div>

              <div className="p-4 w-[100%] md:w-[30%] hover:drop-shadow-md bg-white rounded-xl ">
                <img src={clients} alt="clients pic" className="h-20 w-20" />
                <h1 className="font-semibold text-lg mt-4">Upload your Clients</h1>
                <p className="text-slate-500 mt-3 mb-5">Import all your Clients for a smooth transition and improved relationship management.</p>
                <button onClick={() => navigate('/clients')} className=" rounded bg-blue-600 text-white p-1  w-[100%] md:w-[50%] hover:bg-blue-500">Upload Clients</button>
              </div>

              <div className="p-4 w-[100%] md:w-[30%] hover:drop-shadow-md bg-white rounded-xl ">
                <img src={products} alt="products pic" className="h-20 w-20" />
                <h1 className="font-semibold text-lg mt-4">Upload your Products</h1>
                <p className="text-slate-500 mt-3 mb-5">Import all your Products for a smooth transition while creating an invoice.</p>
                <button onClick={() => navigate('/products')} className=" rounded bg-blue-600 text-white p-1 w-[100%] md:w-[50%] hover:bg-blue-500">Upload Products</button>
              </div>
            </div>

          </div>
        </div>
      </div>
  );
}

export default DashboardScreen;
