import { useState, useEffect } from "react";
import clubsData from "../utils/clubs.json"; 
import NextandProgressBar from "../genComponents.jsx/nextandProgressBar";
import NameIndicator from "../genComponents.jsx/NameIndicator";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../genComponents.jsx/Header";

function JoinClub() {
  const [clubs, setClubs] = useState([]);
  const [joinedClubs, setJoinedClubs] = useState(new Set());
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "User";

  const [progress, setProgress] = useState(() => {
    return Number(localStorage.getItem("progress")) || 5;
  });

  useEffect(() => {
    if (progress < 5) {
      setProgress(5);
      localStorage.setItem("progress", 5);
    }
  }, []);

  useEffect(() => {
    setClubs(clubsData);
  }, []);

  const handleNext = () => {
    if (joinedClubs.size === 0) {
      alert("You must select a group or skip for now.");
      return;
    }

    if (progress < 6) { 
      const newProgress = Math.max(progress, 6);
      setProgress(newProgress);
      localStorage.setItem("progress", newProgress);
    }
    navigate('/infooverview');
  };

  const handleJoin = (clubId) => {
    setJoinedClubs((prevJoined) => {
      const newSet = new Set(prevJoined);
      if (newSet.has(clubId)) {
        newSet.delete(clubId); 
      } else {
        newSet.add(clubId); 
      }
      return newSet;
    });
  };

  return (
    <motion.div 
      className="bg-[#1c1c1e] min-h-screen text-white flex flex-col items-center py-8 px-4"
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      exit={{ opacity: 0, scale: 1.05 }} 
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <NameIndicator name={userName} />

      <h1 className="text-3xl font-bold mt-6">Join a Club</h1>
      <p className="text-gray-400 text-sm mb-6">
        Don’t miss out on Club events and Challenges
      </p>

      <div className="relative w-full max-w-2xl">
        <div className="h-[440px] overflow-y-scroll scrollbar-custom px-2 pb-8">
          {clubs.map((club) => (
            <div
              key={club.id}
              className="flex items-center justify-between bg-[#2c2c2e] rounded-lg p-4 my-2 shadow-md"
            >
              <div className="flex items-center space-x-4">
                <img src={club.logo} alt={club.name} className="w-12 h-12" />
                <div>
                  <h2 className="text-lg font-bold">{club.name}</h2>
                  <p className="text-gray-400 text-xs">{club.hall}</p>
                  <p className="text-sm text-gray-300">{club.description}</p>
                </div>
              </div>
              <button
                className={`border px-4 py-2 rounded-lg transition-all duration-300 ${
                  joinedClubs.has(club.id)
                    ? "bg-white text-green-600 border-green-400"
                    : "border-gray-400 text-gray-300 hover:bg-gray-600"
                }`}
                onClick={() => handleJoin(club.id)}
              >
                {joinedClubs.has(club.id) ? "Requested ✅" : "Join ☺️"}
              </button>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none"></div>
      </div>
      <NextandProgressBar 
        showSkip={true} 
        progress={progress} 
        setProgress={setProgress} 
        onNext={handleNext} 
      />
    </motion.div>
  );
}

export default JoinClub;
