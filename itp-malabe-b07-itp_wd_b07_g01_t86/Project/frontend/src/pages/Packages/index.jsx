import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddNewPackage from "./AddPackages";
import PackageDashboard from "./PackageDashboard";
import AddAddOns from "./AddAddOns";
import UpdatePackage from "./UpdatePackage";
import UpdateAddons from "./UpdateAddons";
import UpdateAddOns from "./UpdateAddons";

export default function PackagesPage(props) {

  return (
    <div className="w-[99%] flex flex-col items-center absolute h-full ">
      <div className="w-[100%] flex flex-row justify-end h-[10%]" >
        <Link to={'addPackages'}>
        <button class="btn gap-2 bg-[#9747FF] border-none hover:bg-[#7535DD] m-5 normal-case" >
        <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="white"></path> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" fill="white"></path> </svg>
            <p>Add Package</p>
        </button>
        </Link>
        <Link to={'addAddons'}>
        <button class="btn gap-2 bg-[#9747FF] border-none hover:bg-[#7535DD] m-5 normal-case" >
        <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="white"></path> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" fill="white"></path> </svg>
            <p>Add Add-ons</p>
        </button>
        </Link>
        <button class="btn gap-2 bg-[#9747FF] border-none hover:bg-[#7535DD] m-5 normal-case"  >
        <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="white"></path> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" fill="white"></path> </svg>
            Print log report
        </button>
        </div>
        <div className="w-[100%] flex flex-row justify-center  ">
            <Routes>
                
                <Route path="addPackages" element={<AddNewPackage/>} />
                <Route path="addAddons" element={<AddAddOns/>} />
                <Route path="updatepackage" element={<UpdatePackage/>} />
                <Route path="updateaddons" element={<UpdateAddOns/>}/>
                <Route path="*" element={<PackageDashboard/>} />
                

            </Routes>
        </div>
    </div>
  );
}