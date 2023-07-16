import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import styles from '../../Template/Background.module.scss'
import Footer from '../../common/footer'
import Logo from '../../Template/Pictures/Logo.png'

export default function EmployeeProfileE() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="w-full bg-[#FCBF49] h-[20vh] absolute top-0">


                <div className={styles.HeadingRow}>

                    <div className={styles.LogoIcon}>
                        <img src={Logo} style={{ width: 100, height: 100 }} alt='Logo' />
                    </div>
                </div>

            </div>
            <div className="w-full h-screen p-10 mt-20 ">
                <h1 style={{ textAlign: "center", fontSize: 50, marginTop:"10px", padding:"3px"}}>Profile Details</h1>
                <br></br>

                <div class="my-10 flex w-full flex-col items-center overflow-hidden overflow-y-auto scale-125">
                    <div class="flex flex-row gap-x-6 rounded-xl bg-slate-500 p-6">
                        <div class="flex flex-col gap-9">
                            <div class="">
                                <img class="h-20 w-20 rounded-full" src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile" />
                            </div>

                            <div class="mt-4 flex flex-col items-end gap-6 ">


                                <button class="mr-4 btn btn-outline bg-blue-950 text-white" onClick={() => { navigate('paysheet') }} >Salary</button>
                                <button class="btn btn-outline bg-blue-950 text-white" onClick={() => { navigate('changepassword') }} >Change <br></br>
                                    Password</button>
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
                <br></br>

                <div className="bg-blue- h-fit w-fit p-10 rounded-xl mb-32 float-right mr-80 mt-30">

                    <h5 className="mb-1 text-xl font-medium text-white-900 text-white">Request Advance</h5>
                    <input type="number" id="first_name" className="block rounded-lg border border-gray-300 w-30 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Advance amount" required />
                    <br></br>
                    <button className="btn btn-sm bg-blue-700 hover:dark:bg-blue-800">Request</button>


                </div>



            </div>
            <footer className='w-full bottom-0 z-50 '><Footer /></footer>


        </div>






    )
}
