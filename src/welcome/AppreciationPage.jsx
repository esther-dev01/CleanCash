import Header from "../genComponents.jsx/Header";
import { motion } from "framer-motion";

function AppreciationPage() {
  return (
    <motion.div 
      className="relative min-h-screen bg-black text-white p-6 overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      exit={{ opacity: 0, scale: 1.05 }} 
      transition={{ duration: 0.5, ease: 'easeInOut' }}>
      {/* Fixed Header at the Top */}
      <div className="w-full fixed top-0 left-0 bg-black p-4 z-50">
        <Header />
      </div>
      
      {/* Animated Coins - Positioned Behind the Text */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, index) => (
          <img
            key={index}
            src='coin.png'
            alt="Recycling Coin"
            className="absolute w-24 h-24 md:w-32 md:h-32 shadow-lg opacity-70"
            style={{
              top: index % 2 === 0 ? `${20 + index * 30}%` : `${50 - index * 10}%`,
              left: index % 2 === 0 ? `${-8 + index * 30}%` : `${70 - index * 15}%`,
            }}
          />
        ))}
      </div>
      
      {/* Appreciation Message */}
      <div className="flex flex-col items-center justify-center h-screen text-center relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold">
          Thanks For Recycling <span className="text-green-400">Xantha</span>,
        </h1>
        <h2 className="text-xl md:text-3xl mt-2">
          The Planet Loves You.
        </h2>
      </div>
    </motion.div>
  );
}

export default AppreciationPage;
