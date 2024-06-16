import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({ fund, id }) => {
  return (
    <div className='fund-card'>
      <h3>Fund name: {fund.name}</h3>
      <p>Description: {fund.description}</p>
      <p>Raised:Kshs {fund.total}</p>
      <p>End date:{new Date(fund.end_date).toLocaleDateString()}</p>
      <Link to={`fund/${id}`}><button>Donate</button></Link>
    </div>
  );
}

export default Card;
