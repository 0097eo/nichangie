import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import './Fundetails.css';

const Fundetails = () => {
  const { id } = useParams();
  const [fund, setFund] = useState(null);

  useEffect(() => {
    const fetchFundDetails = async () => {
      const response = await fetch(`http://localhost:7000/api/v1/fundraisers/${id}`);
      const data = await response.json();
      setFund(data);
    };

    fetchFundDetails();
  }, [id]);

  if (!fund) {
    return <div>Loading...</div>;
  }

  return (
    <>
    
      <Header />
    <div className='fund-details'>
      <h3>{fund.name}</h3>
      <p>Description: {fund.description}</p>
      <p>Raised: Kshs {fund.total}</p>
      <p>Ends on: {new Date(fund.end_date).toLocaleDateString()}</p>
      <button>Make Donation</button>
    </div>
    </>
  );
};

export default Fundetails;
