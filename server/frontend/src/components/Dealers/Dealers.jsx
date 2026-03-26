import React, { useState, useEffect } from "react";
import Header from "../Header/Header";

const Dealers = () => {
  const [dealersList, setDealersList] = useState([]);
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("");

  useEffect(() => {
    // Demo data (no backend dependency)
    setDealersList([
      { id: 1, full_name: "Demo Motors", city: "Dallas", state: "TX" },
      { id: 2, full_name: "Auto Hub", city: "Austin", state: "TX" },
      { id: 3, full_name: "Premium Cars", city: "Houston", state: "TX" },
      { id: 4, full_name: "Elite Autos", city: "San Jose", state: "CA" },
      { id: 5, full_name: "Speed Wheels", city: "Miami", state: "FL" }
    ]);
  }, []);

  // Filter logic
  const filteredDealers = dealersList.filter((dealer) => {
    return (
      dealer.full_name.toLowerCase().includes(search.toLowerCase()) &&
      (stateFilter === "" || dealer.state === stateFilter)
    );
  });

  return (
    <div>
      <Header />

      {/* Title */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>🚗 Car Dealership Platform</h1>
        <p>Find dealers near you</p>
      </div>

      {/* Filters */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          margin: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Search dealer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "10px", width: "200px" }}
        />

        <select
          onChange={(e) => setStateFilter(e.target.value)}
          style={{ padding: "10px" }}
        >
          <option value="">All States</option>
          <option value="TX">Texas</option>
          <option value="CA">California</option>
          <option value="FL">Florida</option>
        </select>
      </div>

      {/* Dealer Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {filteredDealers.map((dealer) => (
          <div
            key={dealer.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              width: "250px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{dealer.full_name}</h3>
            <p>📍 {dealer.city}</p>
            <p>State: {dealer.state}</p>

            {/* Navigation FIX */}
            <button style={{ padding: "8px 12px", marginTop: "10px" }}>
  View Details
</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dealers;