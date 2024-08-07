import React, { useState } from 'react';
import axios from 'axios';

const LeadList = ({ leads, fetchLeads }) => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [editingLead, setEditingLead] = useState(null);
  const [updatedLead, setUpdatedLead] = useState({
    email: '',
    name: '',
    number: '',
    product: 'A',
  });
  const [errors, setErrors] = useState({});

  const validateLead = () => {
    const newErrors = {};

    if (!updatedLead.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(updatedLead.email)) {
      newErrors.email = 'Email address is invalid';
    }

    if (!updatedLead.name) {
      newErrors.name = 'Name is required';
    } else if (updatedLead.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters long';
    } else if (!/^[A-Za-z\s]+$/.test(updatedLead.name)) {
      newErrors.name = 'Name can only contain letters and spaces';
    }

    if (!updatedLead.number) {
      newErrors.number = 'Number is required';
    } else if (!/^\+?\d{10,15}$/.test(updatedLead.number)) {
      newErrors.number = 'Number must be between 10 to 15 digits long and can include a leading +';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/leads/${id}`);
      fetchLeads();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    if (validateLead()) {
      try {
        await axios.put(`http://localhost:5000/api/leads/${editingLead._id}`, updatedLead);
        fetchLeads();
        setEditingLead(null);
        setUpdatedLead({
          email: '',
          name: '',
          number: '',
          product: 'A',
        });
        setErrors({});
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleEditClick = (lead) => {
    setEditingLead(lead);
    setUpdatedLead({
      email: lead.email,
      name: lead.name,
      number: lead.number,
      product: lead.product,
    });
  };

  const sortedLeads = [...leads].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div className="container mx-auto p-6 bg-gray-900 rounded-lg shadow-lg text-white max-w-4xl">
      {editingLead && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6 max-w-lg mx-auto">
          <h2 className="text-xl font-semibold mb-4">Update Lead</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
            <div className="mb-4">
              <label className="block text-gray-300">Email</label>
              <input
                type="email"
                value={updatedLead.email}
                onChange={(e) => setUpdatedLead({ ...updatedLead, email: e.target.value })}
                required
                className={`mt-1 block w-full px-3 py-2 bg-gray-700 border rounded-md shadow-sm ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-600 focus:ring-indigo-500'} text-white`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Name</label>
              <input
                type="text"
                value={updatedLead.name}
                onChange={(e) => setUpdatedLead({ ...updatedLead, name: e.target.value })}
                required
                className={`mt-1 block w-full px-3 py-2 bg-gray-700 border rounded-md shadow-sm ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-600 focus:ring-indigo-500'} text-white`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Number</label>
              <input
                type="text"
                value={updatedLead.number}
                onChange={(e) => setUpdatedLead({ ...updatedLead, number: e.target.value })}
                required
                className={`mt-1 block w-full px-3 py-2 bg-gray-700 border rounded-md shadow-sm ${errors.number ? 'border-red-500 focus:ring-red-200' : 'border-gray-600 focus:ring-indigo-500'} text-white`}
              />
              {errors.number && <p className="text-red-500 text-sm mt-1">{errors.number}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Product</label>
              <select
                value={updatedLead.product}
                onChange={(e) => setUpdatedLead({ ...updatedLead, product: e.target.value })}
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 text-white"
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-md shadow-md transition-transform transform hover:scale-105 hover:from-green-600 hover:to-blue-600"
            >
              Update Lead
            </button>
          </form>
        </div>
      )}
      <div className="overflow-x-auto mt-1">
        <div className="relative bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-600 border border-gray-700">
            <thead className="bg-gray-900">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-700">Email</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-700">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-700">Number</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-700">Product</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {sortedLeads.map((lead) => (
                <tr key={lead._id}>
                  <td className="px-4 py-4 text-sm font-medium text-gray-300 border-b border-gray-700">{lead.email}</td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-300 border-b border-gray-700">{lead.name}</td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-300 border-b border-gray-700">{lead.number}</td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-300 border-b border-gray-700">{lead.product}</td>
                  <td className="px-4 py-4 text-sm font-medium border-b border-gray-700">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditClick(lead)}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-1 px-3 rounded-md shadow-md transition-transform transform hover:scale-105 hover:from-purple-600 hover:to-pink-600 text-xs sm:text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(lead._id)}
                        className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-1 px-3 rounded-md shadow-md transition-transform transform hover:scale-105 hover:from-red-600 hover:to-orange-600 text-xs sm:text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default LeadList;
