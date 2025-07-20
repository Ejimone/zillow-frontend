import React from 'react';
import PropertyCard from '../components/PropertyCard';
import "../Styles/HomeListings.css";

const Buy = () => {
  const properties = [
    {
      image: "https://via.placeholder.com/320x220",
      price: "$500,000",
      beds: 3,
      baths: 2,
      sqft: 1500,
      address: "123 Main St, Anytown, USA",
    },
    {
      image: "https://via.placeholder.com/320x220",
      price: "$750,000",
      beds: 4,
      baths: 3,
      sqft: 2200,
      address: "456 Oak Ave, Anytown, USA",
    },
    {
      image: "https://via.placeholder.com/320x220",
      price: "$320,000",
      beds: 2,
      baths: 1,
      sqft: 1100,
      address: "789 Pine Ln, Anytown, USA",
    },
    {
      image: "https://via.placeholder.com/320x220",
      price: "$620,000",
      beds: 3,
      baths: 2.5,
      sqft: 1800,
      address: "101 Maple Dr, Anytown, USA",
    },
    {
      image: "https://via.placeholder.com/320x220",
      price: "$890,000",
      beds: 5,
      baths: 4,
      sqft: 3000,
      address: "212 Birch Rd, Anytown, USA",
    },
    {
      image: "https://via.placeholder.com/320x220",
      price: "$450,000",
      beds: 2,
      baths: 2,
      sqft: 1300,
      address: "333 Cedar Ct, Anytown, USA",
    },
  ];

  return (
    <div className="home-listings-section">
      <div className="home-listings-header">
        <h2>Homes for Sale</h2>
      </div>
      <div className="home-listings-grid">
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Buy;
