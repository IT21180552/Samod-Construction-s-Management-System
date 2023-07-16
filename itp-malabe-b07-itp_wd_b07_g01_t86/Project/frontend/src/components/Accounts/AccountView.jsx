import React, { useEffect, useState } from "react";
import AccountCard from "./AccountCard";
import axios from "axios";
export function AccountView(props){
    const[accounts,setAccounts] = useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:5000/admin/all").then((res)=>{
            setAccounts(res.data)
        }
        )
    },[accounts])

    return(
    <div className="flex flex-col items-center w-[100%] p-[5px] ">

        {
            accounts.map((account,index)=>{
                return <AccountCard key={index} account={account} accountSetter={setAccounts}/>
            }
            )

        }        
    </div>)
}