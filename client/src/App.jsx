import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import Featured from './Featured/Featured';
import Card from './Card/Card';
import Search from './Search/Search';

function App() {
  const [funds, setFunds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7000/api/v1/fundraisers/') 
     .then(res => res.json())
     .then(data => {
      setFunds(data)
    });
  }, []);

  return (
    <>
      <div>
        <Header />
        <Search />
        <Featured />
        <div className='fund-container'>
          {funds.map(fund => (
            <Card key={fund.id} fund={fund} />
          ))}
        </div>
        <h1>Hello World</h1>
        <p>This is my fundraiser app</p>
      </div>
    </>
  );
}

export default App;
