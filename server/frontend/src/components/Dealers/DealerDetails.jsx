import React from "react";
import { useParams } from "react-router-dom";

const DealerDetails = () => {
  const { id } = useParams();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dealer Details</h1>
      <p>Dealer ID: {id}</p>

      <div style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        display: "inline-block"
      }}>
        <h2>🚗 Demo Motors</h2>
        <p>City: Dallas</p>
        <p>State: TX</p>
        <p>Address: Main Street</p>
        <p>Contact: 123-456-7890</p>
      </div>
    </div>
  );
};

export default DealerDetails;