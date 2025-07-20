import React from 'react';
import "../Styles/HomeListings.css";

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={property.image} alt={property.address} />
        <button className="save-button">&#x2764;</button>
      </div>
      <div className="property-details">
        <div className="property-price">{property.price}</div>
        <div className="property-stats">
          <span><b>{property.beds}</b> bd</span>
          <span><b>{property.baths}</b> ba</span>
          <span><b>{property.sqft}</b> sqft</span>
        </div>
        <div className="property-address">{property.address}</div>
      </div>
    </div>
  );
};

export default PropertyCard;
