import React, { useEffect, useState } from "react";
import ViewEmpCard from "./ViewEmpCard";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function ViewEmployee() {
  const [employeeList, setEmployeList] = useState([])
  const navigate = useNavigate();
  useEffect(()=>{
    axios.get("http://localhost:5000/employee").then((res)=>{
      setEmployeList(res.data)
    })

 },[employeeList])
  return (
    <div>        
        <h1 style={{textAlign:"center", fontSize:50}}> Employee Details </h1>
      <div className="w-ful grid grid-cols-11 mb-4">
        
      
        <button onClick={()=>{navigate('/admin/HR/AddEmployee')}} className="btn btn-active flex flex-row gap-2 bg-blue-900 hover:bg-blue-950 col-start-9 col-end-11 w-fit h-fit">
          <span> Add Employee</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
          </span>
        </button>
      </div>
        

      <div className="h-80 w-full overflow-hidden overflow-y-auto">
      {
        employeeList.map((employee)=>{
          return(
            <ViewEmpCard
            name={employee.name}
            userImage={employee.image}
            email={employee.email}
            empId={employee.empId}
            id={employee._id}
            user={employee}
          />
          )
        }
        )
      }      
      </div>
    </div>
  );
}
