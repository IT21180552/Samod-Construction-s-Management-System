import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function EmployeeProfile() {
    const navigate = useNavigate();
    const user = useLocation().state.user
    return (
        <div className="w-full overflow-hidden overflow-y-auto mb-10" style={{ height: 450 }}>
   <h1 style={{ textAlign: "center", fontSize: 50 }}>Profile Details</h1>
   <br></br>
            <div class="my-10 flex w-full flex-col items-center overflow-hidden overflow-y-auto scale-125">
                <div class="flex flex-row gap-x-6 rounded-xl bg-slate-500 p-6">
                    <div class="flex flex-col gap-9">
                        <div class="">
                            <img class="h-20 w-20 rounded-full" src={user.image} alt="profile" />
                        </div>

                        <div class="mt-4 flex flex-col items-end gap-6">

                            
                            <button class="btn btn-outline bg-blue-950 text-white" onClick={() => { navigate('/admin/HR/salary') }} >Salary</button>
                           

                            <button class="btn btn-outline bg-blue-950 text-white" onClick={() => { navigate('/admin/HR/UpdateEmployee' , {state : {user : user}}) }} >Update</button>
                        </div>
                    </div>
                    <div class="col-span-full col-start-3 flex flex-row items-center border-4 border-black rounded-xl bg-slate-700">
                        <div class="w-fit">
                            <table class="w-90 h-full text-left text-sm text-blue-100 dark:text-blue-100">
                                <thead class=" text-xs text-white dark:text-white">
                                    <tr>
                                        <th scope="col" class=" px-6 py-3 text-lg">EMP ID</th>
                                        <th scope="col" class="px-6 py-3 text-sm">Emp123456</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="col" class=" px-6 py-3 text-lg">Full Name</th>
                                        <th scope="col" class="px-6 py-3 text-sm">Rankiri Pathirage Naveen Malshan Herath</th>
                                    </tr>
                                    <tr class="">
                                        <th scope="col" class=" px-6 py-3 text-lg">Gender</th>
                                        <th scope="col" class="px-6 py-3 text-sm">Male</th>
                                    </tr>

                                    <tr class="">
                                        <th scope="col" class=" px-6 py-3 text-lg">Phone No</th>
                                        <th scope="col" class="px-6 py-3 text-sm">0711331982</th>
                                    </tr>

                                    <tr class="">
                                        <th scope="col" class=" px-6 py-3 text-lg">NIC</th>
                                        <th scope="col" class="px-6 py-3 text-sm">1999678654</th>
                                    </tr>

                                    <tr class="">
                                        <th scope="col" class=" px-6 py-3 text-lg">Hire Date</th>
                                        <th scope="col" class="px-6 py-3 text-sm">20/02/2023</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>



        </div>









    )
}
