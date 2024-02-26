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
          <input 
            type={passwordVisible ? "text" : "password"} 
            id="password" 
            name="password" 
            required 
            className="border border-gray-300 rounded-md px-3 py-2 w-full" 
          />
          <button 
            type="button" 
            onClick={togglePasswordVisibility} 
            className="absolute inset-y-0 right-0 px-4 py-2 mt-2 mr-2 bg-gray-200 rounded-md focus:outline-none hover:bg-gray-300"
          >
            {passwordVisible ? "Hide" : "Show"}
          </button>
        </div>
        <div>
          <input type="submit" value="Register" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600" />
        </div>
      </form>
    </div>
  );
}

export default App;
