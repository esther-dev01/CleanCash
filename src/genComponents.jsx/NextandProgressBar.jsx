import { useState } from "react";
import Button from "./Button";
import { FaPaperPlane } from "react-icons/fa";

function NextandProgressBar({ showSkip = false, progress, setProgress, onNext }) {
  const [hovered, setHovered] = useState(false);

  const handleNext = () => {
    if (progress < 5) {
      setProgress(progress + 1);
    }
    if (onNext) {
      onNext();
    }
  };

  return (
    <div className='flex justify-between items-center w-1/2'>
      <div className="flex items-center gap-2">
        {[...Array(5)].map((_, index) => (
          <div 
            key={index} 
            className={`h-2 w-12 rounded-full transition-all duration-500 ${index < progress ? 'bg-green-500' : 'bg-gray-600'}`}
          ></div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {showSkip && (
          <button className="text-gray-400 text-xl hover:text-gray-300 transition">
            Skip for now
          </button>
        )}
        <Button 
          type='hover'
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={handleNext} 
          className="flex items-center gap-2"
        >
          <span className={`transition-transform text-2xl duration-500 ${hovered ? '-translate-y-2 opacity-0' : 'translate-y-0 opacity-100'}`}>Next</span>
          <FaPaperPlane 
            className={`text-4xl transition-transform duration-500 ${hovered ? 'translate-x-0 scale-125' : 'translate-x-2'}`} 
          />
        </Button>
      </div>
    </div>
  );
}

export default NextandProgressBar;
