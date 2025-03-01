import React, { useEffect, useState } from 'react';
import { GiTwoCoins } from "react-icons/gi";
import { MdOutlineEmojiEvents } from "react-icons/md";
import Button from '../genComponents.jsx/Button';
import Header from '../genComponents.jsx/Header';
import HeaderRobot from '../genComponents.jsx/HeaderRobot';
import { useNavigate } from 'react-router-dom';
import HeaderRobotNew from '../genComponents.jsx/HeaderRobotNew';

function CalculatingBincoin() {
  const navigate = useNavigate()
  const dailyStreak = parseInt(localStorage.getItem("streak")) || 1;
  const bottleCount = 15;
  const canCount = 0;
  const loginBonus = 3;

  const bottleCoins = bottleCount * 1;
  const canCoins = canCount * 1;
  const totalCoins = bottleCoins + canCoins + loginBonus; // Excluding daily streak

  useEffect(() => {
    // Get current coins
    const currentCoins = parseInt(localStorage.getItem("coins")) || 0;
    // Add new earnings
    localStorage.setItem("coins", currentCoins + totalCoins);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#1c1c1e] text-[#eaeaea] px-4">
      <HeaderRobotNew />

      <div className="flex flex-col items-center flex-1 justify-center w-full max-w-lg mx-auto">
        
        <div className="mb-4 text-center">
          <h1 className="text-3xl font-bold">Calculating Your BinCoins</h1>
          <p className="text-gray-400 text-sm">Put your Bottles and Cans into the Bins</p>
        </div>

        <div className="w-full flex flex-col gap-3">
          <div className="flex justify-between items-center bg-[#2c2c2e] rounded-lg px-6 py-5 text-lg">
            <p>Bottles ({bottleCount})</p>
            <span className="flex items-center gap-2 text-yellow-400">
              <GiTwoCoins /> {bottleCoins}
            </span>
          </div>

          <div className="flex justify-between items-center bg-[#2c2c2e] rounded-lg px-6 py-5 text-lg">
            <p>Cans ({canCount})</p>
            <span className="flex items-center gap-2 text-yellow-400">
              <GiTwoCoins /> {canCoins}
            </span>
          </div>

          <div className="flex justify-between items-center bg-[#2c2c2e] rounded-lg px-6 py-5 text-lg">
            <p>Login Bonus</p>
            <span className="flex items-center gap-2 text-yellow-400">
              <GiTwoCoins /> {loginBonus}
            </span>
          </div>

          <div className="flex justify-between items-center bg-[#2c2c2e] rounded-lg px-6 py-5 text-lg">
  <p>Daily Streak</p>
  <span className="flex items-center gap-2 text-yellow-400">
    <GiTwoCoins /> {dailyStreak}
  </span>
</div>

          <div className="flex justify-between items-center bg-[#2c2c2e] rounded-lg px-6 py-5 text-gray-400 text-lg opacity-75">
            <p>New Badge</p>
            <span className="flex items-center gap-2 text-yellow-400">
              <MdOutlineEmojiEvents /> Dawn Recycler
            </span>
          </div>
        </div>

        <Button type='gradient' onClick={() => navigate('/robotscreen-appreciationpage')}>
          <span className="flex items-center justify-between w-full bg-[#1c1c1e] rounded-lg px-8 py-5">
            Claim 
            <span className="flex items-center gap-2">
              <img src='coin.png' alt='coin' className="w-[30px]" />
              <span className="text-yellow-400 text-xl font-bold">
                {totalCoins}
              </span>
            </span>
          </span>
        </Button>
      </div>
    </div>
  );
}

export default CalculatingBincoin;
