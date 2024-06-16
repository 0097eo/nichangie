import React from 'react';

const Card = ({ fund }) => {
  return (
    <div className='fund-card'>
      <h3>Fund name: {fund.name}</h3>
      <p>Description: {fund.description}</p>
      <p>Raised:Kshs {fund.total}</p>
      <p>End date:{new Date(fund.end_date).toLocaleDateString()}</p>
      <button>Donate</button>
    </div>
  );
}

export default Card;
