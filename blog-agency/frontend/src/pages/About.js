import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/team')
      .then((response) => setTeam(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="mb-8">
        We are a dedicated blog agency providing high-quality content to our clients. 
        Meet our amazing team!
      </p>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {team.map((member) => (
          <div key={member._id} className="border rounded-lg p-4 shadow">
            <img src={member.photo} alt={member.name} className="w-full h-32 object-cover rounded" />
            <h2 className="text-xl font-bold mt-2">{member.name}</h2>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
