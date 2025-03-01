import React from 'react';

function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1c1c1e] text-[#eaeaea]">
      <header>
        <h1 className="text-5xl font-bold">Scan Your CleanCard</h1>
        <p className="mt-2 text-lg text-gray-400">Move your card towards the RFID scanner</p>
      </header>
      
      <section className="grid grid-cols-2 gap-2 mt-5">
        <button className="bg-[#2c2c2e] text-white rounded-lg px-4 py-2">What is CleanCash?</button>
        <button className="bg-[#2c2c2e] text-white rounded-lg px-4 py-2">I don’t have my CleanCard</button>
        <button className="bg-[#2c2c2e] text-white rounded-lg px-4 py-2">I don’t have my CleanCard</button>
        <button className="bg-[#2c2c2e] text-white rounded-lg px-4 py-2">I don’t have my CleanCard</button>
      </section>

      <img src="card.png" alt="CleanCard" className="mt-6 w-[700px] drop-shadow-lg" />
    </div>
  );
}

export default Welcome;
