import FormRowVertical from "../genComponents.jsx/FormRowVertical";
import Button from "../genComponents.jsx/Button";
import { FaArrowRight, FaEnvelope, FaLock } from "react-icons/fa"; // Icons
import { HiPaperAirplane } from "react-icons/hi2";

function AdminSignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#121212] px-4">
      <div className="w-full max-w-lg p-6 rounded-lg shadow-lg">
        <div className="mb-8">
          <h2 className="text-white text-2xl font-bold">Sign in as Admin</h2>
          <p className="text-gray-400 text-sm">Yay, you are a CleanCash Admin. View stats and control flows</p>
        </div>
        <form className="grid gap-y-5">
          <FormRowVertical label="Email">
            <div className="flex items-center border border-gray-600 rounded-lg w-full px-4 py-3 bg-[#2c2c2e] text-gray-400 focus-within:ring-2 focus-within:ring-green-400">
              <FaEnvelope className="text-gray-400 mr-3" />
              <input
                type="email"
                id="email"
                autoComplete="username"
                className="bg-transparent w-full focus:outline-none text-white placeholder-gray-400"
                placeholder="Input your Email"
              />
            </div>
          </FormRowVertical>
          <FormRowVertical label="Password">
            <div className="flex items-center border border-gray-600 rounded-lg w-full px-4 py-3 bg-[#2c2c2e] text-gray-400 focus-within:ring-2 focus-within:ring-green-400">
              <FaLock className="text-gray-400 mr-3" />
              <input
                type="password"
                id="password"
                autoComplete="current-password"
                className="bg-transparent w-full focus:outline-none text-white placeholder-gray-400"
                placeholder="Type in your Password"
              />
            </div>
          </FormRowVertical>
          <FormRowVertical>
            <Button type="primary" className="w-full bg-green-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition">
              Sign in <HiPaperAirplane className="text-4xl pt-2" />
            </Button>
          </FormRowVertical>

        </form>
      </div>
    </div>
  );
}

export default AdminSignIn;
