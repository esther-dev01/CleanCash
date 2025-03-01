import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Button = ({ children, disabled, type, onClick, value, onMouseEnter, onMouseLeave }) => {
  const base = "font-semibold mt-3 flex items-center justify-center gap-2 rounded-lg shadow-md cursor-pointer transition mt-6";

  const styles = {
    primary: base + ' text-3xl hover:bg-[#43a047] text-white px-9 w-full py-3 bg-[#4caf50]',
    small: base + ' text-3xl hover:bg-[#43a047] text-white px-9 py-3 bg-[#4caf50] w-[250px]',
    gradient: base + ' text-3xl relative text-2xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 border border-transparent bg-[#1c1c1e]',
    hover: base + ' hover:bg-gradient-to-r bg-[#4caf50] hover:from-green-400 hover:to-yellow-400 text-white w-[250px] py-3 relative overflow-hidden',
    bigHover: base + ' text-5xl hover:bg-gradient-to-r bg-[#4caf50] hover:from-green-400 hover:to-yellow-400 text-white px-9 w-full h-[150px] py-3 relative overflow-hidden',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles[type]}
      value={value}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button;
