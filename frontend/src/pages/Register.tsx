import React from "react";
import Header from "../components/Header";
import Map from "../Assets/World_dot_map.png";

const SignupPage: React.FC = () => {
  return (
    <div style={{ background: "red" }} className="text-black min-h-screen">
      <Header />

      <div className="container flex mx-10 mt-8 p-0 md:mx-auto xl:ml-20">
        <div className="flex-col w-fit mr-8 sm:w-96 sm:min-w-72 sm:p-0 md:p-14">
          <h1 className="text-3xl font-Semibold mb-4">Sign Up</h1>
          <form className="w-auto lg:w-96">
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                User Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded text-black" // Set text color to black
                placeholder="Enter your user name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded text-black" // Set text color to black
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded text-black" // Set text color to black
                placeholder="Enter your password"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full p-2 border border-gray-300 rounded text-black" // Set text color to black
                placeholder="Enter your phone number"
              />
            </div>

            <button
              type="submit"
              className="bg-red-700 text-white mt-4 py-2 px-4 rounded hover:bg-darkred-800 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="scale-95 flex justify-center items-center lg:scale-100 lg:h-96 xl:ml-96 md:ml-32 md:mx-auto md:mt-14 hidden sm:block ">
          <img src={Map} alt="World Map" className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
