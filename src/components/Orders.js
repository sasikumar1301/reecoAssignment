import React, { useState, useEffect } from 'react';
import orderDetails from './orders.json';
import './Orders.css'

const Categories = () => {
  const [ordersData, setOrdersData] = useState([]);
  const [editPopupOpen, setEditPopupOpen] = useState(false);
  const [editedPrice, setEditedPrice] = useState(0);
  const [editedQuantity, setEditedQuantity] = useState(0);
  const [selectedReason, setSelectedReason] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  
  const [showMissingPopup, setShowMissingPopup] = useState(false);

  useEffect(() => {
    // Set the orders data using the imported data
    setOrdersData(orderDetails);
  }, []);

  const handleStatusUpdate = (status, orderId) => {
    const orderToUpdate = ordersData.find(order => order.id === orderId);
    if (orderToUpdate) {
      let updatedStatus = '';
      if (status === 'Approved') {
        updatedStatus = 'Approved';
      } else if (status === 'Missing') {
        // Instead of alert, set the state to show the modal
        setShowMissingPopup(true);
        return;
      }
      const updatedOrders = ordersData.map((order) => {
        if (order.id === orderId) {
          return { ...order, lastStatus: updatedStatus };
        }
        return order;
      });
      setOrdersData(updatedOrders);
    }
  };

  const handleMissingPopupResponse = (response) => {
    setShowMissingPopup(false);
    if (response === 'Yes' && selectedOrder) {
      const updatedOrders = ordersData.map((order) => {
        if (order.id === selectedOrder.id) {
          return { ...order, lastStatus: 'Missing Urgent' };
        }
        return order;
      });
      setOrdersData(updatedOrders);
    } else if (selectedOrder) {
      const updatedOrders = ordersData.map((order) => {
        if (order.id === selectedOrder.id) {
          return { ...order, lastStatus: 'Missing' };
        }
        return order;
      });
      setOrdersData(updatedOrders);
    }
  };


  const handleEdit = () => {
    if (selectedOrder) {
      setEditedPrice(selectedOrder.price);
      setEditedQuantity(selectedOrder.quantity);
      setEditPopupOpen(true);
    }
  };

  const handleSaveEdit = () => {
    if (selectedOrder) {
      let status = '';
      if (selectedReason === 'Price changed') {
        status = 'Price changed';
      } else if (selectedReason === 'Quantity updated') {
        status = 'Quantity updated';
      } else {
        status = selectedReason;
      }

      const updatedOrders = ordersData.map((order) => {
        if (order.id === selectedOrder.id) {
          const totalPrice = editedPrice * editedQuantity;
          return {
            ...order,
            price: editedPrice,
            quantity: editedQuantity,
            total: totalPrice,
            lastStatus: status,
          };
        }
        return order;
      });
      setOrdersData(updatedOrders);
      setEditPopupOpen(false);
    }
  };

  const handleRowClick = (order) => {
    setSelectedOrder(order);
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    // Implement search/filter logic based on the input value
    // Filter the ordersData based on searchInput
  };

  return (
    <div className='main-con'>
    <div className="categories-container">
      <div className="search-section">
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={handleSearch}
        />
        <div className="buttons">
          <button className="add-item">Add Item</button>
          <button className="print-icon">
            <i className="fas fa-print"></i>
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map((order, index) => (
            <tr key={index} onClick={() => handleRowClick(order)}>
              
              <td> <img className='logo' src='' alt="avocado" />
              {order.productName}</td>
              <td>{order.brand}</td>
              <td>{order.price}</td>
              <td>{order.quantity}</td>
              <td>{order.total}</td>
              <td className='status'>{order.lastStatus}</td>
              <td>
                <button onClick={() => handleStatusUpdate('Approved', order.id)}>✓</button>
                <button onClick={() => handleStatusUpdate('Missing', order.id)}>✕</button>
                <button onClick={handleEdit}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showMissingPopup && (
        <div className="modal">
          <h2>{`Is ${selectedOrder?.productName} urgent?`}</h2>
          <button onClick={() => handleMissingPopupResponse('Yes')}>Yes</button>
          <button onClick={() => handleMissingPopupResponse('No')}>No</button>
        </div>
      )}

      {editPopupOpen && (
        <div className="edit-popup">
          <input
            type="number"
            value={editedPrice}
            onChange={(e) => setEditedPrice(e.target.value)}
            placeholder="Product Price"
          />
          <input
            type="number"
            value={editedQuantity}
            onChange={(e) => setEditedQuantity(e.target.value)}
            placeholder="Product Quantity"
          />
          <select value={selectedReason} onChange={(e) => setSelectedReason(e.target.value)}>
            <option value="">Select Reason</option>
            <option value="Missing product">Missing product</option>
            <option value="Quantity is not same">Quantity is not same</option>
            <option value="Price is not the same">Price is not the same</option>
            <option value="Other">Other</option>
          </select>
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Categories;
