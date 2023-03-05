import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";


import { shortenAddress } from "../utils/shortenAddress";

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
 return (
    
      <div>
      <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10 ">
            <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72w-full my-5 eth-card .white-glassmorphism ">
                <div className="flex justify-between flex-col w-full h-full">
                    <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
                        <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
                    </a>
                    <a href={`https://goerli.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
                        <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
                    </a>
                    <p className="text-white text-base">Amount: {amount} ETH</p>
                    {message && (
                        <>
                        <br />
                        <p className="text-white text-base">Message: {message}</p>
                        </>
                    )}
                </div>
            </div>
            </div>
        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold">{timestamp}</p>
        </div>
    
   
     </div>
  );
};

const Transactions = () => {
  const {  ConnectedAccount,transactions} = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {ConnectedAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}

        <div className="flex flex-wrap justify-center items-center mt-10">
          {transactions.reverse().map((transaction, i) => (
            <TransactionCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
    
            

  );
};

export default Transactions;