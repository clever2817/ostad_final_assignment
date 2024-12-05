import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/services')
      .then((response) => setServices(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Our Services</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <div key={service._id} className="border rounded-lg p-4 shadow">
            <h2 className="text-xl font-bold">{service.title}</h2>
            <p className="mt-2">{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;
