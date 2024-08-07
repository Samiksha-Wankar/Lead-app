import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LeadForm from './components/LeadForm';
import LeadList from './components/LeadList';
import SearchAndSort from './components/SearchAndSort';

const App = () => {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);

  const fetchLeads = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/leads');
      setLeads(response.data);
      setFilteredLeads(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900">
      <div className="galaxy-background">
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className="star"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDuration: `${Math.random() * 2 + 1}s`
            }}
          />
        ))}
      </div>
      <div className="container mx-auto p-4 relative z-10 max-w-6xl">
        <h1 className="text-2xl font-bold mb-4 text-white text-center">Lead Application</h1>
        <div className="space-y-6">
          <LeadForm fetchLeads={fetchLeads} />
          <SearchAndSort leads={leads} setFilteredLeads={setFilteredLeads} />
          <LeadList leads={filteredLeads} fetchLeads={fetchLeads} />
        </div>
      </div>
    </div>
  );
};

export default App;
