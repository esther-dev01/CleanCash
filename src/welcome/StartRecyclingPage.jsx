import React from 'react'
import { HiPaperAirplane } from "react-icons/hi2";

function StartRecyclingPage() {
  return (
    <div className='bg-[#1c1c1e] text-[#eaeaea]'>
      <div>
        <h1>Welcome Xanther, Start Recycling</h1>
        <p>Put your Bottles and Cans into the Bins</p>
      </div>
      <button className='bg-[#4caf50] text-[#eaeaea]'>Start <HiPaperAirplane /></button>
    </div>
  )
}

export default StartRecyclingPage
