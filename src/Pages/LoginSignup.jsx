import { useState } from "react";

const LoginSignup = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="w-full z-10 bg-blue-800 flex justify-center items-center text-4xl text-white font-extrabold py-4 shadow-md mt-20">
        {activeTab === "login" && "Login"}
        {activeTab === "signup" && "Sign Up"}
        {activeTab === "guest" && "Guest Check-In"}
      </div>

      {/* Form Container */}
      <div className="min-h-screen flex justify-center items-start pt-0 bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6">
          {/* Tabs for switching between forms */}
          <div className="tabs mb-4 flex justify-center">
            <button
              onClick={() => handleTabClick("login")}
              className={`tab tab-bordered w-1/3 ${
                activeTab === "login" ? "tab-active" : ""
              }`}
            >
              <label className="block text-sm font-medium hover:text-blue-500 hover:font-bold">
                Login
              </label>
            </button>

            <button
              onClick={() => handleTabClick("signup")}
              className={`tab tab-bordered w-1/3 ${
                activeTab === "signup" ? "tab-active" : ""
              }`}
            >
              <label className="block text-sm font-medium hover:text-blue-500 hover:font-bold">
                Sign Up
              </label>
            </button>

            <button
              onClick={() => handleTabClick("guest")}
              className={`tab tab-bordered w-1/3 ${
                activeTab === "guest" ? "tab-active" : ""
              }`}
            >
              <label className="block text-sm font-medium hover:text-blue-500 hover:font-bold">
                Guest
              </label>
            </button>
          </div>

          {/* Login Form */}
          {activeTab === "login" && (
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button className="btn btn-primary w-full">Login</button>
            </form>
          )}

          {/* Sign Up Form */}
          {activeTab === "signup" && (
            <form className="space-y-4">
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium">
                  Full name
                </label>
                <input
                  id="full-name"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="signup-email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="signup-email"
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-medium">
                  Contact Number
                </label>
                <input
                  id="contact"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter your contact number"
                  required
                />
              </div>
              <div>
                <label htmlFor="password-signup" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  id="password-signup"
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Create a password"
                  required
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <button className="btn btn-primary w-full">Sign Up</button>
            </form>
          )}

          {/* Guest Check-In Form */}
          {activeTab === "guest" && (
            <form className="space-y-4">
              <div>
                <label htmlFor="guest-name" className="block text-sm font-medium">
                  Full Name
                </label>
                <input
                  id="guest-name"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="guest-contact" className="block text-sm font-medium">
                  Contact Number
                </label>
                <input
                  id="guest-contact"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter your contact number"
                  required
                />
              </div>
              <div>
                <label htmlFor="guest-address" className="block text-sm font-medium">
                  Address
                </label>
                <input
                  id="guest-address"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter your address"
                  required
                />
              </div>
              <div>
                <label htmlFor="guest-email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="guest-email"
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button className="btn btn-primary w-full">Check-In as Guest</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
