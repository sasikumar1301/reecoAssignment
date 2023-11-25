import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMusic, faCode } from '@fortawesome/free-solid-svg-icons';
import './ds.css'

const DetailsSection = () => {
  return (
    <div className="details-container">
      <div className="details-box">
        <div className="details-section">
          <p className="small-heading">Supplier</p>
          <h3>East Coast Fruits & Vegetables</h3>
        </div>
        <div className="divider"></div>
        <div className="details-section">
          <p className="small-heading">Shipping Date</p>
          <h3>Thu, Feb 10</h3>
        </div>
        <div className="divider"></div>
        <div className="details-section">
          <p className="small-heading">Total</p>
          <h3>$ 15,028.3</h3>
        </div>
        <div className="divider"></div>
        <div className="details-section">
          <p className="small-heading">Category</p>
          <div className="icons">
            {/* Placeholder icons */}
            <span className="icon"><FontAwesomeIcon icon={faCoffee} /></span>
            <span className="icon"><FontAwesomeIcon icon={faMusic} /></span>
            <span className="icon"><FontAwesomeIcon icon={faCode} /></span>
          </div>
        </div>
        <div className="divider"></div>
        <div className="details-section">
          <p className="small-heading">Department</p>
          <h3>300-444-678</h3>
        </div>
        <div className="divider"></div>
        <div className="details-section">
          <p className="small-heading">Status</p>
          <h3>Awaiting your approval</h3>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
