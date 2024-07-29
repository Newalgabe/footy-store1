import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartContainer = styled.div`
  position: fixed;
  top: 4rem;
  right: ${(props) => (props.open ? '0' : '-100%')};
  width: 320px;
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
  padding-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  padding: 0.75rem;
  border-radius: 12px;
  background: ${(props) =>
    props.theme === 'light'
      ? 'linear-gradient(145deg, #f8f9fa, #eaeaea)'
      : 'linear-gradient(145deg, #2c2c2c, #1f1f1f)'};
  box-shadow: ${(props) =>
    props.theme === 'light'
      ? '4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.5)'
      : '4px 4px 8px rgba(0, 0, 0, 0.4), -4px -4px 8px rgba(0, 0, 0, 0.2)'};
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) =>
      props.theme === 'light'
        ? '6px 6px 12px rgba(0, 0, 0, 0.15), -6px -6px 12px rgba(255, 255, 255, 0.6)'
        : '6px 6px 12px rgba(0, 0, 0, 0.5), -6px -6px 12px rgba(0, 0, 0, 0.3)'};
  }
`;

const CartItemImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const CartItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
`;

const CartItemName = styled.div`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
`;

const CartItemPrice = styled.div`
  font-size: 1rem;
`;

const CartItemRemove = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.theme === 'light' ? '#dc3545' : '#f86c6b')};
  cursor: pointer;
  font-size: 1.125rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => (props.theme === 'light' ? '#c82333' : '#e83e8c')};
  }
`;

const RemoveAllButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.theme === 'light' ? '#dc3545' : '#f86c6b')};
  cursor: pointer;
  font-size: 1rem;
  margin-left: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => (props.theme === 'light' ? '#c82333' : '#e83e8c')};
  }
`;

const Total = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 2px solid ${(props) => (props.theme === 'light' ? '#dee2e6' : '#343a40')};
  color: ${(props) => (props.theme === 'light' ? '#212529' : '#e9ecef')};
`;

const CheckoutButton = styled.button`
  padding: 0.75rem;
  margin-top: 1rem;
  background: ${(props) =>
    props.theme === 'light'
      ? 'linear-gradient(145deg, #1e90ff, #4682b4)'
      : 'linear-gradient(145deg, #ffc107, #ffca28)'};
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 12px;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: ${(props) =>
    props.theme === 'light'
      ? '4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.5)'
      : '4px 4px 8px rgba(0, 0, 0, 0.3), -4px -4px 8px rgba(0, 0, 0, 0.2)'};
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.theme === 'light'
        ? 'linear-gradient(145deg, #1c86ee, #4169e1)'
        : 'linear-gradient(145deg, #e0a800, #ffb300)'};
    transform: translateY(-2px);
    box-shadow: ${(props) =>
      props.theme === 'light'
        ? '6px 6px 12px rgba(0, 0, 0, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.6)'
        : '6px 6px 12px rgba(0, 0, 0, 0.4), -6px -6px 12px rgba(0, 0, 0, 0.3)'};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => (props.theme === 'light' ? '#1e90ff' : '#ffc107')};
  }
`;

const CloseCartButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${(props) => (props.theme === 'light' ? '#1e90ff' : '#ffc107')};
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${(props) => (props.theme === 'light' ? '#1c86ee' : '#e0a800')};
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => (props.theme === 'light' ? '#1e90ff' : '#ffc107')};
  }
`;

const FinalBill = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: ${(props) =>
    props.theme === 'light'
      ? 'linear-gradient(145deg, #ffffff, #f1f1f1)'
      : 'linear-gradient(145deg, #2a2a2a, #1e1e1e)'};
  border: 1px solid ${(props) => (props.theme === 'light' ? '#ced4da' : '#495057')};
  box-shadow: ${(props) =>
    props.theme === 'light'
      ? '6px 6px 12px rgba(0, 0, 0, 0.15), -6px -6px 12px rgba(255, 255, 255, 0.5)'
      : '6px 6px 12px rgba(0, 0, 0, 0.4), -6px -6px 12px rgba(0, 0, 0, 0.3)'};
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  
  &:hover {
    box-shadow: ${(props) =>
      props.theme === 'light'
        ? '8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.6)'
        : '8px 8px 16px rgba(0, 0, 0, 0.5), -8px -8px 16px rgba(0, 0, 0, 0.4)'};
    transform: translateY(-2px);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }

  @media (max-width: 600px) {
    padding: 1rem;
    h3 {
      font-size: 1.25rem;
    }
    p {
      font-size: 0.875rem;
    }
  }
`;


const Cart = ({ cartItems, removeFromCart, handleCheckout, open, handleCartToggle, theme }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const aggregatedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const handleSelectItem = (index) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(index) ? prevSelected.filter((i) => i !== index) : [...prevSelected, index]
    );
  };

  const handleRemoveSelected = () => {
    selectedItems.forEach((index) => removeFromCart(index));
    setSelectedItems([]);
  };

  const handleRemoveAll = (index) => {
    const itemToRemove = aggregatedItems[index];
    for (let i = 0; i < itemToRemove.quantity; i++) {
      removeFromCart(index);
    }
    setSelectedItems([]);
  };

  const totalPrice = aggregatedItems
    .filter((item, index) => !selectedItems.includes(index))
    .reduce((total, item) => total + parseFloat(item.price.substring(1)) * item.quantity, 0)
    .toFixed(2);

  return (
    <CartContainer theme={theme} open={open}>
      <CloseCartButton onClick={handleCartToggle} theme={theme}>×</CloseCartButton>
      <CartHeader theme={theme}>
        Shopping Cart
        {selectedItems.length > 0 && (
          <button onClick={handleRemoveSelected} className="btn btn-danger btn-sm">
            Remove Selected
          </button>
        )}
      </CartHeader>
      {aggregatedItems.length > 0 ? (
        aggregatedItems.map((item, index) => (
          <CartItem key={index} theme={theme}>
            <CartItemImage src={item.imageUrl} alt={item.name} />
            <CartItemDetails>
              <CartItemName>
                {item.name} {item.quantity > 1 && ` (x${item.quantity})`}
              </CartItemName>
              <CartItemPrice theme={theme}>{item.price}</CartItemPrice>
            </CartItemDetails>
            <div>
              {item.quantity > 1 && (
                <RemoveAllButton theme={theme} onClick={() => handleRemoveAll(index)}>
                  Remove All
                </RemoveAllButton>
              )}
              <CartItemRemove theme={theme} onClick={() => removeFromCart(index)}>
                Remove
              </CartItemRemove>
            </div>
          </CartItem>
        ))
      ) : (
        <div className="text-center mt-5">Your cart is empty</div>
      )}
      {aggregatedItems.length > 0 && (
        <>
          <Total theme={theme}>Total: ${totalPrice}</Total>
          <CheckoutButton theme={theme} onClick={handleCheckout}>
            Checkout
          </CheckoutButton>
          <FinalBill theme={theme}>
            <h6>Final Bill</h6>
            <ul>
              {aggregatedItems
                .filter((item, index) => !selectedItems.includes(index))
                .map((item, index) => (
                  <li key={index}>
                    {item.name} (x{item.quantity}): {item.price}
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
