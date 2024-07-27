import React, { useState } from 'react';
import styled from 'styled-components';
import { catalog } from '../components/Items';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaSearch, FaFilter, FaShoppingCart } from 'react-icons/fa';
import Cart from '../components/Cart';
import BackToTop from '../components/BackToTop';
import { FaArrowLeft } from 'react-icons/fa';


const Container = styled.div`
  padding-top: 4rem;
  background-color: ${(props) => (props.theme === 'light' ? '#f9f9f9' : '#2c2c2c')};
  color: ${(props) => (props.theme === 'light' ? '#333' : '#eaeaea')};
  min-height: 100vh;
  transition: background 0.5s ease, color 0.5s ease;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  transition: background 0.5s ease, color 0.5s ease;
`;

const ProductCard = styled.div`
  background: ${(props) =>
    props.theme === 'light'
      ? 'linear-gradient(145deg, #ffffff, #e6e6e6)'
      : 'linear-gradient(145deg, #3a3a3a, #2a2a2a)'};
  border-radius: 15px;
  border: ${(props) => (props.theme === 'light' ? '1px solid #ddd' : '1px solid #555')};
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s, background 0.5s ease, color 0.5s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  img {
    border-radius: 10px;
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin-bottom: 1.5rem;
    margin-left: -20px;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  }

  h5 {
    font-size: 1.2rem;
    margin: 0.75rem 0;
  }

  p {
    font-size: 1rem;
    margin: 0.75rem 0;
  }

  button {
    background-color: ${(props) => (props.theme === 'light' ? '#007bff' : '#ffc107')};
    color: #fff;
    border: none;
    border-radius: 25px;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    transition: background-color 0.3s, opacity 0.3s, transform 0.3s;

    &:hover {
      background-color: ${(props) => (props.theme === 'light' ? '#0056b3' : '#e0a800')};
      opacity: 0.9;
      transform: translateY(-3px);
    }
  }
`;

const SortSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;
  position: relative;

  button {
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    background-color: ${(props) => (props.theme === 'light' ? '#007bff' : '#ffc107')};
    color: #fff;
    border-radius: 20px;
    font-size: 1rem;
    font-weight: 500;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, opacity 0.3s, transform 0.2s;

    &:hover {
      background-color: ${(props) => (props.theme === 'light' ? '#0056b3' : '#e0a800')};
      opacity: 0.9;
      transform: translateY(-2px);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${(props) => (props.theme === 'light' ? '#0056b3' : '#e0a800')};
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
`;

const FilterButton = styled.button`
  position: fixed;
  bottom: 6rem;
  right: 0.6rem;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  background: ${(props) => (props.theme === 'light' ? 'linear-gradient(135deg, #007bff, #0056b3)' : 'linear-gradient(135deg, #ffc107, #e0a800)')};
  color: #fff;
  border-radius: 50%;
  font-size: 1.6rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  transition: background 0.3s, transform 0.3s;
  z-index: 1000;

  &:hover {
    background: ${(props) => (props.theme === 'light' ? 'linear-gradient(135deg, #0056b3, #003d7a)' : 'linear-gradient(135deg, #e0a800, #c69100)')};
    transform: scale(1.1);
  }
`;

const CartButton = styled.button`
  position: fixed;
  bottom: 11rem;
  right: 0.6rem;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  background: ${(props) => (props.theme === 'light' ? 'linear-gradient(135deg, #007bff, #0056b3)' : 'linear-gradient(135deg, #ffc107, #e0a800)')};
  color: #fff;
  border-radius: 50%;
  font-size: 1.6rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  transition: background 0.3s, transform 0.3s;
  z-index: 1000;

  &:hover {
    background: ${(props) => (props.theme === 'light' ? 'linear-gradient(135deg, #0056b3, #003d7a)' : 'linear-gradient(135deg, #e0a800, #c69100)')};
    transform: scale(1.1);
  }
`;


const SearchInput = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.theme === 'light' ? '#f9f9f9' : '#444')};
  border-radius: 25px;
  padding: 0.5rem 1rem;
  margin: 2rem 0;
  transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${(props) => (props.theme === 'light' ? '0 2px 4px rgba(0, 0, 0, 0.1)' : '0 2px 4px rgba(0, 0, 0, 0.3)')};

  &:hover {
    box-shadow: ${(props) => (props.theme === 'light' ? '0 4px 8px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.5)')};
  }

  input {
    border: none;
    background: none;
    outline: none;
    flex: 1;
    color: ${(props) => (props.theme === 'light' ? '#333' : '#eee')};
    font-size: 1rem;
    padding: 0.5rem;
    transition: color 0.3s ease;

    &::placeholder {
      color: ${(props) => (props.theme === 'light' ? '#888' : '#bbb')};
    }
  }

  svg {
    margin-left: 0.5rem;
    color: ${(props) => (props.theme === 'light' ? '#333' : '#eee')};
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => (props.theme === 'light' ? '#007bff' : '#ffc107')};
    }
  }
`;


const CloseFilterButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${(props) => (props.theme === 'light' ? '#333' : '#eaeaea')};
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  transition: color 0.3s, transform 0.2s;

  &:hover {
    color: ${(props) => (props.theme === 'light' ? '#007bff' : '#ffc107')};
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:active {
    outline: none;
    box-shadow: none;
    color: ${(props) => (props.theme === 'light' ? '#0056b3' : '#ffca28')};
    transform: scale(1);
  }
`;

const FilterSection = styled.div`
  position: fixed;
  top: 4rem;
  right: ${(props) => (props.open ? '0' : '-100%')};
  width: 350px;
  height: calc(100% - 4rem);
  background-color: ${(props) => (props.theme === 'light' ? '#ffffff' : '#2c2c2c')};
  color: ${(props) => (props.theme === 'light' ? '#333' : '#eaeaea')};
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  transition: right 0.3s ease, background 0.5s ease, color 0.5s ease;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  z-index: 100;
  border-radius: 10px 0 0 10px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => (props.theme === 'light' ? '#f1f1f1' : '#333')};
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => (props.theme === 'light' ? '#888' : '#555')};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => (props.theme === 'light' ? '#555' : '#888')};
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${(props) => (props.theme === 'light' ? '#222' : '#ddd')};
    font-family: 'Roboto', sans-serif;
  }

  .filter-option {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 5px;
    background: ${(props) => (props.theme === 'light' ? '#f9f9f9' : '#3c3c3c')};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
      background: ${(props) => (props.theme === 'light' ? '#eaeaea' : '#444')};
    }

    label {
      font-size: 1rem;
      color: ${(props) => (props.theme === 'light' ? '#333' : '#ccc')};
      font-family: 'Roboto', sans-serif;
    }

    input[type='checkbox'] {
      margin-right: 0.5rem;
    }
  }
`;

const FilterGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FilterTitle = styled.h5`
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${(props) => (props.theme === 'light' ? '#333' : '#eaeaea')};
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;


const FilterItem = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8px;
  background: ${(props) => (props.theme === 'light' ? '#f9f9f9' : '#2c2c2c')};
  box-shadow: ${(props) => (props.theme === 'light' ? '0 2px 4px rgba(0, 0, 0, 0.1)' : '0 2px 4px rgba(0, 0, 0, 0.3)')};
  transition: background 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: ${(props) => (props.theme === 'light' ? '#eaeaea' : '#444')};
    box-shadow: ${(props) => (props.theme === 'light' ? '0 4px 8px rgba(0, 0, 0, 0.15)' : '0 4px 8px rgba(0, 0, 0, 0.35)')};
  }

  input {
    margin-right: 0.75rem;
    accent-color: ${(props) => (props.theme === 'light' ? '#007bff' : '#bbb')};
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  label {
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => (props.theme === 'light' ? '#333' : '#ccc')};
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
  }
`;

const PriceRange = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid ${(props) => (props.theme === 'light' ? '#ccc' : '#333')};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => (props.theme === 'light' ? '#f9f9f9' : '#444')};
  width: 100%;
  max-width: 300px;
  margin: 1rem auto;

  input[type='range'] {
    -webkit-appearance: none;
    width: 100%;
    height: 8px;
    background: ${(props) => (props.theme === 'light' ? '#ddd' : '#555')};
    border-radius: 5px;
    outline: none;
    opacity: 0.7;
    transition: opacity .2s;

    &:hover {
      opacity: 1;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: ${(props) => (props.theme === 'light' ? '#007bff' : '#bbb')};
      cursor: pointer;
    }

    &::-moz-range-thumb {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: ${(props) => (props.theme === 'light' ? '#007bff' : '#bbb')};
      cursor: pointer;
    }
  }

  span {
    margin-top: 0.5rem;
    font-size: 1.2rem;
    color: ${(props) => (props.theme === 'light' ? '#333' : '#ddd')};
    font-family: 'Roboto', sans-serif;
  }
`;

const GoBackButton = styled.button`
  border-radius: 50px;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  text-transform: uppercase;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.6s ease;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  margin-right: auto;
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    background: linear-gradient(135deg, #6a5acd, #6a4b8d);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.5);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  svg {
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    margin-right: 0.5rem;
  }
`;

const Catalog = ({ theme, toggleTheme }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [sortOption, setSortOption] = useState('new');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [search, setSearch] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleSort = (option) => {
    setSortOption(option);
  };

  const handleFilterToggle = () => {
    setFilterOpen(!filterOpen);
  };

  const handleCartToggle = () => {
    setCartOpen(!cartOpen);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleColorChange = (event) => {
    const color = event.target.value;
    setSelectedColors((prev) =>
      event.target.checked ? [...prev, color] : prev.filter((c) => c !== color)
    );
  };

  const handleSizeChange = (event) => {
    const size = event.target.value;
    setSelectedSizes((prev) =>
      event.target.checked ? [...prev, size] : prev.filter((s) => s !== size)
    );
  };

  const handleKeywordChange = (event) => {
    const keyword = event.target.value;
    setSelectedKeywords((prev) =>
      event.target.checked ? [...prev, keyword] : prev.filter((k) => k !== keyword)
    );
  };

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCheckout = () => {
    alert('Checkout successful!');
    setCartItems([]);
    setCartOpen(false);
  };

  const getFilteredCatalog = () => {
    let items = [];
    catalog.forEach((category) => {
      items = items.concat(category.items);
    });

    return items
      .filter(
        (item) =>
          item &&
          (!search || item.name.toLowerCase().includes(search.toLowerCase())) &&
          (!selectedColors.length || item.colors && item.colors.some((color) => selectedColors.includes(color))) &&
          (!selectedSizes.length || item.size && item.size.some((size) => selectedSizes.includes(size))) &&
          (!selectedKeywords.length || item.keywords && selectedKeywords.every((keyword) => item.keywords.includes(keyword))) &&
          parseInt(item.price.substring(1)) >= priceRange[0] &&
          parseInt(item.price.substring(1)) <= priceRange[1]
      )
      .sort((a, b) => {
        const priceA = parseFloat(a.price.substring(1));
        const priceB = parseFloat(b.price.substring(1));
        if (sortOption === 'price_asc') return priceA - priceB;
        if (sortOption === 'price_desc') return priceB - priceA;
        return 0;
      });
  };

  const filteredCatalog = getFilteredCatalog();

  return (
    <Container theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <SortSection theme={theme}>
  <GoBackButton onClick={() => window.history.back()}>
    <FaArrowLeft /> Go Back
  </GoBackButton>
  <button onClick={() => handleSort('new')}>New</button>
  <button onClick={() => handleSort('price_asc')}>Price Low to High</button>
  <button onClick={() => handleSort('price_desc')}>Price High to Low</button>
</SortSection>



{!filterOpen && !cartOpen && (
        <>
          <FilterButton onClick={handleFilterToggle} theme={theme}>
          <FaFilter />
          </FilterButton>
          <CartButton onClick={handleCartToggle} theme={theme}>
            <FaShoppingCart />
          </CartButton>
        </>
      )}

      <FilterSection open={filterOpen} theme={theme}>
        <CloseFilterButton onClick={handleFilterToggle} theme={theme}>×</CloseFilterButton>
        <SearchInput theme={theme}>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={handleSearchChange}
          />
          <FaSearch />
        </SearchInput>
        <FilterGroup>
          <FilterTitle theme={theme}>Price Range </FilterTitle>
          <PriceRange theme={theme}>
            <input
              type="range"
              min={0}
              max={150}
              value={priceRange[0]}
              onChange={(event) => handlePriceChange(event, [event.target.valueAsNumber, priceRange[1]])}
            />
            <input
              type="range"
              min={0}
              max={150}
              value={priceRange[1]}
              onChange={(event) => handlePriceChange(event, [priceRange[0], event.target.valueAsNumber])}
            />
            <span>${priceRange[0]} - ${priceRange[1]}</span>
          </PriceRange>
        </FilterGroup>
        <FilterGroup>
          <FilterTitle theme={theme}>Colors</FilterTitle>
          {["White", "Blue", "Yellow", "Black", "Brown", "Light Blue", "Dark Blue", "Green", "Light Grey", "Red", "Grey", "Silver", "Orange", "Navy Blue"].map((color) => (
            <FilterItem key={color} theme={theme}>
              <input
                type="checkbox"
                value={color}
                checked={selectedColors.includes(color)}
                onChange={handleColorChange}
              />
              <label>{color}</label>
            </FilterItem>
          ))}
        </FilterGroup>
        <FilterGroup>
          <FilterTitle theme={theme}>Sizes</FilterTitle>
          {["1", "4", "5", "8", "9", "10", "11", "S", "M", "L", "XL", "24x36", "One Size"].map((size) => (
            <FilterItem key={size} theme={theme}>
              <input
                type="checkbox"
                value={size}
                checked={selectedSizes.includes(size)}
                onChange={handleSizeChange}
              />
              <label>{size}</label>
            </FilterItem>
          ))}
        </FilterGroup>
        <FilterGroup>
          <FilterTitle theme={theme}>Keywords</FilterTitle>
          {[
  "official", "match", "football", "training", "durable", "plush", "kids", 
  "street", "retro", "classic", "home", "jersey", "away", "third", 
  "performance", "nike", "phantom", "adidas", "predator", 
  "puma", "future", "under armour", "magnetico", "new balance", "furon", 
  "scarf", "accessory", "winter", "cap", "summer", "gloves", "backpack", 
  "school", "beanie", "keychain", "souvenir", "gift", "mug", "poster", 
  "wall decor", "pennant", "decoration", "magnet", "goalkeeper", "gear", 
  "shorts", "socks", "pads"
].map(
            (keyword) => (
              <FilterItem key={keyword} theme={theme}>
                <input
                  type="checkbox"
                  value={keyword}
                  checked={selectedKeywords.includes(keyword)}
                  onChange={handleKeywordChange}
                />
                <label>{keyword}</label>
              </FilterItem>
            )
          )}
        </FilterGroup>
      </FilterSection>
      <ProductGrid>
        {filteredCatalog.map((item, index) => (
          <ProductCard key={index} theme={theme}>
            <img src={item.imageUrl} alt={item.name} />
            <h5>{item.name}</h5>
            <p>{item.price}</p>
            <p>{item.colors && item.colors.join(', ')}</p>
            <p>{item.size && item.size.join(', ')}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </ProductCard>
        ))}
      </ProductGrid>
      <Cart
  theme={theme}
  cartItems={cartItems}
  removeFromCart={removeFromCart}
  handleCheckout={handleCheckout}
  open={cartOpen}
  handleCartToggle={handleCartToggle}
/>
      <Footer theme={theme} />
      <BackToTop theme={theme} />
    </Container>
  );
};

export default Catalog;
