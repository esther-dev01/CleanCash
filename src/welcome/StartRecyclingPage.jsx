import React from 'react';
import { HiPaperAirplane } from "react-icons/hi2";
import Button from '../genComponents.jsx/Button';

function StartRecyclingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1c1c1e] text-[#eaeaea]">
      <div className='w-[500px]'>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          Welcome <span className="text-green-500">Xantha</span>, Start Recycling
        </h1>
        <p className="mt-2 text-gray-400">Put your Bottles and Cans into the Bins</p>
      </div>

      <Button type='primary'>
        Start <HiPaperAirplane className="text-xl" />
      </Button>
      </div>
    </div>
  );
}

export default StartRecyclingPage;
