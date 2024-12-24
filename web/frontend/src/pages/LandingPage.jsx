import React, { useState } from 'react';

const LandingPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
    setIsDropdownOpen(false); 
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <img src="https://via.placeholder.com/50" alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="text-2xl font-semibold text-blue-600">TeleMed</span>
          </div>

          <div className="space-x-8 text-lg text-gray-700">
            <a href="#features" className="hover:text-blue-500 transition-colors">Features</a>
            <a href="#about" className="hover:text-blue-500 transition-colors">About Us</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>

          {/* Right-side buttons */}
          <div className="space-x-4 flex items-center">
            {/* Emergency Call Button */}
            <a
              href="#"
              className="bg-red-600 text-white text-xl font-semibold py-3 px-6 rounded-full shadow-xl hover:bg-red-500 transition-all duration-300"
            >
              Emergency Call
            </a>

            {/* Avatar / Login/Signup Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 bg-blue-600 text-white text-xl font-semibold py-2 px-4 rounded-full shadow-xl hover:bg-blue-500 transition-all duration-300"
              >
                {/* Avatar or Login icon */}
                {isLoggedIn ? (
                  <img src="https://via.placeholder.com/40" alt="User Avatar" className="h-8 w-8 rounded-full" />
                ) : (
                  <span className="text-lg">👤</span> // Default user icon
                )}
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-20">
                  {isLoggedIn ? (
                    <>
                      {/* User Profile Options */}
                      <a
                        href="#profile"
                        className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100"
                      >
                        View Profile
                      </a>
                      <button
                        onClick={toggleLoginStatus}
                        className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      {/* Login / Signup Options */}
                      <a
                        href="/login"
                        className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100"
                      >
                        Login
                      </a>
                      <a
                        href="/signup"
                        className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100"
                      >
                        Sign Up
                      </a>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-indigo-600 to-blue-700 text-white text-center py-48">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl mx-auto mb-6">
            <span className="typing-effect">Your Emergency, Our Priority</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 px-6 max-w-3xl mx-auto">
            Connecting you with certified medical professionals at your fingertips. Consult anytime, anywhere.
          </p>
          <a
            href="#contact"
            className="inline-block bg-yellow-500 text-white text-xl font-semibold py-3 px-8 rounded-full shadow-xl hover:bg-yellow-400 transition-all duration-300"
          >
            Start Your Consultation
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-r from-blue-100 to-indigo-50 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-16">Why Choose TeleMed?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-blue-600 text-4xl mb-6">
              <i className="fas fa-video"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Seamless Video Consultations</h3>
            <p>Consult with doctors face-to-face from the comfort of your home using our high-quality video service.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-green-600 text-4xl mb-6">
              <i className="fas fa-prescription-bottle-alt"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Prescriptions Delivered to You</h3>
            <p>Receive prescriptions directly after consultations, and have them delivered to your doorstep quickly.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-red-600 text-4xl mb-6">
              <i className="fas fa-headset"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4">24/7 Customer Support</h3>
            <p>Need help or have questions? Our support team is available round the clock to assist you.</p>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section id="about" className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">About TeleMed</h2>
          <p className="text-xl leading-relaxed text-gray-600 mb-8">
            TeleMed is dedicated to making healthcare accessible for everyone. We offer virtual healthcare services that help you consult with doctors, receive prescriptions, and get expert advice from the comfort of your home. 
            Our platform ensures you stay connected to top medical professionals, anytime you need.
          </p>
          <a
            href="#contact"
            className="bg-yellow-500 text-white text-xl font-semibold py-3 px-8 rounded-full shadow-xl hover:bg-yellow-400 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-r from-blue-600 to-indigo-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
        <p className="text-lg mb-6">Have questions or need support? Reach out to us, and we’ll be happy to assist you!</p>
        <a
          href="mailto:support@telemed.com"
          className="bg-yellow-500 text-white text-xl font-semibold py-3 px-8 rounded-full shadow-xl hover:bg-yellow-400 transition-all duration-300"
        >
          Contact Support
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; 2024 TeleMed. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
