import React,{useState} from 'react'
import {Card,Space,Statistic, Button,Calendar,theme} from 'antd'
import {ToolFilled,UserOutlined,CheckCircleFilled,PauseCircleFilled,ClockCircleOutlined,InfoCircleFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { Link, Routes, Route } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import NewSite from '../../components/Site/NewSite'
import OngoingSite from '../../components/Site/OngoingSite'
import HoldSite from '../../components/Site/HoldSite'
import EmployeeDetails from '../../components/Site/Employee'
//import Calendar from 'react-calendar'


function SiteDashboard() {

  const navigate = useNavigate()

   {/**line chart */}
  const data = [
    { name: 'Site 1', progress: 50 },
    { name: 'Site 2', progress: 75 },
    { name: 'Site 3', progress: 25 },
    { name: 'Site 4', progress: 90 },
    { name: 'Site 5', progress: 40 },
    { name: 'Site 6', progress: 80 },
    { name: 'Site 7', progress: 60 },
    { name: 'Site 8', progress: 82 },
  ];

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
 
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  }
 


  return (
    <div>    
      {/* 4 site Types */}
    <Space className='Types' style={{marginLeft:'5%',marginBottom:'2%'}}>

      {/* site Pending Button */}

        {/* New site Button */}
        <Link to={'newSite'}>
        <Button
       style={{
            borderRadius:10,
            padding:7,
            paddingBottom:120,
            backgroundColor:"#ffffff",
            border:"1px solid #ffffff",
            

          }}>
        <DashboardCard
          icon={
            <ClockCircleOutlined
              style={{
                color:"#B2A4FF",
                borderRadius:20,
                fontSize:30,
              }}
            />
          }
          title={"Pending Site"} 
          value={5}
          /></Button>
          </Link>
        {/* ongoing Button */}
      <Link to={'ongoingSite'}>
      <Button   
         style={{
            borderRadius:10,
            fontSize:24,
            padding:7,
            paddingBottom:120,
            backgroundColor:"#ffffff",
            border:"1px solid #ffffff" 

          }}>
        <DashboardCard 
          icon={
            <PauseCircleFilled
              style={{
                color:"#FFBF9B",
                borderRadius:20,
                fontSize:30,
                backgroundColor:"#ffffff",
                border:"1px solid #ffffff" 
              }}
            />
          }
          title={"Ongoing Sites"}
          value={10}
        /></Button>
        </Link>
      
          

         
        {/* Complete Sites Button */}
        <Link to={'completeSite'}>
        <Button
        style={{
            borderRadius:10,
            fontSize:24,
            padding:7,
            paddingBottom:120,
            backgroundColor:"#ffffff",
            border:"1px solid #ffffff" 

          }}>
        <DashboardCard 
          icon={
            <CheckCircleFilled
              style={{
                color:"#0E8388",
                borderRadius:20,
                fontSize:30,
              }}
            />
          }
          title={"Complete Sites"} 
          value={100}
          /></Button>
          </Link>
         {/*Hold Site button */}
         <Link to={'holdSite'}>
         <Button 
         style={{
            borderRadius:10,
            fontSize:24,
            padding:7,
            paddingBottom:120,
            backgroundColor:"#ffffff",
            border:"1px solid #ffffff" 

          }}>
        <DashboardCard 
          icon={
            <InfoCircleFilled 
              style={{
                color:"#ED2B2A",
                borderRadius:20,
                fontSize:30,
              }}
            />          
          }
          title={"Hold Sites"}
          value={3}
        /></Button>
        </Link>
         
        </Space>
        <Space className='sitetype' direction='horizontal' >

        
                   {/* Line Chart */}
              
              <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="progress" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>

              <Link to={'emloyeedetails'}>
              <Button  
                style={{
                    borderRadius:10,
                    fontSize:24,
                    padding:7,
                    paddingBottom:120,
                    backgroundColor:"#ffffff",
                    border:"1px solid #ffffff" 

                  }}>
              <DashboardCard 
                  icon={<UserOutlined
                    style={{
                      fontSize:50,
                      color:"#FEB139",
                    }}/>
                  }
                  title={"Employee List"}
                  value={500}
                /></Button>
                </Link>
                <Link to={'equipmentdetails'}>
            <Button 
                style={{
                    borderRadius:10,
                    fontSize:24,
                    padding:7,
                    paddingBottom:120,
                    backgroundColor:"#ffffff",
                    border:"1px solid #ffffff" 

                  }}>
                <DashboardCard 
                  icon={<ToolFilled
                    style={{
                      fontSize:50,
                      color:"#051367",

                    }}/>
                  }
                  title={"Equipment List"}
                  value={20}
                /></Button>
                </Link>

              

           
      </Space>

      <div className="w-[100%] flex flex-row justify-center h-[75%] overflow-y-scroll">
            <Routes>
                
                <Route path="newSite" element={<NewSite/>} />
                <Route path="ongoingSite" element={<OngoingSite/>} />
                <Route path="holdSite" element={<HoldSite/>} />
                <Route path="emloyeedetails" element={<EmployeeDetails/>} />
            </Routes>
        </div>

    </div>

  )
}

 {/* Dashboard card */}
function DashboardCard({title,value, icon}){
  return(
    <Card>
      <Space>
        {icon}
        <Statistic title={title} value={value}/>
      </Space>
    </Card>
  )
}


export default SiteDashboard