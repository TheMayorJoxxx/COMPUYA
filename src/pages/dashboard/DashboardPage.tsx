import React from 'react';
import { Routes, Route } from 'react-router-dom';

function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">My Listings</h2>
          <p className="text-gray-600">Manage your laptop listings here</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Messages</h2>
          <p className="text-gray-600">View your conversations with buyers and sellers</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
          <p className="text-gray-600">Update your profile and preferences</p>
        </div>
      </div>
      
      <Routes>
        <Route index element={<div className="mt-8">Select a dashboard section</div>} />
      </Routes>
    </div>
  );
}

export default DashboardPage;