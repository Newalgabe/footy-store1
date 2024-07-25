import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartContainer = styled.div`
  position: fixed;
  top: 4rem;
  right: ${(props) => (props.open ? '0' : '-100%')};
  width: 350px;
  height: calc(100% - 4rem);
  background-color: ${(props) => (props.theme === 'light' ? '#ffffff' : '#1c1c1c')};
  color: ${(props) => (props.theme === 'light' ? '#212529' : '#ffffff')};
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  transition: right 0.3s ease;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  z-index: 10;
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 2px solid ${(props) => (props.theme === 'light' ? '#dee2e6' : '#343a40')};
  padding-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: bold;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${(props) => (props.theme === 'light' ? '#f8f9fa' : '#2c2c2c')};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CartItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 1rem;
`;

const CartItemDetails = styled.div`
  flex: 1;
`;

const CartItemName = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;

const CartItemPrice = styled.div`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: ${(props) => (props.theme === 'light' ? '#6c757d' : '#b0b0b0')};
`;

const CartItemRemove = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.theme === 'light' ? '#dc3545' : '#f86c6b')};
  cursor: pointer;
  font-size: 1rem;
`;

const Total = styled.div`
  font-weight: bold;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 2px solid ${(props) => (props.theme === 'light' ? '#dee2e6' : '#343a40')};
`;

const CheckoutButton = styled.button`
  padding: 0.75rem;
  margin-top: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`;

const CloseCartButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${(props) => (props.theme === 'light' ? '#dc3545' : '#f86c6b')};
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
`;

const FinalBill = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid ${(props) => (props.theme === 'light' ? '#dee2e6' : '#343a40')};
  border-radius: 8px;
  background-color: ${(props) => (props.theme === 'light' ? '#f8f9fa' : '#2c2c2c')};
`;

const Cart = ({ theme, cartItems, removeFromCart, handleCheckout, open, handleCartToggle }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItem = (index) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(index) ? prevSelected.filter((i) => i !== index) : [...prevSelected, index]
    );
  };

  const handleRemoveSelected = () => {
    selectedItems.forEach((index) => removeFromCart(index));
    setSelectedItems([]);
  };

  const totalPrice = cartItems
    .filter((item, index) => !selectedItems.includes(index))
    .reduce((total, item) => total + parseFloat(item.price.substring(1)), 0)
    .toFixed(2);

  return (
    <CartContainer theme={theme} open={open}>
      <CloseCartButton onClick={handleCartToggle}>×</CloseCartButton>
      <CartHeader theme={theme}>
        Shopping Cart
        {selectedItems.length > 0 && (
          <button onClick={handleRemoveSelected} className="btn btn-danger btn-sm">
            Remove Selected
          </button>
        )}
      </CartHeader>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <CartItem key={index} theme={theme}>
            <CartItemImage src={item.imageUrl} alt={item.name} />
            <CartItemDetails>
              <CartItemName>{item.name}</CartItemName>
              <CartItemPrice theme={theme}>{item.price}</CartItemPrice>
            </CartItemDetails>
            <CartItemRemove theme={theme} onClick={() => removeFromCart(index)}>
              Remove
            </CartItemRemove>
          </CartItem>
        ))
      ) : (
        <div className="text-center mt-5">Your cart is empty</div>
      )}
      {cartItems.length > 0 && (
        <>
          <Total theme={theme}>Total: ${totalPrice}</Total>
          <CheckoutButton theme={theme} onClick={handleCheckout}>
            Checkout
          </CheckoutButton>
          <FinalBill theme={theme}>
            <h6>Final Bill</h6>
            <ul>
              {cartItems
                .filter((item, index) => !selectedItems.includes(index))
                .map((item, index) => (
                  <li key={index}>
                    {item.name}: {item.price}
                  </li>
                ))}
            </ul>
            <p className="font-weight-bold">Total: ${totalPrice}</p>
          </FinalBill>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
