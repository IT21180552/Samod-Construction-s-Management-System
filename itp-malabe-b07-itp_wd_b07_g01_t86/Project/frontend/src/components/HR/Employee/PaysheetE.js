import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from "jspdf";
import "jspdf-autotable"
import styles from '../../Template/Background.module.scss'
import Footer from '../../common/footer'
import Logo from '../../Template/Pictures/Logo.png'

export default function PaysheetE() {
    const navigate = useNavigate();

    const [empID, setEmpID] = useState("Emp123456");
    const [fullName, setFullName] = useState("Rankiri Pathirage Naveen Malshan Herath");
    const [gender, setGender] = useState("Male");
    const [phoneNo, setPhoneNo] = useState("0711331982");
    const [nic, setNIC] = useState("1999678654");
    const [hireDate, setHireDate] = useState("0/02/2023");
    const [basicSalary, setBasicSalary] = useState("20/02/2023");
    const [advance, setAdvance] = useState("20/02/2023");
    const [bonus, setBonus] = useState("20/02/2023");
    const [netSalary, setNetSalary] = useState("20/02/2023");




    const [paysheet, setPaySheet] = useState([]);

    var arrayLists = [];

    var keyArr = [
        "Employee ID", "Full Name", "Gender", "Phone No", "NIC", "Hire Date", "Basic Salary", "Advance", "Bonus", "Net Salary"
    ];
    var valueArr = [empID,
        fullName,
        gender,
        phoneNo,
        nic,
        hireDate,
        basicSalary,
        advance,
        bonus,
        netSalary,];

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
        const tableColumn = ["#", "Details"];
        const tableRows = [];

        arrayLists.map((item) => {

            const data = {
                key: item.key,
                value: item.value,
            };
            tableRows.push(data);
        });

        doc.autoTable(tableColumn, tableRows, { startY: 20 });
        doc.save("Customer.pdf");
    };

    return (

        <div className="w-full bg-[#FCBF49] h-[20vh] absolute top-0">


            <div className={styles.HeadingRow}>

                <div className={styles.LogoIcon}>
                    <img src={Logo} style={{ width: 100, height: 100 }} alt='Logo' />
                </div>
            </div>
            <div className="my-10 flex flex-col items-center gap-3">
                <h1 style={{ textAlign: "center", fontSize: 50 }}>Salary Sheet</h1>
                <br></br>
                <div class="col-span-full col-start-3 flex flex-row items-center border-4 border-black rounded-xl bg-slate-700">
                    <div class="w-fit">
                        <table class="w-90 h-full text-left text-sm text-blue-100 dark:text-blue-100">
                            <thead class=" text-xs text-white dark:text-white">
                                <tr>
                                    <th scope="col" class=" px-6 py-3 text-lg">{keyArr[0]}</th>
                                    <th scope="col" class="px-6 py-3 text-sm">{empID}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="col" class=" px-6 py-3 text-lg">{keyArr[1]}</th>
                                    <th scope="col" class="px-6 py-3 text-sm">{fullName}</th>
                                </tr>
                                <tr class="">
                                    <th scope="col" class=" px-6 py-3 text-lg">{keyArr[2]}</th>
                                    <th scope="col" class="px-6 py-3 text-sm">{gender}</th>
                                </tr>

                                <tr class="">
                                    <th scope="col" class=" px-6 py-3 text-lg">{keyArr[3]}</th>
                                    <th scope="col" class="px-6 py-3 text-sm">{phoneNo}</th>
                                </tr>

                                <tr class="">
                                    <th scope="col" class=" px-6 py-3 text-lg">{keyArr[4]}</th>
                                    <th scope="col" class="px-6 py-3 text-sm">{nic}</th>
                                </tr>

                                <tr class="">
                                    <th scope="col" class=" px-6 py-3 text-lg">{keyArr[5]}</th>
                                    <th scope="col" class="px-6 py-3 text-sm">{hireDate}</th>
                                </tr>
                                <tr class="">
                                    <th scope="col" class=" px-6 py-3 text-lg">{keyArr[6]}</th>
                                    <th scope="col" class="px-6 py-3 text-sm">{basicSalary}</th>
                                </tr>
                                <tr class="">
                                    <th scope="col" class=" px-6 py-3 text-lg">{keyArr[7]}</th>
                                    <th scope="col" class="px-6 py-3 text-sm">{advance}</th>
                                </tr>
                                <tr class="">
                                    <th scope="col" class=" px-6 py-3 text-lg">{keyArr[8]}</th>
                                    <th scope="col" class="px-6 py-3 text-sm">{bonus}</th>
                                </tr>
                                <tr class="">
                                    <th scope="col" class=" px-6 py-3 text-lg">{keyArr[9]}</th>
                                    <th scope="col" class="px-6 py-3 text-sm">{netSalary}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

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
            <footer className='w-full bottom-0 z-50 '><Footer /></footer>

        </div>
    )
}
