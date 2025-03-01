import React from 'react'
import { BsLightningFill } from 'react-icons/bs'
import { FaRecycle } from 'react-icons/fa'
import { GiTwoCoins } from 'react-icons/gi'

function Header() {
  const userName = localStorage.getItem("userName") || "User";

  return (
    <div className="w-full flex justify-between items-center text-sm text-gray-300 pt-4 px-6">
        {/* User Info */}
            <div className="">
                <p className="font-semibold"> <span><FaRecycle className='text-green-500 inline pb-1 pr-1 text-lg'/></span>Recycler <span className="text-white">{userName}</span></p>
                <p className="text-green-500 text-xs">Eco Explorer</p>
            </div>

        {/* Points */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <BsLightningFill className="text-yellow-400" /> 0
          </span>
          <span className="flex items-center gap-1">
            <GiTwoCoins className="text-yellow-300" /> 0
          </span>
        </div>
      </div>
  )
}

export default Header
