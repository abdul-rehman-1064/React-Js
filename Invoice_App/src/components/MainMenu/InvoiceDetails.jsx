import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../Button";
import logo from "../../assets/logo1.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function InvoiceDetails() {
  const location = useLocation();
  const [invoiceData, setInvoiceData] = useState(location.state);
  console.log(location.state);

  const printInvoice = () => {
    const input = document.getElementById("invoice");
    html2canvas(input, { useCORS: true }).then((canvas) => {
      const imageData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: [612, 792],
      });
      pdf.internal.scaleFactor = 1;
      const imageProps = pdf.getImageProperties(imageData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHight = (imageProps.height * pdfWidth) / imageProps.width;

      pdf.addImage(imageData, "PNG", 0, 0, pdfWidth, pdfHight);
      pdf.save("invoice" + new Date());
    });
  };

  return (
    <>
      <div className="first flex justify-center lg:justify-end">
        <Button childrenText="Print Invoice" onClick={printInvoice} />
      </div>
      <div id="invoice" className="second flex justify-evenly mt-2 ">
        <div className="invoice bg-white min-h-[1000px] min-w-[20%] lg:w-[50%] rounded-sm text-black">
          <div className="flex justify-between items-center  bg-white m-4 mb-10 mt-16">
           
            <div className="detail lg:ml-10  bg-white">
              <h2 className="font-bold text-3xl text-[#00d8d8] bg-white">
                INVOICE
              </h2>
              <h5 className="text-xl font-semibold bg-white">
               _ {invoiceData.CustomerName}
              </h5>
              <h5 className="text-xl font-semibold bg-white">
                {invoiceData.phoneNumber}
              </h5>
              <p className='font-semibold text-xl w-[340px] bg-white'>{invoiceData.address}</p>
            </div>
             <div className="logo inline-block w-24 h-24 rounded-full  mr-8">
              <img
                src={logo}
                className="w-[200px] h-[100px] rounded-full"
                alt=""
              />
            </div>
          </div>
          <hr />
            <h1 className="mt-2 text-center font-bold text-3xl bg-white">INVOICE DETAILS:</h1>
          <div className="table bg-white mt-2 ">
            <div className="sm:overflow-visible overflow-x-auto w-full bg-white">
            <table className="bg-white border-2  border-black lg:ml-8 lg:mt-12 lg:mb-20">
              <thead>
                <tr className="border-2">
                  <th className="bg-white border-2 border-black font-semibold   p-6">
                    S.No
                  </th>
                  <th className="bg-white border-2 border-black font-semibold   p-6">
                    Product Name
                  </th>
                  <th className="bg-white border-2 border-black font-semibold   p-6">
                    Price
                  </th>
                  <th className="bg-white border-2 border-black font-semibold   p-6">
                    Quantity
                  </th>
                  <th className="bg-white border-2 border-black font-semibold   p-6">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {invoiceData?.products.map((product, index) => {
                  return (
                    <tr key={index} className=" border-2 border-black  ">
                      <td className="bg-white border-2 border-black font-semibold    p-4">
                        {index + 1}
                      </td>
                      <td className="bg-white border-2 border-black  font-semibold   p-4">
                        {product.name}
                      </td>
                      <td className="bg-white border-2 border-black  font-semibold   p-4">
                        {product.price}
                      </td>
                      <td className="bg-white border-2  border-black  font-semibold  p-4">
                        {product.qty}
                      </td>
                      <td className="bg-white border-2  border-black font-semibold   p-4">
                        {product.price * product.qty}
                      </td>
                    </tr>
                  );
                })}
              </tbody>

              <tfoot>
                <tr>
                  <td
                    colSpan="4"
                    className="bg-black text-white font-semibold ~"
                  >
                    Total Amount - 
                  </td>
                  <td className="bg-black text-white font-bold p-2 font-sans">
                    {invoiceData.total}
                  </td>
                </tr>
              </tfoot>
            </table>
            </div>
           

             <div className="mt-40 text-sm border border-dashed border-gray-500 text-gray-600 text-center px-4 max-w-3xl mx-auto leading-relaxed">

            <h2 className=" pt-9 text-center font-semibold text-[#00d8d8]">
              &copy; 2025 Invoicely — Empowering Your Business, One Invoice at a
              Time.
            </h2>
            <p className=" text-white mt-2 ml-8 mb-3 text-center">
              This invoice is computer generated and does not require a physical
              signature.
            </p>
              <p className="mb-2 font-medium">
                Thank you for your business! We appreciate your prompt payment.
              </p>
              <p className="mb-4">
                For any questions regarding this invoice, please contact us at
                <span className="text-blue-600 font-medium">
                  {" "}
                  support@invoicely.com
                </span>
                .
              </p>

              <h3 className="font-semibold underline mb-1">
                Terms & Conditions:
              </h3>
              <p>
                Payment is due within 7 days unless otherwise agreed upon in
                writing. Late payments may be subject to additional charges.
                Products and services listed in this invoice are provided{" "}
                <span className="italic">"as is"</span> without warranties
                unless specified. All sales are final unless stated. Please
                retain this invoice for your records.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvoiceDetails;
