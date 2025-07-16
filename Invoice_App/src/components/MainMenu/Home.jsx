import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useSelector } from "react-redux";
import { db } from "../../../fireBase/fireBase";
import Chart from "chart.js/auto";

function Home() {
  const authStatus = useSelector((state) => state.auth.userData);
  const [total, setTotal] = useState(0);
  const [monthSales, setMonthSales] = useState(0);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const queryData = query(
      collection(db, "invoices"),
      where("userId", "==", authStatus.uid)
    );
    const getData = await getDocs(queryData);
    const data = getData.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(data);
    setInvoices(data);
    overallSales(data);
    monthTotal(data);
    chartData(data);
  };

  const overallSales = (invoiceList) => {
    var sum = 0;
    invoiceList.forEach((data) => {
      sum += data.total;
    });
    setTotal(sum);
  };

  const monthTotal = (invoiceList) => {
    var sum = 0;
    invoiceList.forEach((data) => {
      if (
        new Date(data.date.seconds * 1000).getMonth() == new Date().getMonth()
      ) {
        sum += data.total;
      }
    });
    setMonthSales(sum);
  };

  const createChart = (chartData) => {
    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: Object.keys(chartData),
        datasets: [
          {
            label: "Month wise Collection",
            data: Object.values(chartData),
            borderWidth: 1,
            backgroundColor: "#00d8d8",
            borderColor: "#00d8d8",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  const chartData = (data) => {
    const chartData = {
      January: 0,
      February: 0,
      March: 0,
      April: 0,
      May: 0,
      June: 0,
      July: 0,
      August: 0,
      September: 0,
      October: 0,
      November: 0,
      December: 0,
    };

    data.forEach((d) => {
      if (
        new Date(d.date.seconds * 1000).getFullYear() ==
        new Date().getFullYear()
      ) {
        console.log("current year data", d);
        chartData[
          new Date(d.date.seconds * 1000).toLocaleDateString("default", {
            month: "long",
          })
        ] += d.total;
      }
    });
    createChart(chartData);
  };

  return (
    <>
      <div className="flex-col lg:flex-row  gap-4 lg:gap-0 flex justify-evenly items-center">
        <div className="first bg-[#1e1e1e]  h-32 min-w-64 text-center flex justify-center items-center rounded-lg hover:bg-[#00d8d8] transition-all ease-in-out cursor-pointer font-serif font-bold text-2xl flex-col p-2">
          Overall Payments
          <br /> {total}
        </div>
        <div className="second bg-[#1e1e1e] h-32 min-w-64 text-center flex justify-center items-center rounded-lg hover:bg-[#00d8d8] transition-all ease-in-out cursor-pointer font-serif font-bold text-2xl flex-col p-2">
          Invoices <br />
          {invoices.length}
        </div>
        <div className="third bg-[#1e1e1e] h-32 min-w-64 text-center flex justify-center items-center rounded-lg hover:bg-[#00d8d8] transition-all ease-in-out cursor-pointer font-serif font-bold text-2xl flex-col p-2">
          Current Month Sales <br />
          {monthSales}
        </div>
      </div>

      <div className="flex justify-evenly items-center flex-col lg:flex-row">
        <div className="chart lg:h-[400px] h-[220px] lg:min-w-[700px] min-w-400px mt-7 rounded-md p-2 text-black bg-white">
          <div>
            <canvas id="myChart"></canvas>
          </div>
        </div>
        <div className="invoice h-[400px] min-w-[400px] text-black p-2 mr-5 mt-7 rounded-md bg-white">
          <h5 className="bg-[#00d8d8] p-2 text-center text-white font-semibold">
            Recent Invoices List
          </h5>
          <div className="bg-white m-3 font-semibold flex justify-between items-center">
            <p className="bg-white underline">Customer Name</p>
            <p className="bg-white underline">Date</p>
            <p className="bg-white underline">Total</p>
          </div>
          {invoices.slice(0, 8).map((data, index) => {
            return (
              <div
                className="bg-white m-3 font-semibold border-dotted border-2 border-black rounded-md  p-1 flex justify-between items-center"
                key={index}
              >
                <p className="bg-white">{data.CustomerName}</p>
                <p className="bg-white">
                  {new Date(data.date.seconds * 1000).toLocaleDateString()}
                </p>
                <p className="bg-white">{data.total}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
