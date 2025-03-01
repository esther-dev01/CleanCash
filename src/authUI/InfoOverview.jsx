import { FaPaperPlane } from "react-icons/fa";
import Button from "../genComponents.jsx/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function InfoOverview() {
  const navigate = useNavigate()
  const userName = localStorage.getItem("userName") || "User";

    return (
      <motion.div 
        className="bg-[#121212] min-h-screen flex flex-col items-center justify-center px-4 text-white"
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        exit={{ opacity: 0, scale: 1.05 }} 
        transition={{ duration: 0.5, ease: 'easeInOut' }}>
        <div className="p-6 rounded-lg shadow-lg max-w-xl w-full">
          <h2 className="text-3xl font-bold text-white">
            Welcome Recycler <span className="text-[#4caf50]">{userName}</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            • Your Recycling Adventure Has Begun! 🌍♻️<br />
            • Your mission is to turn waste into wealth, fight against pollution, and become a legend in the recycling world!<br />
            • Are you ready to paint the planet green? 🚀🌱
          </p>
          <h3 className="mt-4 font-bold text-white text-xl">Your Inventory 🧺♻️</h3>
          <div className="mt-2 bg-[#2C2C2E] p-3 rounded-lg flex justify-between items-center">
            <span className="text-gray-400">Login Bonus</span>
            <div className="flex gap-1 items-center">
                <img src="coin.png" alt="coin" className="w-[20px] h-[20px]"/>
                <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent font-bold">50</span>
            </div>
          </div>
  
          <div className="mt-2 bg-[#2C2C2E] p-3 rounded-lg flex justify-between items-center">
            <span className="text-gray-400">New Badge</span>
            <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent font-bold">🎖 Greenhorn Recycler</span>
          </div>
  
          <div className="mt-2 bg-[#2C2C2E] p-3 rounded-lg flex justify-between items-center">
            <span className="text-gray-400">Daily Streak</span>
            <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent font-bold">⚡ 1</span>
          </div>
          
          <div className="mt-5">
            <Button type='primary' onClick={() => navigate('/appreciationpage')}>Start Recycling <span><FaPaperPlane className="text-2xl"/></span></Button>
          </div>
        </div>
      </motion.div>
    );
  }
  
  export default InfoOverview;
  