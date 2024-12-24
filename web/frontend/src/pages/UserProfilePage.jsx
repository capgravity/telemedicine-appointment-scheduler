import React, { useState } from 'react';

const UserProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+91 9876543210',
    address: '123, Example Street, City, Country',
    age: 30,
    gender: 'Male',
    bio: 'Enthusiastic about health and fitness!',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setEditMode(false);
    console.log('User profile saved:', profileData);
  };

  return (
    <div className="h-screen bg-gradient-to-r from-indigo-600 to-blue-700 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-6 space-y-6">
        <h2 className="text-3xl font-bold text-blue-600 text-center">My Profile</h2>

        {/* Profile Header */}
        <div className="flex items-center space-x-6">
          <img
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            className="w-36 h-36 rounded-full border-4 border-blue-500 shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-bold">{profileData.name}</h3>
            <p className="text-gray-500">User</p>
            <button
              onClick={() => setEditMode(!editMode)}
              className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-400 transition-all"
            >
              {editMode ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>
        </div>

        {/* Profile Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleInputChange}
                disabled={!editMode}
                className={`w-full px-4 py-2 rounded-lg border ${
                  editMode ? 'border-blue-500 focus:ring-2 focus:ring-blue-400' : 'border-gray-300'
                } focus:outline-none`}
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
                disabled={!editMode}
                className={`w-full px-4 py-2 rounded-lg border ${
                  editMode ? 'border-blue-500 focus:ring-2 focus:ring-blue-400' : 'border-gray-300'
                } focus:outline-none`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={profileData.phone}
                onChange={handleInputChange}
                disabled={!editMode}
                className={`w-full px-4 py-2 rounded-lg border ${
                  editMode ? 'border-blue-500 focus:ring-2 focus:ring-blue-400' : 'border-gray-300'
                } focus:outline-none`}
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={profileData.address}
                onChange={handleInputChange}
                disabled={!editMode}
                className={`w-full px-4 py-2 rounded-lg border ${
                  editMode ? 'border-blue-500 focus:ring-2 focus:ring-blue-400' : 'border-gray-300'
                } focus:outline-none`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">Age</label>
              <input
                type="number"
                name="age"
                value={profileData.age}
                onChange={handleInputChange}
                disabled={!editMode}
                className={`w-full px-4 py-2 rounded-lg border ${
                  editMode ? 'border-blue-500 focus:ring-2 focus:ring-blue-400' : 'border-gray-300'
                } focus:outline-none`}
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">Gender</label>
              <select
                name="gender"
                value={profileData.gender}
                onChange={handleInputChange}
                disabled={!editMode}
                className={`w-full px-4 py-2 rounded-lg border ${
                  editMode ? 'border-blue-500 focus:ring-2 focus:ring-blue-400' : 'border-gray-300'
                } focus:outline-none`}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Bio</label>
            <textarea
              name="bio"
              rows="3"
              value={profileData.bio}
              onChange={handleInputChange}
              disabled={!editMode}
              className={`w-full px-4 py-2 rounded-lg border ${
                editMode ? 'border-blue-500 focus:ring-2 focus:ring-blue-400' : 'border-gray-300'
              } focus:outline-none`}
            ></textarea>
          </div>
        </form>

        {editMode && (
          <div className="text-right">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-green-500 text-white rounded-full font-semibold hover:bg-green-400 transition-all"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfilePage;