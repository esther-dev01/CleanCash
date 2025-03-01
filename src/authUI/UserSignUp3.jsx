import React, { useState, useEffect } from 'react';
import NextandProgressBar from '../genComponents.jsx/nextandProgressBar';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NameIndicator from '../genComponents.jsx/NameIndicator';
import Header from '../genComponents.jsx/Header';

function UserSignUp3() {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "User";

  const [progress, setProgress] = useState(() => {
    return Number(localStorage.getItem("progress")) || 1;
  });

  useEffect(() => {
    if (progress < 2) {
      setProgress(2);
      localStorage.setItem("progress", 2);
    }
  }, []);

  const handleNext = () => {
    if (progress < 3) { 
      const newProgress = Math.max(progress, 3);
      setProgress(newProgress);
      localStorage.setItem("progress", newProgress);
    }
    navigate('/signup4');
  };

  const roles = [
    "Eco Enthusiast",
    "Recycler for Cash",
    "Student",
    "Business Owner",
    "Organization"
  ];

  return (
    <motion.div 
      className='bg-[#1c1c1e] flex flex-col items-center min-h-screen text-white p-6'
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      exit={{ opacity: 0, scale: 1.1 }} 
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <Header/>
      <NameIndicator name={userName} />
      <div className='flex items-center max-w-7xl w-full justify-between'>
        <motion.div 
          className='w-1/2'
          initial={{ rotateY: 180 }} 
          animate={{ rotateY: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-3xl font-bold'>What's your role?</h1>
          <p className='text-gray-400 text-sm mb-6'>This is what we'll call you</p>
          <div className="grid grid-cols-3 gap-4">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`p-2 rounded-md border transition cursor-pointer ${
                  selectedRole === role ? 'bg-green-600 text-white border-green-400' : 'bg-[#2c2c2e] text-gray-300 border-gray-600'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.img 
          src="planet.png" 
          alt="save_the_planet" 
          className='max-w-[500px] w-1/2'
          initial={{ rotateY: 180 }} 
          animate={{ rotateY: 0 }} 
          transition={{ duration: 0.6 }}
        />
      </div>

      <NextandProgressBar progress={progress} setProgress={setProgress} onNext={handleNext} />
    </motion.div>
  );
}

export default UserSignUp3;
