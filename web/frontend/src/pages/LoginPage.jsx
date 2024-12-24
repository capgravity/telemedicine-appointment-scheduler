

import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Simulate login
    console.log('Logged in with:', email, password);
    setError('');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-700">
      <div className="bg-white rounded-xl p-12 w-full max-w-md shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Login to TeleMed</h2>
        
        {error && (
          <div className="mb-4 text-red-600 text-center">
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-semibold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <div>
              <a href="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</a>
            </div>
            <div>
              <a href="/signup" className="text-blue-500 hover:underline">Create an Account</a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white text-xl font-semibold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all duration-300"
            onClick={()=>{
              // Redirect to the home page after successful login
              window.location.href = '/user/dashboard';
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
