import React, { useState, useEffect } from 'react';
import "./Dealers.css";
import "../assets/style.css";
import Header from '../Header/Header';

const Dealers = () => {
  const [dealersList, setDealersList] = useState([]);

  useEffect(() => {
    setDealersList([
      {
        id: 1,
        full_name: "Demo Motors",
        city: "Dallas",
        address: "Main St",
        zip: "75001",
        state: "TX"
      },
      {
        id: 2,
        full_name: "Auto Hub",
        city: "Austin",
        address: "2nd St",
        zip: "73301",
        state: "TX"
      },
      {
        id: 3,
        full_name: "Premium Cars",
        city: "Houston",
        address: "Market St",
        zip: "77001",
        state: "TX"
      }
    ]);
  }, []);

  return (
    <div>
      <Header />

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>🚗 Car Dealership Platform</h1>
        <p>Browse available dealers and explore car services</p>
      </div>

      <div style={{ padding: "20px" }}>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Dealer Name</th>
              <th>City</th>
              <th>Address</th>
              <th>Zip</th>
              <th>State</th>
            </tr>
          </thead>

          <tbody>
            {dealersList.map((dealer) => (
              <tr key={dealer.id}>
                <td>{dealer.id}</td>
                <td style={{ fontWeight: "bold" }}>{dealer.full_name}</td>
                <td>{dealer.city}</td>
                <td>{dealer.address}</td>
                <td>{dealer.zip}</td>
                <td>{dealer.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dealers;