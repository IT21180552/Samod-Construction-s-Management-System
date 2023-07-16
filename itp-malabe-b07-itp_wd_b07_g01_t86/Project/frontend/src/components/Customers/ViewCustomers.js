import axios from "axios";
import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function ViewCustomers(props) {
  const [customerList, setCustomerList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/customer")
      .then((res) => {
        console.log(res.data);
        setCustomerList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!customerList) {
    return <div>Finding data....</div>;
  }

  var arrayLists = [];

  customerList &&
    customerList.map((item) => {
      const data = {
        name:
          item.gender === "male"
            ? "Mr." + item.firstName + " " + item.lastName
            : "Ms." + item.firstName + " " + item.lastName,
        email: item.email,
        contact: item.phone,
      };
      arrayLists.push(data);
    });

  console.log(arrayLists);

  const generatePDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Name", "Email", "Contact number"];
    const tableRows = [];

    arrayLists.map((customer) => {
      const CustomerData = [customer.name, customer.email, customer.contact];
      tableRows.push(CustomerData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.save("Customer.pdf");
  };

  return (
    <div className="p-10 w-full h-96 overflow-auto">
      <button
        onClick={generatePDF}
        className="m-auto flex h-14 w-fit items-center gap-2 rounded-full px-4 py-4 font-medium text-white dark:bg-gray-800"
      >
        <span className="h-8 w-8 text-blue-500">
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
        </span>
        <span>Generate Report</span>
      </button>
<br />
      {customerList.map((val, key) => {
        return (
          <div className="flex flex-row w-[100%] shadow-xl bg-white h-[230px] p-[5px] items-center relative rounded-md mb-5">
            <div className="h-[200px] w-[200px] overflow-hidden flex justify-center items-center rounded-full">
              <img className=" h-[100%] m-[5px]" src={val.image} alt="Avatar" />
            </div>
            <div className="h-[200px] p-[5px] ml-[25px] flex flex-col  items-left justify-between">
              <h1 className="font-bold text-[30px]">
                {val.gender === "male" ? "Mr." : "Ms." + " "}
                {" " + val.firstName + " " + val.lastName}
              </h1>
              <div className="flex  flex-row">
                <h1 className="font-bold text-[20px]">Email:</h1>
                <h1 className="ml-[5px] text-[20px]">{val.email}</h1>
              </div>

              <div className="flex  flex-row">
                <h1 className="font-bold text-[20px]">Contact Number:</h1>
                <h1 className="ml-[5px] text-[20px]">{val.phone}</h1>
              </div>
            </div>
            <div className="absolute right-[50px] py-[95px] h-[100%] flex flex-col justify-between">
              <button class="btn gap-2 bg-[#ED254E] border-none hover:bg-[#FF0000]  normal-case">
                <svg
                  fill="none"
                  stroke="currentColor"
                  width={"25"}
                  height={"25"}
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
                <p
                  onClick={(e) => [
                    axios
                      .delete("http://localhost:5000/customer/" + val._id)
                      .then((res) => {
                        console.log(res.data);
                      })
                      .catch((err) => {
                        console.log(err);
                      }),
                  ]}
                >
                  Delete Customer
                </p>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
