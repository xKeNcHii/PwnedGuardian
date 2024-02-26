import React, { useState } from 'react';

function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Registration</h1>
      <form action="https://pwned-guardian-server.vercel.app/register" method="POST" className="space-y-4">
        <div>
          <label htmlFor="username" className="block">Username:</label>
          <input type="text" id="username" name="username" required className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div className="relative">
          <label htmlFor="password" className="block">Password:</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full">
            <input 
              type={passwordVisible ? "text" : "password"} 
              id="password" 
              name="password" 
              required 
              className="w-full"
            />
            <button 
              type="button" 
              onClick={togglePasswordVisibility} 
              className="px-2 py-1 bg-gray-200 rounded-md text-xs focus:outline-none hover:bg-gray-300"
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <div>
          <input type="submit" value="Register" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 w-full" />
        </div>
      </form>
    </div>
  );
}

export default App;
