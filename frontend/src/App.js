function App() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Registration</h1>
      <form action="https://pwned-guardian-server.vercel.app/register" method="POST" className="space-y-4">
        <div>
          <label htmlFor="username" className="block">Username:</label>
          <input type="text" id="username" name="username" required className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div>
          <label htmlFor="password" className="block">Password:</label>
          <input type="password" id="password" name="password" required className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div>
          <input type="submit" value="Register" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600" />
        </div>
      </form>
    </div>
  );
}

export default App; 