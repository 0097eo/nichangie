import React, { useState } from 'react';
import Header from '../Header/Header';
import './NewFundraiser.css';

const NewFundraiser = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [end_date, setEndDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, end_date }),
    };

    try {
      const response = await fetch('http://localhost:7000/api/v1/fundraisers/', requestOptions);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        setName('');
        setDescription('');
        setEndDate('');
        alert('Fundraiser added successfully')
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        ></textarea>


        <label htmlFor="end_date">End Date:</label>
        <input
          id="end_date"
          type="date"
          value={end_date}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />

        <button type="submit">Create Fundraiser</button>
      </form>
    </div>
  );
};

export default NewFundraiser;
