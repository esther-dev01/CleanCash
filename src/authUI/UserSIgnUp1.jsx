import React, { useState } from 'react';
import Button from '../genComponents.jsx/Button';
import { FaCircle, FaPaperPlane } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function UserSignUp1() {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate()

  return (
    <motion.div 
      className='bg-[#1c1c1e] flex flex-col items-center min-h-screen text-white'
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      exit={{ opacity: 0, scale: 1.05 }} 
      transition={{ duration: 0.5, ease: 'easeInOut' }}>
      <FaCircle className='text-white text-left' onClick={() => navigate('/robotscreen-welcome')}/>
      <div className='flex justify-between items-center max-w-5xl w-full'>
        <img src="planet.png" alt="save_the_planet" className='max-w-[500px] mr-14' />
        <div>
          <h2 className='text-3xl mb-4'>Join CleanCash and Start Earning Bincoins</h2>
          <div className="relative">
            <Button 
              type='bigHover'
              onClick={() => navigate('/signup2')}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="relative flex items-center justify-center overflow-hidden"
            >
              <span className={`transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
                Let's Go
              </span>
              <FaPaperPlane 
                className={`text-xl transition-transform duration-500 absolute ${
                  hovered ? 'translate-x-0 scale-150' : 'translate-x-10 opacity-0'
                }`}
              />
              <div className={`absolute inset-0 transition-opacity duration-500 ${
                hovered ? 'opacity-30' : 'opacity-0'
              }`}
              style={{
                backgroundImage: "radial-gradient(white 10%, transparent 20%)",
                backgroundSize: "10px 10px",
                backgroundPosition: "center",
              }} />
            </Button>
          </div>
        </div>
      </div>
      <p className="mt-6 text-gray-400">
        Already joined CleanCash? 
        <a href="/signin" className='text-green-500 hover:text-green-400 ml-1'>Sign in</a>
      </p>
    </motion.div>
  );
}

export default UserSignUp1;
