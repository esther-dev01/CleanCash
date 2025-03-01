import { useForm } from "react-hook-form";
import FormRowVertical from "../genComponents.jsx/FormRowVertical";
import NextandProgressBar from "../genComponents.jsx/nextandProgressBar";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NameIndicator from "../genComponents.jsx/NameIndicator";
import Header from "../genComponents.jsx/Header";

function UserSignUp5() {
  const { register, formState, getValues } = useForm();
  const { errors } = formState;
  const navigate = useNavigate()
  const userName = localStorage.getItem("userName") || "User";

  const [progress, setProgress] = useState(() => {
    return Number(localStorage.getItem("progress")) || 3;
  });
  
    useEffect(() => {
      if (progress < 4) {
        setProgress(4);
        localStorage.setItem("progress", 4);
      }
    }, []);
  
    const handleNext = () => {
      if (progress < 5) { 
        const newProgress = Math.max(progress, 5);
        setProgress(newProgress);
        localStorage.setItem("progress", newProgress);
      }
      navigate('/joinclub');
    };
  

  return (
    <motion.div 
      className="bg-[#1c1c1e] flex flex-col items-center min-h-screen text-white p-6"
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      exit={{ opacity: 0, scale: 1.05 }} 
      transition={{ duration: 0.5, ease: 'easeInOut' }}>

      <Header />
      
      <NameIndicator name={userName} />
      <div className="flex max-w-7xl w-full justify-between items-center">

        <form className="w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">Let's get your Contact info</h1>
          <p className="text-gray-400 text-sm mb-6">
            Set your contact info and password for easier login
          </p>

          <FormRowVertical label="Email" error={errors?.email?.message}>
            <div className="flex items-center border border-gray-600 rounded-lg px-4 py-3 bg-[#2c2c2e] text-gray-400 focus-within:ring-2 focus-within:ring-green-400">
              <FaEnvelope className="text-gray-400 mr-3" />
              <input
                type="email"
                id="email"
                autoComplete="username"
                className="bg-transparent w-full focus:outline-none text-white placeholder-gray-400"
                placeholder="Input your Email"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please provide a valid email address",
                  },
                })}
              />
            </div>
          </FormRowVertical>
          <FormRowVertical label="Password" error={errors?.password?.message}>
            <div className="flex items-center border border-gray-600 rounded-lg px-4 py-3 bg-[#2c2c2e] text-gray-400 focus-within:ring-2 focus-within:ring-green-400">
              <FaLock className="text-gray-400 mr-3" />
              <input
                type="password"
                id="password"
                autoComplete="current-password"
                className="bg-transparent w-full focus:outline-none text-white placeholder-gray-400"
                placeholder="Type in your Password"
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Password needs a minimum of 8 characters",
                  },
                })}
              />
            </div>
          </FormRowVertical>
          <FormRowVertical label="Confirm Password" error={errors?.passwordConfirm?.message}>
            <div className="flex items-center border border-gray-600 rounded-lg px-4 py-3 bg-[#2c2c2e] text-gray-400 focus-within:ring-2 focus-within:ring-green-400">
              <FaLock className="text-gray-400 mr-3" />
              <input
                type="password"
                id="passwordConfirm"
                className="bg-transparent w-full focus:outline-none text-white placeholder-gray-400"
                placeholder="Confirm your Password"
                {...register("passwordConfirm", {
                  required: "This field is required",
                  validate: (value) =>
                    value === getValues().password || "Passwords need to match",
                })}
              />
            </div>
          </FormRowVertical>
        </form>
        <img
          src="planet.png"
          alt="save_the_planet"
          className="max-w-[500px] w-1/2"
        />
      </div>
      <NextandProgressBar progress={progress} setProgress={setProgress} onNext={handleNext}/>
    </motion.div>
  );
}

export default UserSignUp5;
