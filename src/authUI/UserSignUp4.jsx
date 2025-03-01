import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import NextandProgressBar from '../genComponents.jsx/nextandProgressBar';
import FormRowVertical from '../genComponents.jsx/FormRowVertical';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import NameIndicator from '../genComponents.jsx/NameIndicator';
import Header from '../genComponents.jsx/Header';

function UserSignUp4() {
  const [location, setLocation] = useState("");
  const [detecting, setDetecting] = useState(false);
  const navigate = useNavigate()
  const userName = localStorage.getItem("userName") || "User";

  const [progress, setProgress] = useState(() => {
    return Number(localStorage.getItem("progress")) || 2;
  });
  
    useEffect(() => {
      if (progress < 3) {
        setProgress(3);
        localStorage.setItem("progress", 3);
      }
    }, []);
  
    const handleNext = () => {
      if (progress < 4) { 
        const newProgress = Math.max(progress, 3);
        setProgress(newProgress);
        localStorage.setItem("progress", newProgress);
      }
      navigate('/signup5');
    };
  

  const handleLocationDetection = () => {
    setDetecting(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            if (data.display_name) {
              setLocation(data.display_name); 
            } else {
              setLocation("Address not found");
            }
          } catch (error) {
            setLocation("Error fetching address");
          }
          setDetecting(false);
        },
        () => {
          setLocation("Location detection failed");
          setDetecting(false);
        }
      );
    } else {
      setLocation("Geolocation is not supported");
      setDetecting(false);
    }
  };

  return (
    <motion.div 
      className='bg-[#1c1c1e] flex flex-col items-center min-h-screen text-white p-6'
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      exit={{ opacity: 0, scale: 1.05 }} 
      transition={{ duration: 0.5, ease: 'easeInOut' }}>

      <Header />
      
      <NameIndicator name={userName} />
      
      <div className='flex items-center max-w-7xl w-full justify-between'>
        <img src="planet.png" alt="save_the_planet" className='max-w-[500px] w-1/2' />

        <div className='w-1/2'>
          <h1 className='text-3xl font-bold'>Where are you recycling from?</h1>
          <p className='text-gray-400 text-sm mb-6'>That's how we find bins closest to you</p>

          <FormRowVertical label="Auto Detect">
            <div className="flex items-center border border-gray-600 rounded-lg w-full px-4 py-3 mb-5 bg-[#2c2c2e] text-gray-400 focus-within:ring-2 focus-within:ring-green-400">
              <FaMapMarkerAlt className="text-gray-400 mr-3" />
              <input
                type="text"
                id="auto-detect"
                onClick={handleLocationDetection}
                className="bg-transparent w-full focus:outline-none text-white placeholder-gray-400"
                placeholder="Detecting Location..."
                value={detecting ? "Detecting Location..." : location}
                readOnly
              />
            </div>
          </FormRowVertical>

          <FormRowVertical label="Manual">
            <div className="flex items-center border border-gray-600 rounded-lg w-full px-4 py-3 bg-[#2c2c2e] text-gray-400 focus-within:ring-2 focus-within:ring-green-400">
              <FaMapMarkerAlt className="text-gray-400 mr-3" />
              <input
                type="text"
                id="manual"
                className="bg-transparent w-full focus:outline-none text-white placeholder-gray-400"
                placeholder="Type in your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </FormRowVertical>
        </div>
      </div>
      <NextandProgressBar progress={progress} setProgress={setProgress} onNext={handleNext}/>
    </motion.div>
  );
}

export default UserSignUp4;
