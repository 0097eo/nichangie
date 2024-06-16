import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Fundetails = () => {
  const { id } = useParams();
  const [fund, setFund] = useState(null);

  useEffect(() => {
    // Replace with your data fetching logic
    const fetchFundDetails = async () => {
      const response = await fetch(`http://localhost:7000/api/v1/fundraisers/${id}`);
      const data = await response.json();
      console.log(data);
      setFund(data);
    };

    fetchFundDetails();
  }, [id]);

  if (!fund) {
    return <div>Loading...</div>;
  }

  return (
    <div className='fund-details'>
      <h2>{fund.name}</h2>
      <p>Description: {fund.description}</p>
      <p>Raised: Kshs {fund.total}</p>
      <p>End date: {new Date(fund.end_date).toLocaleDateString()}</p>
      <button>Make Donation</button>
    </div>
  );
};

export default Fundetails;
