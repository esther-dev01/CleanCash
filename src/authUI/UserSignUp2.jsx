import React, { useState } from 'react';
import FormRowVertical from '../genComponents.jsx/FormRowVertical';
import NextandProgressBar from '../genComponents.jsx/nextandProgressBar';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function UserSignUp2() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(1);
  const [name, setName] = useState(localStorage.getItem("userName") || "");

  const handleInputChange = (e) => {
    setName(e.target.value);
    localStorage.setItem("userName", e.target.value);
  };

  return (
    <motion.div 
      className='bg-[#1c1c1e] flex flex-col items-center min-h-screen text-white pb-3'
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      exit={{ opacity: 0, scale: 1.05 }} 
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className='flex items-center max-w-7xl w-full'>
        <img src="planet.png" alt="save_the_planet" className='max-w-[500px] mr-24' />
        <div className='min-w-[400px] ml-8'>
          <h1 className='text-3xl font-bold'>What’s your name?</h1>
          <p className='text-gray-400 text-sm'>This is what we’ll call you</p>

          <FormRowVertical label="">
            <div className="flex items-center border border-gray-600 rounded-lg w-full px-4 py-3 mt-7 bg-[#2c2c2e] text-gray-400 focus-within:ring-1 focus-within:ring-green-400">
              <input
                type="text"
                id="name"
                autoComplete="name"
                className="bg-transparent w-full focus:outline-none text-white placeholder-gray-400"
                placeholder="Enter your preferred Username or Nickname"
                value={name}
                onChange={handleInputChange}
              />
            </div>
          </FormRowVertical>
        </div>
      </div>

      <NextandProgressBar 
        progress={progress} 
        setProgress={setProgress} 
        onNext={() => navigate('/signup3')}
      />
    </motion.div>
  );
}

export default UserSignUp2;
