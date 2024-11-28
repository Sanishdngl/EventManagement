import { useState } from "react";

const LoginSignup = () => {
  const [activeTab, setActiveTab] = useState("login");
  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <>
      {/* Top Bar */}
      <div className="w-full z-10 bg-blue-800 flex justify-center items-center text-4xl text-white font-extrabold py-4 shadow-md mt-20">
        {activeTab === "login" && "Login"}
        {activeTab === "signup" && "Sign Up"}
      </div>

      {/* Form Container */}
      <div className="min-h-screen flex justify-center items-start pt-0 bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6">
          {/* Tabs for switching between forms */}
          <div className="tabs mb-4 flex justify-center">
            <button
              onClick={() => handleTabClick("login")}
              className={`tab tab-bordered w-1/2 ${
                activeTab === "login" ? "tab-active" : ""
              }`}
            >
              <label className="block text-sm font-medium hover:text-blue-500 hover:font-bold">
                Login
              </label>
            </button>

            <button
              onClick={() => handleTabClick("signup")}
              className={`tab tab-bordered w-1/2 ${
                activeTab === "signup" ? "tab-active" : ""
              }`}
            >
              <label className="block text-sm font-medium hover:text-blue-500 hover:font-bold">
                Sign Up
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
              <div>
                <label htmlFor="role" className="block text-sm font-medium">
                  Role
                </label>
                <div className="relative">
                  <select
                    id="role"
                    className="input input-bordered w-full appearance-none"
                    required
                  >
                    <option value="user">User</option>
                    <option value="organizer">Organizer</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary w-full">Login</button>
            </form>
          )}

          {/* Sign Up Form */}
          {activeTab === "signup" && (
            <form className="space-y-4">
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium">
                  Full Name
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
                  required
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
                <label htmlFor="role" className="block text-sm font-medium">
                  Role
                </label>
                <div className="relative">
                  <select
                    id="role"
                    className="input input-bordered w-full appearance-none"
                    required
                  >
                    <option value="user">User</option>
                    <option value="organizer">Organizer</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
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
              <button className="btn btn-primary w-full">Sign Up</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
