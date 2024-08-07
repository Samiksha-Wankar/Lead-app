import React, { useState } from 'react';
import axios from 'axios';

const LeadForm = ({ fetchLeads }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [product, setProduct] = useState('A');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/leads', { email, name, number, product });
      fetchLeads();
      setEmail('');
      setName('');
      setNumber('');
      setProduct('A');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-900 p-6 rounded-lg shadow-lg bg-transparent max-w-md mx-auto">
      <div>
        <label className="block text-gray-300">Email</label>
        <input
          type="email"
          value={email}
          autoComplete='email'
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 text-white"
        />
      </div>
      <div>
        <label className="block text-gray-300">Name</label>
        <input
          type="text"
          value={name}
          autoComplete='name'
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 text-white"
        />
      </div>
      <div>
        <label className="block text-gray-300">Number</label>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 text-white"
        />
      </div>
      <div>
        <label className="block text-gray-300">Product</label>
        <select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 text-white"
        >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-auto py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      >
        Add Lead
      </button>
    </form>
  );
};

export default LeadForm;
