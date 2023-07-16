import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AddSite from './AddSite'
import UpdateOngoing from './UpdateOngoing'

 function OngoingSite() {


  const navigate = useNavigate()
  const [sites,setSites]=useState([])
  useEffect(()=>{
      axios.get("http://localhost:5000/site").then((response)=>{
      console.log(response.data)
      setSites(response.data)
    })
  },[sites])
  // if(sites.length == 0){
  //   axios.get("http://localhost:5000/sites").then((response)=>{
  //     console.log(response.data)
  //     if(response.data.length != 0){
  //       setSites(response.data)
  //     }
  //   })
  // }
  //function handleDelete(id) {
    // send DELETE request to API with the item ID
    // update the inventory state by removing the deleted item
  //}

  function handleUpdate(id) {
    // navigate to the update form for the selected item
    navigate(`/updateongoinsite`);
  }

   return (
    <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head*/}
    <thead>
          <tr>
            <th className="px-4 py-2">Site ID</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Start Date</th>
            <th className="px-4 py-2">End Date</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>

     </thead>

      
      {/* Only for get idea */}
      <tbody>
            {
              sites.map((item,index)=>{
                return(
                  <tr>
                  <td className="border px-4 py-2">{item.siteId}</td>
                  <td className="border px-4 py-2">{item.location}</td>
                  <td className="border px-4 py-2">{item.start}</td>
                  <td className="border px-4 py-2">{item.end}</td>
                  <td className="border px-4 py-2">{item.status}</td>
                  <td className="border px-4 py-2">
  
                  <button
                      onClick={(e)=>{
                        axios.delete(`http://localhost:5000/site/${item._id}`).then((response)=>{
                          console.log(response)
                        })
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg mr-2"
                  >Delete</button>
                  
                  
                  <button
  
                  onClick={()=> handleUpdate()}
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-2"
                  >Update</button> 
                  </td>
              </tr>
                )
              })
            }
            <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">Gampaha</td>
                <td className="border px-4 py-2">10/02/2023</td>
                <td className="border px-4 py-2">12/05/2028</td>
                <td className="border px-4 py-2">ongoing</td>
                <td className="border px-4 py-2">

                <button
                   
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg mr-2"
                >Delete</button>
                
                
                <button

                onClick={()=> handleUpdate()}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-2"
                >Update</button> 
                </td>
            </tr>

            <tr>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">Malabe</td>
                <td className="border px-4 py-2">03/05/2022</td>
                <td className="border px-4 py-2">30/08/2023</td>
                <td className="border px-4 py-2">Ongoing</td>
                <td className="border px-4 py-2">

                <button
                    
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg mr-2"
                >Delete</button>

                <button
                    
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-2"
                >Update</button>
                </td>
            </tr>

            <tr>
                <td className="border px-4 py-2">3</td>
                <td className="border px-4 py-2">Malabe</td>
                <td className="border px-4 py-2">03/05/2022</td>
                <td className="border px-4 py-2">30/08/2023</td>
                <td className="border px-4 py-2">Ongoing</td>
                <td className="border px-4 py-2">

                <button
                    
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg mr-2"
                >Delete</button>

                <button
                    
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-2"
                >Update</button>
                </td>
            </tr>

            <tr>
                <td className="border px-4 py-2">4</td>
                <td className="border px-4 py-2">Malabe</td>
                <td className="border px-4 py-2">03/05/2022</td>
                <td className="border px-4 py-2">30/08/2023</td>
                <td className="border px-4 py-2">Ongoing</td>
                <td className="border px-4 py-2">

                <button
                    
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg mr-2"
                >Delete</button>

                <button
                    
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-2"
                >Update</button>
                </td>
            </tr>
            <tr>
                <td className="border px-4 py-2">5</td>
                <td className="border px-4 py-2">Malabe</td>
                <td className="border px-4 py-2">03/05/2022</td>
                <td className="border px-4 py-2">30/08/2023</td>
                <td className="border px-4 py-2">Ongoing</td>
                <td className="border px-4 py-2">

                <button
                    
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg mr-2"
                >Delete</button>

                <button
                    
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-2"
                >Update</button>
                </td>
            </tr>
        </tbody>

      {/* body */}
      <tbody>

                {sites.map((site) => (
                  <tr key={site._id}>
                    <td className="border px-4 py-2">{site._id.slice(-4)}</td>
                    <td className="border px-4 py-2">{site.location}</td>
                    <td className="border px-4 py-2">{new Date(site.startDate).toLocaleString('en-GB', {day:'numeric', month: 'long', year:'numeric'})}</td>
                    <td className="border px-4 py-2">{new Date(site.endDate).toLocaleString('en-GB', {day:'numeric', month: 'long', year:'numeric'})}</td>
                    <td className="border px-4 py-2">{site.status}</td>
                    <td className="border px-4 py-2">
                      <button
                        //onClick={() => handleDelete(site._id)}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg mr-2"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleUpdate(site._id)}

                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
                      >
                        Update
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>
     </table>
     <div className="w-[100%] flex flex-row justify-center h-[75%] overflow-y-scroll">
             <Routes>
                
                 <Route path="updateongoinsite" element={<UpdateOngoing/>} />
                
             </Routes>
        </div>
 </div>
   )
  }
 export default OngoingSite

