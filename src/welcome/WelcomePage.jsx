import React from 'react';

function Welcome() {
  return (
    <div className='flex flex-col items-center justify-center pt-10 pb-5 bg-[#1c1c1e] text-[#eaeaea]'>
      <header>
        <h1 className='text-5xl'>Scan Your CleanCard</h1>
        <p className='mt-3'>Move your card towards the RFID scanner</p>
      </header>
      
      <section className='flex flex-wrap p-1 gap-1.5'>
        <div className='bg-[#2c2c2e] rounded-xl px-2 py-1 w-1/2'>What is CleanCash?</div>
        <div className='bg-[#2c2c2e] rounded-xl px-2 py-1 w-1/2'>I don't have my CleanCard</div>
        <div className='bg-[#2c2c2e] rounded-xl px-2 py-1 w-1/2'>What is CleanCash?</div>
        <div className='bg-[#2c2c2e] rounded-xl px-2 py-1 w-1/2'>I don't have my CleanCard</div>
      </section>

      <img src="card.png" alt="card"/>
    </div>
  );
}

export default Welcome;
