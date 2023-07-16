import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from "jspdf";
import "jspdf-autotable"

export default function Paysheet() {

    // const [empID, setEmpID] = useState("Emp123456");
    // const [fullName, setFullName] = useState("Rankiri Pathirage Naveen Malshan Herath");
    // const [gender, setGender] = useState("Male");
    // const [phoneNo, setPhoneNo] = useState("0711331982");
    // const [nic, setNIC] = useState("1999678654");
    // const [hireDate, setHireDate] = useState("0/02/2023");
    // const [basicSalary, setBasicSalary] = useState("20/02/2023");
    // const [advance, setAdvance] = useState("20/02/2023");
    // const [bonus, setBonus] = useState("20/02/2023");
    // const [netSalary, setNetSalary] = useState("20/02/2023");

    var fullName = "hello";
    var gender = "hello";
    var phoneNo = "hello";
    var nic = "hello";
    var hireDate = "hello";
    var basicSalary = "hello";
    var advance = "hello";
    var bonus = "hello";
    var netSalary = "hello";
    var empID = "hello";




    const [paysheet, setPaySheet] = useState([]);

    var arrayLists = [];

    var keyArr = [
        "Employee ID", "Full Name", "Gender", "Phone No", "NIC", "Hire Date", "Basic Salary", "Advance", "Bonus", "Net Salary"
    ];
    var valueArr = [empID,fullName,gender,phoneNo,nic, hireDate,basicSalary,advance,bonus,netSalary];

    for (var item in keyArr) {

        arrayLists.push(
            {
                key: keyArr[item],
                value: valueArr[item]
                
            }
        )
    }



    console.log(arrayLists);

    const generatePDF = () => {
        const doc = new jsPDF();
        const tableColumn = ["Key", "value"];
        const tableRows = [];

        arrayLists.map((item) => {
           
            const detailsRow = {
                key: item.key,
                value: item.value,
            };
            console.log(detailsRow);
            tableRows.push(detailsRow);
        });

        doc.autoTable(tableColumn, tableRows, { startY: 20 });
        doc.save("Employee.pdf");
    };



    return (
        <div>
            <div className="my-10 flex flex-col items-center gap-3">
                <h1 style={{ textAlign: "center", fontSize: 50 }} a>Salary Sheet</h1>
                <br></br>
                <table className="w-90 h-full text-left text-sm text-blue-100 dark:text-blue-100">
                    <thead className="bg-blue-600 text-xs text-white dark:text-white">
                        <tr>
                            <th scope="col" className="bg-blue-500 px-6 py-3 text-lg">{keyArr[0]}</th>
                            <th scope="col" className="px-6 py-3 text-sm">{empID}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-blue-400 bg-blue-600">
                            <th scope="col" className="bg-blue-500 px-6 py-3 text-lg">{keyArr[1]}</th>
                            <th scope="col" className="px-6 py-3 text-sm">{fullName}</th>
                        </tr>
                        <tr className="border-blue-400 bg-blue-600">
                            <th scope="col" className="bg-blue-500 px-6 py-3 text-lg">{keyArr[2]}</th>
                            <th scope="col" className="px-6 py-3 text-sm">{gender}</th>
                        </tr>

                        <tr className="border-blue-400 bg-blue-600">
                            <th scope="col" className="bg-blue-500 px-6 py-3 text-lg">{keyArr[3]}</th>
                            <th scope="col" className="px-6 py-3 text-sm">{phoneNo}</th>
                        </tr>

                        <tr className="border-blue-400 bg-blue-600">
                            <th scope="col" className="bg-blue-500 px-6 py-3 text-lg">{keyArr[4]}</th>
                            <th scope="col" className="px-6 py-3 text-sm">{nic}</th>
                        </tr>

                        <tr className="border-blue-400 bg-blue-600">
                            <th scope="col" className="bg-blue-500 px-6 py-3 text-lg">{keyArr[5]}</th>
                            <th scope="col" className="px-6 py-3 text-sm">{hireDate}</th>
                        </tr>
                        <tr className="border-blue-400 bg-blue-600">
                            <th scope="col" className="bg-blue-500 px-6 py-3 text-lg">{keyArr[6]}</th>
                            <th scope="col" className="px-6 py-3 text-sm">{basicSalary}</th>
                        </tr>

                        <tr className="border-blue-400 bg-blue-600">
                            <th scope="col" className="bg-blue-500 px-6 py-3 text-lg">{keyArr[7]}</th>
                            <th scope="col" className="px-6 py-3 text-sm">{advance}</th>
                        </tr>

                        <tr className="border-blue-400 bg-blue-600">
                            <th scope="col" className="bg-blue-500 px-6 py-3 text-lg">{keyArr[8]}</th>
                            <th scope="col" className="px-6 py-3 text-sm">{bonus}</th>
                        </tr>

                        <tr className="border-blue-400 bg-blue-600">
                            <th scope="col" className="bg-blue-500 px-6 py-3 text-lg">{keyArr[9]}</th>
                            <th scope="col" className="px-6 py-3 text-sm">{netSalary}</th>
                        </tr>
                    </tbody>
                </table>
                <button onClick={() => generatePDF()} type='submit'
                    className="btn btn-outline flex flex-row gap-3 bg-gray-600 text-white hover:bg-slate-700 hover:text-white">
                    pay sheet

                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </span>
                </button>
            </div>

        </div>
    )
}