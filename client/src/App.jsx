import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import Featured from './Featured/Featured';
import Card from './Card/Card';
import Search from './Search/Search';
import './App.css';

function App() {
  const [funds, setFunds] = useState([]);
  const [filteredFunds, setFilteredFunds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7000/api/v1/fundraisers/') 
     .then(res => res.json())
     .then(data => {
      setFunds(data)
      setFilteredFunds(data);
    });
  }, []);

  const deleteFundraiser = async (id) => {
    try {
      await fetch(`http://localhost:7000/api/v1/fundraisers/byid/${id}`, {
        method: 'DELETE',
      });
      const newFunds = funds.filter((fund) => fund.id!== id);
      setFunds(newFunds);
    } catch (error) {
      console.error("Failed to delete fundraiser:", error);
    }
  };
  
  const handleSearchChange = (searchTerm) => {
    const filtered = funds.filter(fund =>
      fund.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFunds(filtered);
  };

  return (
    <>
      <div>
        <Header />
        <Search onSearchChange={handleSearchChange} />
        <Featured />
        <div className='fund-container'>
          {filteredFunds.map(fund => (
            <Card key={fund.id} fund={fund} id={fund.id} deleteFund={deleteFundraiser}/>
          ))}
        </div>
        <h1>No kugeria mani</h1>
        <p>Nafaa kueka footer</p>
      </div>
    </>
  );
}

export default App;
