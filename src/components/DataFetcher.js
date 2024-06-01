import React, { useEffect, useState } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://6038lzu6h9.execute-api.ap-southeast-1.amazonaws.com/test01/datetime'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const responseData = await response.json();
      const items = responseData.body.Items; // Accessing the "Items" array from the response
      setData(items);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

 return (
  <div>
    {loading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>Error: {error}</p>
    ) : (
      <ul>
        {data.map((items) => (
          <li key={items.id}>
          <p>WF: {items.wf}</p>
          <p>Temperature: {items.temp}</p>
          <p>Datetime: {items.datetime}</p>
          <p>MOI: {items.moi}</p>
          <p>WL: {items.wl}</p>
          <p>pH: {items.ph}</p>
          <p>Pump: {items.pump}</p>
          <p>EC: {items.ec}</p>
        </li>
        ))}
      </ul>
    )}
  </div>
);
};

export default DataFetcher;