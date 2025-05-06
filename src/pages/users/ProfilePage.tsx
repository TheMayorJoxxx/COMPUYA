import React from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">User Profile</h1>
        <div className="space-y-4">
          <div className="flex items-center justify-center mb-6">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-4xl text-gray-600">👤</span>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">User ID: {id}</h2>
            <p className="text-gray-600">Profile information will be loaded here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;