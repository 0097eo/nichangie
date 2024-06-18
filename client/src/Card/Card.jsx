import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'; 

const Card = ({ fund, id, deleteFund }) => {
  return (
    <div className='fund-card'>
      <h3>{fund.name}</h3>
      <p>{fund.description}</p>
      <p>Raised: Kshs {fund.total}</p>
      <p>Ends On: {new Date(fund.end_date).toLocaleDateString()}</p>
      <Link to={`fund/${id}`}>
        <button className='donate-button'>Donate</button>
      </Link>
      <button className="close-button" onClick={() => deleteFund(id)}>Close</button>
    </div>
  );
}

export default Card;
