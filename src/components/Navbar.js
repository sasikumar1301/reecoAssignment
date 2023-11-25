import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';

const Navbar = () => {
  const [showUserDetails, setShowUserDetails] = useState(false);

  const toggleUserDetails = () => {
    setShowUserDetails(!showUserDetails);
  };

  return (
    <div className="main-container">
      <nav className="navbar">
      <div className="left-side">
        <ul>
          <li><strong>Reeco</strong></li>
          <li>Store</li>
          <li>Orders</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div className="right-side">
        <div className="cart-icon"><FontAwesomeIcon icon={faShoppingCart} /></div>
        <div className="user" onClick={toggleUserDetails}>
          User
          {showUserDetails && (
            <div className="user-details">
              <p>Username: Sasi kumar</p>
              <p>Email: sasikumark084@gmail.com</p>
              <p>Phone: 9390252572</p>
            </div>
          )}
        </div>
      </div>
    </nav>
        
  
      <div className="container">
      <div className='con1'>
      <p className='para'>Order &gt; OrderID</p>
        <div className="content">
          <div className="order-info">
            <p>Order &gt; OrderID</p>
          </div>
          <div className="buttons">
            <button className="back-button">Back</button>
            <button className="approve-button">Approve Order</button>
          </div>
        </div>
      </div>
    </div>
    </div>  
   
    


  );
};

export default Navbar;
