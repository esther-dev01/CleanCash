import React from 'react';
import { BsLightningFill } from "react-icons/bs";
import { GiTwoCoins } from "react-icons/gi";
import { MdOutlineEmojiEvents } from "react-icons/md";
import Button from '../genComponents.jsx/Button';
import Header from '../genComponents.jsx/Header';

function CalculatingBincoin() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#1c1c1e] text-[#eaeaea] px-4">
      
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-col items-center flex-1 justify-center w-full max-w-lg mx-auto">
        
        {/* Title */}
        <div className="mb-4 text-center">
          <h1 className="text-3xl font-bold">Calculating Your BinCoins</h1>
          <p className="text-gray-400 text-sm">Put your Bottles and Cans into the Bins</p>
        </div>

        {/* Reward List */}
        <div className="w-full flex flex-col gap-3">
          
          {/* Bottles */}
          <div className="flex justify-between items-center bg-[#2c2c2e] rounded-lg px-6 py-5 text-lg">
            <p>Bottles (5)</p>
            <span className="flex items-center gap-2 text-yellow-300">
              <GiTwoCoins /> 50
            </span>
          </div>

          {/* Cans */}
          <div className="flex justify-between items-center bg-[#2c2c2e] rounded-lg px-6 py-5 text-lg">
            <p>Cans (3)</p>
            <span className="flex items-center gap-2 text-yellow-300">
              <GiTwoCoins /> 24
            </span>
          </div>

          {/* Login Bonus */}
          <div className="flex justify-between items-center bg-[#2c2c2e] rounded-lg px-6 py-5 text-lg">
            <p>Login Bonus</p>
            <span className="flex items-center gap-2 text-yellow-300">
              <GiTwoCoins /> 50
            </span>
          </div>

          {/* New Badge */}
          <div className="flex justify-between items-center bg-[#2c2c2e] rounded-lg px-6 py-5 text-gray-400 text-lg opacity-75">
            <p>New Badge</p>
            <span className="flex items-center gap-2 text-green-400">
              <MdOutlineEmojiEvents /> Dawn Recycler
            </span>
          </div>

        </div>
        <Button type='gradient'>
            {/* Button Content */}
            <span className="relative w-full h-full flex items-center justify-between bg-[#1c1c1e] rounded-lg px-8 py-5">
                Claim <span className="flex items-center gap-2"><img src='coin.png' alt='coin' className="text-yellow-400 w-[30px]" /><span className='bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent'> 124</span></span>
            </span>
        </Button>



      </div>

    </div>
  );
}

export default CalculatingBincoin;
