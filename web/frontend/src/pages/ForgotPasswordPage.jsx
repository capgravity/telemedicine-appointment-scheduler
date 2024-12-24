import React, { useState } from 'react';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email');
      return;
    }

    // Simulate password reset request
    console.log('Password reset link sent to:', email);
    setError('');
    setSuccess('A password reset link has been sent to your email.');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-700">
      <div className="bg-white rounded-xl p-10 w-full max-w-md shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Forgot Password</h2>

        {error && (
          <div className="mb-4 text-red-600 text-center">
            <p>{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-4 text-green-600 text-center">
            <p>{success}</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
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

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white text-xl font-semibold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all duration-300"
          >
            Reset Password
          </button>
        </form>

        <div className="flex justify-between items-center mt-6">
          <div>
            <a href="/login" className="text-blue-500 hover:underline">Back to Login</a>
          </div>
          <div>
            <a href="/signup" className="text-blue-500 hover:underline">Create Account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;