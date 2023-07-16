import React, { useEffect, useState } from "react";
import Transaction from "../../components/Finance/Transaction";
import axios from "axios";

export default function Transactions() {
  const title = "Transaction";

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get("http://localhost:5000/transaction/view")
        .then((res) => {
          setTransactions(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);  
 
  return (
    <div>
      <div className="flex flex-col items-center gap-10 p-10">
        {transactions.map((item, idm) => {
          return (
            <Transaction
              userName={item.name}
              description={item.description}
              profile={item.image}
              payment={item.cost}
              transactinId={item.transactionId}
              date={item.date}
              _id={item._id}
            />
          );
        })}
      </div>
    </div>
  );
}
