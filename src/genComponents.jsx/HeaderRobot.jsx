import React, { useEffect, useState } from 'react';
import { BsLightningFill } from 'react-icons/bs';
import { FaRecycle } from 'react-icons/fa';
import { GiTwoCoins } from 'react-icons/gi';

function HeaderRobot() {
//   const [coins, setCoins] = useState(0);
//   const [streak, setStreak] = useState(0);

//   useEffect(() => {
//     setCoins(parseInt(localStorage.getItem("coins")) || 0);
//     setStreak(parseInt(localStorage.getItem("streak")) || 0);
//   }, []);

  return (
    <div className="w-full flex justify-between items-center text-sm text-gray-300 pt-4 px-6">
      <div>
        <p className="font-semibold">
          <FaRecycle className='text-green-500 inline pb-1 pr-1 text-lg' /> Recycler 
          <span className="text-white"> User</span>
        </p>
        <p className="text-green-500 text-xs">Eco Explorer</p>
      </div>

      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1">
          <BsLightningFill className="text-yellow-400" /> 8
        </span>
        <span className="flex items-center gap-1">
          <GiTwoCoins className="text-yellow-300" /> 114
        </span>
      </div>
    </div>
  );
}

export default HeaderRobot;
