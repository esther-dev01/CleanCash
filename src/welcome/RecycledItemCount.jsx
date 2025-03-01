import React from 'react';
import { FaRecycle } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import { GiTwoCoins } from "react-icons/gi";
import Button from '../genComponents.jsx/Button';
import Header from '../genComponents.jsx/Header';

function RecycledItemCount() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#1c1c1e] text-[#eaeaea] px-16">
      
      <Header />
      <div className="flex flex-col items-center flex-1 justify-center w-full max-w-lg mx-auto">
        
        <div className="mb-2">
          <h1 className="text-4xl font-bold">Recycle your Cans and Bottles</h1>
          <p className="text-gray-400 mt-1">Put your Bottles and Cans into the Bins</p>
        </div>

        <div className="bg-[#2c2c2e] rounded-2xl px-6 py-6 mt-6 grid grid-cols-2 gap-6 w-full min-h-[200px]">
          <div className="flex flex-col items-center">
            <p className="text-gray-400 text-lg">Bottle count</p>
            <h2 className="text-7xl font-bold flex items-center justify-center rounded-xl border border-gray-600 px-10 py-9 mt-1 min-h-[120px]">
              3
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-gray-400 text-lg">Can count</p>
            <h2 className="text-7xl font-bold flex items-center justify-center rounded-xl border border-gray-600 px-10 py-9 mt-1 min-h-[120px]">
              5
            </h2>
          </div>
        </div>

        <Button type='primary'>
          Recycle <FaRecycle />
        </Button>

      </div>
      
    </div>
  );
}

export default RecycledItemCount;
